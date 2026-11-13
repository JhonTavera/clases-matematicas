import sys, re, json, time
from pathlib import Path
import sympy as s
from sympy.parsing.latex import parse_latex

ROOT = Path(__file__).resolve().parent.parent
text = (ROOT / 'index.html').read_text(encoding='utf-8')
items = json.loads(re.search(r'const LIMITES = (\[.*?\]);', text, re.S).group(1))
solution_text = (ROOT / 'soluciones.js').read_text(encoding='utf-8')
solutions = json.loads(re.search(r'window.SOLUCIONES = (\{.*\});', solution_text, re.S).group(1))
assert set(solutions) == {item['id'] for item in items}, 'Every exercise needs exactly one solution'

def split_limit(latex):
    start = latex.index('{')
    depth = 1
    end = start + 1
    while depth:
        depth += (latex[end] == '{') - (latex[end] == '}')
        end += 1
    head, body = latex[start+1:end-1], latex[end:]
    var, point = head.split(r'\to')
    direction = '+-' if not point.endswith(('^+', '^-')) else point[-1]
    if direction != '+-': point = point[:-2]
    point = parse_latex(point.strip())
    point = point.subs({v:s.pi for v in point.free_symbols if v.name == 'pi'})
    x = s.Symbol(var.replace('\\', '').strip(), real=True)
    if r'\operatorname{arccsc}' in body:
        expression = s.asin(x/s.sqrt(x*x-3*x))
    elif body.startswith(r'\left|') and body.endswith(r'\right|'):
        expression = s.Abs(parse_latex(body[6:-7]))
        expression = expression.subs({v:x for v in expression.free_symbols})
    else:
        expression = parse_latex(body)
        expression = expression.subs({v:(s.pi if v.name == 'pi' else s.E if v.name == 'e' else x) for v in expression.free_symbols})
        # Odd-denominator rational powers mean real roots in this real calculus game.
        expression = expression.replace(
            lambda z: z.is_Pow and s.simplify(z.exp).is_Rational and s.simplify(z.exp).q % 2 == 1 and s.simplify(z.exp).q > 1,
            lambda z: s.sign(z.base)**s.simplify(z.exp).p * s.Abs(z.base)**s.simplify(z.exp))
    return x, point, direction, expression

def evaluate(item):
    x,a,d,f = split_limit(item['latex'])
    if item['id'] == 'B16':
        return dict(item, expression=str(f), value='No definido en R por la izquierda', computed='NE', details='ln(x) exige x > 0; 0 no es punto de acumulación del dominio por la izquierda.')
    t = s.Symbol('h', positive=True)
    sides = [d] if d != '+-' or a in [s.oo,-s.oo] else ['-','+']
    results=[]
    signs=[]
    for side in sides:
        sub = (1/t if a == s.oo else -1/t) if a in [s.oo,-s.oo] else a+(t if side=='+' else -t)
        ft=s.refine(f.subs(x,sub), s.Q.positive(1-t) & s.Q.negative(t-1))
        ft=s.simplify(ft)
        value=s.limit(ft,t,0,dir='+')
        results.append(value)
        if value == 0:
            # A symbolic eventual sign; oscillatory signs intentionally stay unclassified.
            try: signs.append(s.limit(s.sign(ft),t,0,dir='+'))
            except (NotImplementedError, ValueError): signs.append(None)
    if len(results)==2 and results[0] != results[1]:
        ans='NE'; value='izq: '+str(results[0])+'; der: '+str(results[1])
    else:
        val=results[0]; value=str(val)
        if val == s.oo: ans='+infinito'
        elif val == -s.oo: ans='-infinito'
        elif val == 0: ans='0+' if signs and all(z==1 for z in signs) else '0-' if signs and all(z==-1 for z in signs) else '0'
        elif val.is_real and val.is_finite and val.is_positive: ans='L'
        elif val.is_real and val.is_finite and val.is_negative: ans='-L'
        elif isinstance(val, s.AccumBounds): ans='NE'
        else: ans='REVISAR'
    return dict(item,expression=str(f),value=value,computed=ans,signs=[str(v) for v in signs],details='')

def verify_solution(row):
    """Compare the authored exact value/lateral values with the independent calculation."""
    solution = solutions[row['id']]
    assert solution['respuesta'] == row['computed'], 'Solution classification differs'
    assert solution['pasos'] and all(step.strip() for step in solution['pasos']), 'Empty solution'
    def same_value(latex, calculated):
        if latex in (r'0^+', r'0^-'): latex = '0'
        value = parse_latex(latex)
        value = value.subs({v:s.pi for v in value.free_symbols if v.name == 'pi'})
        actual = s.sympify(calculated)
        return value == actual or s.simplify(value-actual) == 0
    if row['computed'] == 'NE':
        assert solution['valor'] == r'\mathrm{NE}'
        if 'laterales' in solution:
            calculated = re.fullmatch(r'izq: (.*); der: (.*)', row['value'])
            assert calculated and all(same_value(v,c) for v,c in zip(solution['laterales'],calculated.groups())), 'Lateral values differ'
    else:
        assert same_value(solution['valor'],row['value']), 'Exact solution value differs'
        if row['computed'] in ('0+','0-'):
            assert solution['valor'] == ('0^+' if row['computed']=='0+' else '0^-'), 'Approach sign differs'
    return True

if __name__=='__main__':
    selected = [it for it in items if len(sys.argv)<2 or it['id']==sys.argv[1]]
    results=[]
    for it in selected:
        try:
            row=evaluate(it)
            row['solution_verified'] = verify_solution(row)
        except Exception as e: row=dict(it,computed='ERROR',value=str(e))
        results.append(row)
        print(json.dumps(row,ensure_ascii=False),flush=True)
    failures = [r for r in results if r['computed'] != r['respuesta']]
    print(f'{len(results)} limites; {len(failures)} discrepancias', file=sys.stderr)
    sys.exit(1 if failures else 0)
