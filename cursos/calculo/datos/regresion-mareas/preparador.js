(function(root){
'use strict';
// Calendar differences in a fixed UTC-5 zone: using UTC components preserves elapsed hours.
function clock(date,time='00:00:00'){
 const m=/^(\d{4})-(\d{2})-(\d{2})$/.exec(date),h=/^(\d{2}):(\d{2})(?::(\d{2}))?$/.exec(time);
 if(!m||!h)return NaN;
 return Date.UTC(+m[1],+m[2]-1,+m[3],+h[1],+h[2],+(h[3]||0));
}
function prepare(text,start,end,origin){
 const lo=clock(start),hi=clock(end,'23:59:59'),zero=clock(origin);
 if(![lo,hi,zero].every(Number.isFinite)||lo>hi)throw Error('Revise las fechas: el inicio debe ser anterior o igual al final.');
 const lines=text.replace(/^\uFEFF/,'').trim().split(/\r?\n/),headers=lines[0].split('\t');
 if(headers.length<7||!headers[0].includes('Fecha')||!headers[1].includes('Hora')||!headers[6].includes('QF'))throw Error('Seleccione el TXT original de nivel del mar con control de calidad (siete columnas separadas por tabulaciones).');
 let excluded=0;const points=[],stations=new Set();
 for(const line of lines.slice(2)){
  const cells=line.split('\t');if(cells.length<7)continue;
  const stamp=clock(cells[0],cells[1]);if(!Number.isFinite(stamp)||stamp<lo||stamp>hi)continue;
  const level=Number(cells[5]);
  if(cells[6].trim()!=='1'||cells[5].trim()===''||!Number.isFinite(level)||level===-99999){excluded++;continue;}
  points.push([(stamp-zero)/3600000,level]);stations.add(cells[4].trim());
 }
 if(stations.size>1)throw Error('El archivo contiene varias estaciones: utilice una estación por ajuste.');
 points.sort((a,b)=>a[0]-b[0]);if(!points.length)throw Error('No hay mediciones buenas en el intervalo seleccionado.');
 const tsv=points.map(p=>p.join('\t')).join('\n');return {points,excluded,station:[...stations][0],tsv};
}
if(typeof module==='object'&&module.exports)module.exports={prepare};
if(!root.document)return;
const $=id=>document.getElementById(id);let prepared=null;
function reset(){prepared=null;$('copy-data').disabled=true;$('copy-range').disabled=true;$('save-data').disabled=true;$('preview-data').value='';}
$('filter-data').addEventListener('click',async()=>{
 reset();const f=$('source-file').files[0];if(!f){$('filter-status').textContent='Primero seleccione el archivo TXT descargado.';return;}
 try{
  prepared=prepare(await f.text(),$('start-date').value,$('end-date').value,$('origin-date').value);
  $('preview-data').value=prepared.tsv;$('copy-data').disabled=false;$('copy-range').disabled=false;$('save-data').disabled=false;
  $('filter-status').textContent=`${prepared.station}: ${prepared.points.length} datos buenos; ${prepared.excluded} registros excluidos por calidad o valor faltante. Tiempo en horas desde ${$('origin-date').value} a las 00:00 (UTC-5).`;
 }catch(err){$('filter-status').textContent=err.message;}
});
$('copy-data').addEventListener('click',async()=>{
 if(!prepared)return;
 try{await navigator.clipboard.writeText(prepared.tsv);$('filter-status').textContent='Dos columnas copiadas, sin encabezados. Péguelas en una expresión vacía de Desmos.';}
 catch(e){$('preview-data').focus();$('preview-data').select();$('filter-status').textContent='Pulse Ctrl+C (o ⌘C) para copiar la tabla seleccionada.';}
});
$('copy-range').addEventListener('click',async()=>{
 if(!prepared)return;const tsv=prepared.points.filter(p=>p[0]>=0&&p[0]<=72).map(p=>p.join('\t')).join('\n');
 if(!tsv){$('filter-status').textContent='El intervalo seleccionado no contiene datos entre t=0 y t=72.';return;}
 try{await navigator.clipboard.writeText(tsv);$('filter-status').textContent='Intervalo de ajuste copiado (0–72 h). Pégelo en Desmos.';}
 catch(e){$('preview-data').value=tsv;$('preview-data').focus();$('preview-data').select();$('filter-status').textContent='Pulse Ctrl+C (o ⌘C) para copiar el intervalo seleccionado. Separar y filtrar restaura la tabla completa.';}
});
$('save-data').addEventListener('click',()=>{
 if(!prepared)return;const blob=new Blob(['tiempo_h\tnivel_m\n'+prepared.tsv+'\n'],{type:'text/tab-separated-values;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=prepared.station+'_'+$('start-date').value+'_'+$('end-date').value+'.tsv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
});
for(const id of ['source-file','start-date','end-date','origin-date'])$(id).addEventListener('change',reset);
})(typeof window!=='undefined'?window:globalThis);
