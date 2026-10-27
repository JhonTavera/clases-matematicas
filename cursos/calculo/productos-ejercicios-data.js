/* Banco original: 62 de factorización, 16 de raíces y seis operaciones con complejos. */
window.PRODUCTOS_EXERCISES = {
  "version": 1,
  "exercises": [
    {
      "id": "factor-1",
      "number": 1,
      "topic": "factorizacion",
      "level": "basico",
      "group": "Estructura de cocientes",
      "title": "Factorización 1",
      "promptHtml": "<p>Simplifique cada expresión.</p><div class=\"math\">\\[\\dfrac{\\dfrac{x}{y}}{z}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{x}{yz}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\((x,y,z)\\in\\mathbb R^3,\\quad y\\ne0,\\ z\\ne0\\).</p>"
    },
    {
      "id": "factor-2",
      "number": 2,
      "topic": "factorizacion",
      "level": "basico",
      "group": "Estructura de cocientes",
      "title": "Factorización 2",
      "promptHtml": "<p>Simplifique cada expresión.</p><div class=\"math\">\\[\\dfrac{x}{\\dfrac{y}{z}}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{xz}{y}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\((x,y,z)\\in\\mathbb R^3,\\quad y\\ne0,\\ z\\ne0\\).</p>"
    },
    {
      "id": "factor-3",
      "number": 3,
      "topic": "factorizacion",
      "level": "basico",
      "group": "Productos con factor común y diferencias de cuadrados",
      "title": "Factorización 3",
      "promptHtml": "<p>Simplifique cada producto.</p><div class=\"math\">\\[\\dfrac{4x}{x^2 - 4} \\cdot \\dfrac{x + 2}{16x}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{1}{4(x-2)}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in\\mathbb R\\setminus\\{-2,0,2\\}\\).</p>"
    },
    {
      "id": "factor-4",
      "number": 4,
      "topic": "factorizacion",
      "level": "basico",
      "group": "Productos con factor común y diferencias de cuadrados",
      "title": "Factorización 4",
      "promptHtml": "<p>Simplifique cada producto.</p><div class=\"math\">\\[\\dfrac{x^2 - 25}{x^2 - 16} \\cdot \\dfrac{x + 4}{x + 5}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{x-5}{x-4}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in\\mathbb R\\setminus\\{-5,-4,4\\}\\).</p>"
    },
    {
      "id": "factor-5",
      "number": 5,
      "topic": "factorizacion",
      "level": "basico",
      "group": "Productos con factor común y diferencias de cuadrados",
      "title": "Factorización 5",
      "promptHtml": "<p>Simplifique cada producto.</p><div class=\"math\">\\[\\dfrac{t - 3}{t^2 + 9} \\cdot \\dfrac{t + 3}{t^2 - 9}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{1}{t^2+9}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(t\\in\\mathbb R\\setminus\\{-3,3\\}\\).</p>"
    },
    {
      "id": "factor-6",
      "number": 6,
      "topic": "factorizacion",
      "level": "basico",
      "group": "Verificación de igualdades algebraicas",
      "title": "Factorización 6",
      "promptHtml": "<p>Determine si cada igualdad es una identidad en el dominio común de ambos miembros. Justifique su decisión.</p><div class=\"math\">\\[\\dfrac{16 + a}{16} = 1 + \\dfrac{a}{16}\\]</div>",
      "answerHtml": "<p><strong>Sí es una identidad.</strong></p><p class=\"answer-domain\"><strong>Dominio real común:</strong> \\(a\\in\\mathbb R\\).</p>"
    },
    {
      "id": "factor-7",
      "number": 7,
      "topic": "factorizacion",
      "level": "basico",
      "group": "Verificación de igualdades algebraicas",
      "title": "Factorización 7",
      "promptHtml": "<p>Determine si cada igualdad es una identidad en el dominio común de ambos miembros. Justifique su decisión.</p><div class=\"math\">\\[\\dfrac{b}{b - c} = 1 - \\dfrac{b}{c}\\]</div>",
      "answerHtml": "<p><strong>No es una identidad.</strong></p><p class=\"answer-domain\"><strong>Dominio real común:</strong> \\((b,c)\\in\\mathbb R^2,\\quad c\\ne0,\\ b\\ne c\\).</p>"
    },
    {
      "id": "factor-8",
      "number": 8,
      "topic": "factorizacion",
      "level": "basico",
      "group": "Verificación de igualdades algebraicas",
      "title": "Factorización 8",
      "promptHtml": "<p>Determine si cada igualdad es una identidad en el dominio común de ambos miembros. Justifique su decisión.</p><div class=\"math\">\\[\\dfrac{2}{4 + x} = \\dfrac{1}{2} + \\dfrac{2}{x}\\]</div>",
      "answerHtml": "<p><strong>No es una identidad.</strong></p><p class=\"answer-domain\"><strong>Dominio real común:</strong> \\(x\\in\\mathbb R\\setminus\\{-4,0\\}\\).</p>"
    },
    {
      "id": "factor-9",
      "number": 9,
      "topic": "factorizacion",
      "level": "basico",
      "group": "Verificación de igualdades algebraicas",
      "title": "Factorización 9",
      "promptHtml": "<p>Determine si cada igualdad es una identidad en el dominio común de ambos miembros. Justifique su decisión.</p><div class=\"math\">\\[\\dfrac{x + 1}{y + 1} = \\dfrac{x}{y}\\]</div>",
      "answerHtml": "<p><strong>No es una identidad.</strong></p><p class=\"answer-domain\"><strong>Dominio real común:</strong> \\((x,y)\\in\\mathbb R^2,\\quad y\\notin\\{-1,0\\}\\).</p>"
    },
    {
      "id": "factor-10",
      "number": 10,
      "topic": "factorizacion",
      "level": "basico",
      "group": "Verificación de igualdades algebraicas",
      "title": "Factorización 10",
      "promptHtml": "<p>Determine si cada igualdad es una identidad en el dominio común de ambos miembros. Justifique su decisión.</p><div class=\"math\">\\[\\dfrac{x}{x + y} = \\dfrac{1}{1 + y}\\]</div>",
      "answerHtml": "<p><strong>No es una identidad.</strong></p><p class=\"answer-domain\"><strong>Dominio real común:</strong> \\((x,y)\\in\\mathbb R^2,\\quad x+y\\ne0,\\ y\\ne-1\\).</p>"
    },
    {
      "id": "factor-11",
      "number": 11,
      "topic": "factorizacion",
      "level": "basico",
      "group": "Verificación de igualdades algebraicas",
      "title": "Factorización 11",
      "promptHtml": "<p>Determine si cada igualdad es una identidad en el dominio común de ambos miembros. Justifique su decisión.</p><div class=\"math\">\\[2\\left(\\dfrac{a}{b}\\right) = \\dfrac{2a}{2b}\\]</div>",
      "answerHtml": "<p><strong>No es una identidad.</strong></p><p class=\"answer-domain\"><strong>Dominio real común:</strong> \\((a,b)\\in\\mathbb R^2,\\quad b\\ne0\\).</p>"
    },
    {
      "id": "factor-12",
      "number": 12,
      "topic": "factorizacion",
      "level": "basico",
      "group": "Verificación de igualdades algebraicas",
      "title": "Factorización 12",
      "promptHtml": "<p>Determine si cada igualdad es una identidad en el dominio común de ambos miembros. Justifique su decisión.</p><div class=\"math\">\\[\\dfrac{-a}{b} = -\\dfrac{a}{b}\\]</div>",
      "answerHtml": "<p><strong>Sí es una identidad.</strong></p><p class=\"answer-domain\"><strong>Dominio real común:</strong> \\((a,b)\\in\\mathbb R^2,\\quad b\\ne0\\).</p>"
    },
    {
      "id": "factor-13",
      "number": 13,
      "topic": "factorizacion",
      "level": "basico",
      "group": "Verificación de igualdades algebraicas",
      "title": "Factorización 13",
      "promptHtml": "<p>Determine si cada igualdad es una identidad en el dominio común de ambos miembros. Justifique su decisión.</p><div class=\"math\">\\[\\dfrac{1 + x + x^2}{x} = \\dfrac{1}{x} + 1 + x\\]</div>",
      "answerHtml": "<p><strong>Sí es una identidad.</strong></p><p class=\"answer-domain\"><strong>Dominio real común:</strong> \\(x\\in\\mathbb R\\setminus\\{0\\}\\).</p>"
    },
    {
      "id": "factor-14",
      "number": 14,
      "topic": "factorizacion",
      "level": "intermedio",
      "group": "Productos con trinomios",
      "title": "Factorización 14",
      "promptHtml": "<p>Simplifique cada producto.</p><div class=\"math\">\\[\\dfrac{x^2 - 2x - 15}{x^2 - 9} \\cdot \\dfrac{x + 3}{x - 5}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{x+3}{x-3}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in\\mathbb R\\setminus\\{-3,3,5\\}\\).</p>"
    },
    {
      "id": "factor-15",
      "number": 15,
      "topic": "factorizacion",
      "level": "intermedio",
      "group": "Productos con trinomios",
      "title": "Factorización 15",
      "promptHtml": "<p>Simplifique cada producto.</p><div class=\"math\">\\[\\dfrac{x^2 + 2x - 3}{x^2 - 2x - 3} \\cdot \\dfrac{3 - x}{3 + x}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{1-x}{x+1}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in\\mathbb R\\setminus\\{-3,-1,3\\}\\).</p>"
    },
    {
      "id": "factor-16",
      "number": 16,
      "topic": "factorizacion",
      "level": "intermedio",
      "group": "Productos con trinomios",
      "title": "Factorización 16",
      "promptHtml": "<p>Simplifique cada producto.</p><div class=\"math\">\\[\\dfrac{x^2 - x - 6}{x^2 + 2x} \\cdot \\dfrac{x^3 + x^2}{x^2 - 2x - 3}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[x\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in\\mathbb R\\setminus\\{-2,-1,0,3\\}\\).</p>"
    },
    {
      "id": "factor-17",
      "number": 17,
      "topic": "factorizacion",
      "level": "intermedio",
      "group": "Productos con trinomios",
      "title": "Factorización 17",
      "promptHtml": "<p>Simplifique cada producto.</p><div class=\"math\">\\[\\dfrac{x^2 + 7x + 12}{x^2 + 3x + 2} \\cdot \\dfrac{x^2 + 5x + 6}{x^2 + 6x + 9}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{x+4}{x+1}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in\\mathbb R\\setminus\\{-3,-2,-1\\}\\).</p>"
    },
    {
      "id": "factor-18",
      "number": 18,
      "topic": "factorizacion",
      "level": "intermedio",
      "group": "División de expresiones racionales",
      "title": "Factorización 18",
      "promptHtml": "<p>Simplifique cada cociente.</p><div class=\"math\">\\[\\dfrac{x + 3}{4x^2 - 9} \\div \\dfrac{x^2 + 7x + 12}{2x^2 + 7x - 15}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{x+5}{(2x+3)(x+4)}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in\\mathbb R\\setminus\\left\\{-5,-4,-3,-\\frac32,\\frac32\\right\\}\\).</p>"
    },
    {
      "id": "factor-19",
      "number": 19,
      "topic": "factorizacion",
      "level": "intermedio",
      "group": "División de expresiones racionales",
      "title": "Factorización 19",
      "promptHtml": "<p>Simplifique cada cociente.</p><div class=\"math\">\\[\\dfrac{2x + 1}{2x^2 + x - 15} \\div \\dfrac{6x^2 - x - 2}{x + 3}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{1}{(2x-5)(3x-2)}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in\\mathbb R\\setminus\\left\\{-3,-\\frac12,\\frac23,\\frac52\\right\\}\\).</p>"
    },
    {
      "id": "factor-20",
      "number": 20,
      "topic": "factorizacion",
      "level": "intermedio",
      "group": "División de expresiones racionales",
      "title": "Factorización 20",
      "promptHtml": "<p>Simplifique cada cociente.</p><div class=\"math\">\\[\\dfrac{2x^2 + 3x + 1}{x^2 + 2x - 15} \\div \\dfrac{x^2 + 6x + 5}{2x^2 - 7x + 3}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{4x^2-1}{(x+5)^2}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in\\mathbb R\\setminus\\left\\{-5,-1,\\frac12,3\\right\\}\\).</p>"
    },
    {
      "id": "factor-21",
      "number": 21,
      "topic": "factorizacion",
      "level": "intermedio",
      "group": "División de expresiones racionales",
      "title": "Factorización 21",
      "promptHtml": "<p>Simplifique cada cociente.</p><div class=\"math\">\\[\\dfrac{4y^2 - 9}{2y^2 + 9y - 18} \\div \\dfrac{2y^2 + y - 3}{y^2 + 5y - 6}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[1\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(y\\in\\mathbb R\\setminus\\left\\{-6,-\\frac32,1,\\frac32\\right\\}\\).</p>"
    },
    {
      "id": "factor-22",
      "number": 22,
      "topic": "factorizacion",
      "level": "intermedio",
      "group": "Sumas y restas con denominadores factorizables",
      "title": "Factorización 22",
      "promptHtml": "<p>Efectúe las operaciones y simplifique.</p><div class=\"math\">\\[\\dfrac{2}{x + 3} - \\dfrac{1}{x^2 + 7x + 12}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{2x+7}{(x+3)(x+4)}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in\\mathbb R\\setminus\\{-4,-3\\}\\).</p>"
    },
    {
      "id": "factor-23",
      "number": 23,
      "topic": "factorizacion",
      "level": "intermedio",
      "group": "Sumas y restas con denominadores factorizables",
      "title": "Factorización 23",
      "promptHtml": "<p>Efectúe las operaciones y simplifique.</p><div class=\"math\">\\[\\dfrac{x}{x^2 - 4} + \\dfrac{1}{x - 2}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{2(x+1)}{x^2-4}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in\\mathbb R\\setminus\\{-2,2\\}\\).</p>"
    },
    {
      "id": "factor-24",
      "number": 24,
      "topic": "factorizacion",
      "level": "intermedio",
      "group": "Sumas y restas con denominadores factorizables",
      "title": "Factorización 24",
      "promptHtml": "<p>Efectúe las operaciones y simplifique.</p><div class=\"math\">\\[\\dfrac{1}{x + 3} + \\dfrac{1}{x^2 - 9}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{x-2}{x^2-9}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in\\mathbb R\\setminus\\{-3,3\\}\\).</p>"
    },
    {
      "id": "factor-25",
      "number": 25,
      "topic": "factorizacion",
      "level": "intermedio",
      "group": "Sumas y restas con denominadores factorizables",
      "title": "Factorización 25",
      "promptHtml": "<p>Efectúe las operaciones y simplifique.</p><div class=\"math\">\\[\\dfrac{x}{x^2 + x - 2} - \\dfrac{2}{x^2 - 5x + 4}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{x^2-6x-4}{(x+2)(x-1)(x-4)}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in\\mathbb R\\setminus\\{-2,1,4\\}\\).</p>"
    },
    {
      "id": "factor-26",
      "number": 26,
      "topic": "factorizacion",
      "level": "intermedio",
      "group": "Sumas y restas con denominadores factorizables",
      "title": "Factorización 26",
      "promptHtml": "<p>Efectúe las operaciones y simplifique.</p><div class=\"math\">\\[\\dfrac{2}{x} + \\dfrac{3}{x - 1} - \\dfrac{4}{x^2 - x}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{5x-6}{x(x-1)}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in\\mathbb R\\setminus\\{0,1\\}\\).</p>"
    },
    {
      "id": "factor-27",
      "number": 27,
      "topic": "factorizacion",
      "level": "intermedio",
      "group": "Sumas y restas con denominadores factorizables",
      "title": "Factorización 27",
      "promptHtml": "<p>Efectúe las operaciones y simplifique.</p><div class=\"math\">\\[\\dfrac{x}{x^2 - x - 6} - \\dfrac{1}{x + 2} - \\dfrac{2}{x - 3}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[-\\frac{2x+1}{(x-3)(x+2)}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in\\mathbb R\\setminus\\{-2,3\\}\\).</p>"
    },
    {
      "id": "factor-28",
      "number": 28,
      "topic": "factorizacion",
      "level": "intermedio",
      "group": "Sumas y restas con denominadores factorizables",
      "title": "Factorización 28",
      "promptHtml": "<p>Efectúe las operaciones y simplifique.</p><div class=\"math\">\\[\\dfrac{1}{x^2 + 3x + 2} - \\dfrac{1}{x^2 - 2x - 3}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[-\\frac{5}{(x+1)(x+2)(x-3)}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in\\mathbb R\\setminus\\{-2,-1,3\\}\\).</p>"
    },
    {
      "id": "factor-29",
      "number": 29,
      "topic": "factorizacion",
      "level": "intermedio",
      "group": "Sumas y restas con denominadores factorizables",
      "title": "Factorización 29",
      "promptHtml": "<p>Efectúe las operaciones y simplifique.</p><div class=\"math\">\\[\\dfrac{1}{x + 1} - \\dfrac{2}{(x + 1)^2} + \\dfrac{3}{x^2 - 1}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{x^2+x+4}{(x+1)^2(x-1)}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in\\mathbb R\\setminus\\{-1,1\\}\\).</p>"
    },
    {
      "id": "factor-30",
      "number": 30,
      "topic": "factorizacion",
      "level": "intermedio",
      "group": "Racionalización de denominadores",
      "title": "Factorización 30",
      "promptHtml": "<p>Racionalice el denominador y simplifique.</p><div class=\"math\">\\[\\dfrac{1}{2 - \\sqrt{3}}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[2+\\sqrt3\\]</div><p class=\"answer-domain\">Expresión constante real; sin variables que restringir.</p>"
    },
    {
      "id": "factor-31",
      "number": 31,
      "topic": "factorizacion",
      "level": "intermedio",
      "group": "Racionalización de denominadores",
      "title": "Factorización 31",
      "promptHtml": "<p>Racionalice el denominador y simplifique.</p><div class=\"math\">\\[\\dfrac{2}{3 - \\sqrt{5}}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{3+\\sqrt5}{2}\\]</div><p class=\"answer-domain\">Expresión constante real; sin variables que restringir.</p>"
    },
    {
      "id": "factor-32",
      "number": 32,
      "topic": "factorizacion",
      "level": "intermedio",
      "group": "Racionalización de denominadores",
      "title": "Factorización 32",
      "promptHtml": "<p>Racionalice el denominador y simplifique.</p><div class=\"math\">\\[\\dfrac{2}{\\sqrt{2} + \\sqrt{7}}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{2(\\sqrt7-\\sqrt2)}5\\]</div><p class=\"answer-domain\">Expresión constante real; sin variables que restringir.</p>"
    },
    {
      "id": "factor-33",
      "number": 33,
      "topic": "factorizacion",
      "level": "intermedio",
      "group": "Racionalización de denominadores",
      "title": "Factorización 33",
      "promptHtml": "<p>Racionalice el denominador y simplifique.</p><div class=\"math\">\\[\\dfrac{1}{\\sqrt{x} + 1}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\begin{cases}\\dfrac{\\sqrt x-1}{x-1},&amp;x\\ne1,\\\\[6pt]\\dfrac12,&amp;x=1.\\end{cases}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in[0,\\infty)\\).</p>"
    },
    {
      "id": "factor-34",
      "number": 34,
      "topic": "factorizacion",
      "level": "intermedio",
      "group": "Racionalización de denominadores",
      "title": "Factorización 34",
      "promptHtml": "<p>Racionalice el denominador y simplifique.</p><div class=\"math\">\\[\\dfrac{y}{\\sqrt{3} + \\sqrt{y}}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\begin{cases}\\dfrac{y(\\sqrt3-\\sqrt y)}{3-y},&amp;y\\ne3,\\\\[6pt]\\dfrac{\\sqrt3}{2},&amp;y=3.\\end{cases}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(y\\in[0,\\infty)\\).</p>"
    },
    {
      "id": "factor-35",
      "number": 35,
      "topic": "factorizacion",
      "level": "intermedio",
      "group": "Racionalización de numeradores",
      "title": "Factorización 35",
      "promptHtml": "<p>Racionalice el numerador y simplifique.</p><div class=\"math\">\\[\\dfrac{1 - \\sqrt{5}}{3}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[-\\frac{4}{3(1+\\sqrt5)}\\]</div><p class=\"answer-domain\">Expresión constante real; sin variables que restringir.</p>"
    },
    {
      "id": "factor-36",
      "number": 36,
      "topic": "factorizacion",
      "level": "intermedio",
      "group": "Racionalización de numeradores",
      "title": "Factorización 36",
      "promptHtml": "<p>Racionalice el numerador y simplifique.</p><div class=\"math\">\\[\\dfrac{\\sqrt{3} + \\sqrt{5}}{2}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{1}{\\sqrt5-\\sqrt3}\\]</div><p class=\"answer-domain\">Expresión constante real; sin variables que restringir.</p>"
    },
    {
      "id": "factor-37",
      "number": 37,
      "topic": "factorizacion",
      "level": "intermedio",
      "group": "Racionalización de numeradores",
      "title": "Factorización 37",
      "promptHtml": "<p>Racionalice el numerador y simplifique.</p><div class=\"math\">\\[\\dfrac{\\sqrt{r} + \\sqrt{2}}{5}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\begin{cases}\\dfrac{r-2}{5(\\sqrt r-\\sqrt2)},&amp;r\\ne2,\\\\[6pt]\\dfrac{4}{5\\sqrt2},&amp;r=2.\\end{cases}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(r\\in[0,\\infty)\\).</p>"
    },
    {
      "id": "factor-38",
      "number": 38,
      "topic": "factorizacion",
      "level": "avanzado",
      "group": "Factorización en dos variables",
      "title": "Factorización 38",
      "promptHtml": "<p>Simplifique la expresión.</p><div class=\"math\">\\[\\dfrac{x^2 + 2xy + y^2}{x^2 - y^2} \\cdot \\dfrac{2x^2 - xy - y^2}{x^2 - xy - 2y^2}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{2x+y}{x-2y}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\((x,y)\\in\\mathbb R^2,\\quad x\\ne y,\\ x\\ne-y,\\ x\\ne2y\\).</p>"
    },
    {
      "id": "factor-39",
      "number": 39,
      "topic": "factorizacion",
      "level": "avanzado",
      "group": "Fracciones complejas y anidadas",
      "title": "Factorización 39",
      "promptHtml": "<p>Simplifique cada expresión.</p><div class=\"math\">\\[\\dfrac{\\dfrac{x^3}{x + 1}}{\\dfrac{x}{x^2 + 2x + 1}}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[x^2(x+1)\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in\\mathbb R\\setminus\\{-1,0\\}\\).</p>"
    },
    {
      "id": "factor-40",
      "number": 40,
      "topic": "factorizacion",
      "level": "avanzado",
      "group": "Fracciones complejas y anidadas",
      "title": "Factorización 40",
      "promptHtml": "<p>Simplifique cada expresión.</p><div class=\"math\">\\[\\dfrac{\\dfrac{2x^2 - 3x - 2}{x^2 - 1}}{\\dfrac{2x^2 + 5x + 2}{x^2 + x - 2}}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{x-2}{x+1}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in\\mathbb R\\setminus\\left\\{-2,-1,-\\frac12,1\\right\\}\\).</p>"
    },
    {
      "id": "factor-41",
      "number": 41,
      "topic": "factorizacion",
      "level": "avanzado",
      "group": "Fracciones complejas y anidadas",
      "title": "Factorización 41",
      "promptHtml": "<p>Simplifique cada expresión.</p><div class=\"math\">\\[\\dfrac{x + \\dfrac{1}{x + 2}}{x - \\dfrac{1}{x + 2}}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{(x+1)^2}{x^2+2x-1}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in\\mathbb R\\setminus\\{-2,-1-\\sqrt2,-1+\\sqrt2\\}\\).</p>"
    },
    {
      "id": "factor-42",
      "number": 42,
      "topic": "factorizacion",
      "level": "avanzado",
      "group": "Fracciones complejas y anidadas",
      "title": "Factorización 42",
      "promptHtml": "<p>Simplifique cada expresión.</p><div class=\"math\">\\[\\dfrac{1 + \\dfrac{1}{c - 1}}{1 - \\dfrac{1}{c - 1}}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{c}{c-2}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(c\\in\\mathbb R\\setminus\\{1,2\\}\\).</p>"
    },
    {
      "id": "factor-43",
      "number": 43,
      "topic": "factorizacion",
      "level": "avanzado",
      "group": "Fracciones complejas y anidadas",
      "title": "Factorización 43",
      "promptHtml": "<p>Simplifique cada expresión.</p><div class=\"math\">\\[\\dfrac{\\dfrac{x + 2}{x - 1} - \\dfrac{x - 3}{x - 2}}{x + 2}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{4x-7}{(x-1)(x-2)(x+2)}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in\\mathbb R\\setminus\\{-2,1,2\\}\\).</p>"
    },
    {
      "id": "factor-44",
      "number": 44,
      "topic": "factorizacion",
      "level": "avanzado",
      "group": "Fracciones complejas y anidadas",
      "title": "Factorización 44",
      "promptHtml": "<p>Simplifique cada expresión.</p><div class=\"math\">\\[\\dfrac{\\dfrac{x - 3}{x - 4} - \\dfrac{x + 2}{x + 1}}{x + 3}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{5}{(x-4)(x+1)(x+3)}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in\\mathbb R\\setminus\\{-3,-1,4\\}\\).</p>"
    },
    {
      "id": "factor-45",
      "number": 45,
      "topic": "factorizacion",
      "level": "avanzado",
      "group": "Fracciones complejas y anidadas",
      "title": "Factorización 45",
      "promptHtml": "<p>Simplifique cada expresión.</p><div class=\"math\">\\[\\dfrac{\\dfrac{x}{y} - \\dfrac{y}{x}}{\\dfrac{1}{x^2} - \\dfrac{1}{y^2}}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[-xy\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\((x,y)\\in\\mathbb R^2,\\quad x\\ne0,\\ y\\ne0,\\ x\\ne y,\\ x\\ne-y\\).</p>"
    },
    {
      "id": "factor-46",
      "number": 46,
      "topic": "factorizacion",
      "level": "avanzado",
      "group": "Fracciones complejas y anidadas",
      "title": "Factorización 46",
      "promptHtml": "<p>Simplifique cada expresión.</p><div class=\"math\">\\[x - \\dfrac{y}{\\dfrac{x}{y} + \\dfrac{y}{x}}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{x^3}{x^2+y^2}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\((x,y)\\in\\mathbb R^2,\\quad x\\ne0,\\ y\\ne0\\).</p>"
    },
    {
      "id": "factor-47",
      "number": 47,
      "topic": "factorizacion",
      "level": "avanzado",
      "group": "Fracciones complejas y anidadas",
      "title": "Factorización 47",
      "promptHtml": "<p>Simplifique cada expresión.</p><div class=\"math\">\\[1 - \\dfrac{1}{1 - \\dfrac{1}{x}}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{1}{1-x}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in\\mathbb R\\setminus\\{0,1\\}\\).</p>"
    },
    {
      "id": "factor-48",
      "number": 48,
      "topic": "factorizacion",
      "level": "avanzado",
      "group": "Fracciones complejas y anidadas",
      "title": "Factorización 48",
      "promptHtml": "<p>Simplifique cada expresión.</p><div class=\"math\">\\[1 + \\dfrac{1}{1 + \\dfrac{1}{1 + x}}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{2x+3}{x+2}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in\\mathbb R\\setminus\\{-2,-1\\}\\).</p>"
    },
    {
      "id": "factor-49",
      "number": 49,
      "topic": "factorizacion",
      "level": "avanzado",
      "group": "Expresiones con exponentes negativos",
      "title": "Factorización 49",
      "promptHtml": "<p>Simplifique y escriba el resultado con exponentes positivos.</p><div class=\"math\">\\[\\dfrac{x^{-2} - y^{-2}}{x^{-1} + y^{-1}}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{y-x}{xy}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\((x,y)\\in\\mathbb R^2,\\quad x\\ne0,\\ y\\ne0,\\ x+y\\ne0\\).</p>"
    },
    {
      "id": "factor-50",
      "number": 50,
      "topic": "factorizacion",
      "level": "avanzado",
      "group": "Expresiones con exponentes negativos",
      "title": "Factorización 50",
      "promptHtml": "<p>Simplifique y escriba el resultado con exponentes positivos.</p><div class=\"math\">\\[\\dfrac{x^{-1} + y^{-1}}{(x + y)^{-1}}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{(x+y)^2}{xy}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\((x,y)\\in\\mathbb R^2,\\quad x\\ne0,\\ y\\ne0,\\ x+y\\ne0\\).</p>"
    },
    {
      "id": "factor-51",
      "number": 51,
      "topic": "factorizacion",
      "level": "avanzado",
      "group": "Radicales con variables y expresiones conjugadas",
      "title": "Factorización 51",
      "promptHtml": "<p>En el primer ítem, racionalice el denominador. En los dos restantes, racionalice el numerador. Simplifique cada resultado.</p><div class=\"math\">\\[\\dfrac{2(x - y)}{\\sqrt{x} - \\sqrt{y}}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[2(\\sqrt x+\\sqrt y)\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\((x,y)\\in[0,\\infty)^2,\\quad x\\ne y\\).</p>"
    },
    {
      "id": "factor-52",
      "number": 52,
      "topic": "factorizacion",
      "level": "avanzado",
      "group": "Radicales con variables y expresiones conjugadas",
      "title": "Factorización 52",
      "promptHtml": "<p>En el primer ítem, racionalice el denominador. En los dos restantes, racionalice el numerador. Simplifique cada resultado.</p><div class=\"math\">\\[\\sqrt{x^2 + 1} - x\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{1}{\\sqrt{x^2+1}+x}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in\\mathbb R\\).</p>"
    },
    {
      "id": "factor-53",
      "number": 53,
      "topic": "factorizacion",
      "level": "avanzado",
      "group": "Radicales con variables y expresiones conjugadas",
      "title": "Factorización 53",
      "promptHtml": "<p>En el primer ítem, racionalice el denominador. En los dos restantes, racionalice el numerador. Simplifique cada resultado.</p><div class=\"math\">\\[\\sqrt{x + 1} - \\sqrt{x}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{1}{\\sqrt{x+1}+\\sqrt x}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in[0,\\infty)\\).</p>"
    },
    {
      "id": "factor-54",
      "number": 54,
      "topic": "factorizacion",
      "level": "avanzado",
      "group": "Factor común de potencias y reducción de cocientes",
      "title": "Factorización 54",
      "promptHtml": "<p>Simplifique cada expresión.</p><div class=\"math\">\\[\\dfrac{3(x + 2)^2(x - 3)^2 - (x + 2)^3(2)(x - 3)}{(x - 3)^4}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{(x+2)^2(x-13)}{(x-3)^3}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in\\mathbb R\\setminus\\{3\\}\\).</p>"
    },
    {
      "id": "factor-55",
      "number": 55,
      "topic": "factorizacion",
      "level": "avanzado",
      "group": "Factor común de potencias y reducción de cocientes",
      "title": "Factorización 55",
      "promptHtml": "<p>Simplifique cada expresión.</p><div class=\"math\">\\[\\dfrac{2x(x + 6)^4 - x^2(4)(x + 6)^3}{(x + 6)^8}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{2x(6-x)}{(x+6)^5}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in\\mathbb R\\setminus\\{-6\\}\\).</p>"
    },
    {
      "id": "factor-56",
      "number": 56,
      "topic": "factorizacion",
      "level": "integrador",
      "group": "Cocientes incrementales algebraicos y con radicales",
      "title": "Factorización 56",
      "promptHtml": "<p>Simplifique cada cociente.</p><div class=\"math\">\\[\\dfrac{\\dfrac{1}{1 + x + h} - \\dfrac{1}{1 + x}}{h}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[-\\frac{1}{(1+x+h)(1+x)}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\((x,h)\\in\\mathbb R^2,\\quad h\\ne0,\\ x\\ne-1,\\ x+h\\ne-1\\).</p>"
    },
    {
      "id": "factor-57",
      "number": 57,
      "topic": "factorizacion",
      "level": "integrador",
      "group": "Cocientes incrementales algebraicos y con radicales",
      "title": "Factorización 57",
      "promptHtml": "<p>Simplifique cada cociente.</p><div class=\"math\">\\[\\dfrac{\\dfrac{1}{\\sqrt{x + h}} - \\dfrac{1}{\\sqrt{x}}}{h}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[-\\frac{1}{\\sqrt x\\,\\sqrt{x+h}\\,(\\sqrt x+\\sqrt{x+h})}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\((x,h)\\in\\mathbb R^2,\\quad h\\ne0,\\ x&gt;0,\\ x+h&gt;0\\).</p>"
    },
    {
      "id": "factor-58",
      "number": 58,
      "topic": "factorizacion",
      "level": "integrador",
      "group": "Cocientes incrementales algebraicos y con radicales",
      "title": "Factorización 58",
      "promptHtml": "<p>Simplifique cada cociente.</p><div class=\"math\">\\[\\dfrac{\\dfrac{1}{(x + h)^2} - \\dfrac{1}{x^2}}{h}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[-\\frac{2x+h}{x^2(x+h)^2}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\((x,h)\\in\\mathbb R^2,\\quad h\\ne0,\\ x\\ne0,\\ x+h\\ne0\\).</p>"
    },
    {
      "id": "factor-59",
      "number": 59,
      "topic": "factorizacion",
      "level": "integrador",
      "group": "Cocientes incrementales algebraicos y con radicales",
      "title": "Factorización 59",
      "promptHtml": "<p>Simplifique cada cociente.</p><div class=\"math\">\\[\\dfrac{(x + h)^3 - 7(x + h) - (x^3 - 7x)}{h}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[3x^2+3xh+h^2-7\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\((x,h)\\in\\mathbb R^2,\\quad h\\ne0\\).</p>"
    },
    {
      "id": "factor-60",
      "number": 60,
      "topic": "factorizacion",
      "level": "integrador",
      "group": "Cocientes incrementales algebraicos y con radicales",
      "title": "Factorización 60",
      "promptHtml": "<p>Simplifique cada cociente.</p><div class=\"math\">\\[\\dfrac{\\sqrt{x} - \\sqrt{x + h}}{h\\sqrt{x}\\sqrt{x + h}}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[-\\frac{1}{\\sqrt x\\,\\sqrt{x+h}\\,(\\sqrt x+\\sqrt{x+h})}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\((x,h)\\in\\mathbb R^2,\\quad h\\ne0,\\ x&gt;0,\\ x+h&gt;0\\).</p>"
    },
    {
      "id": "factor-61",
      "number": 61,
      "topic": "factorizacion",
      "level": "integrador",
      "group": "Radicales compuestos e identidades notables",
      "title": "Factorización 61",
      "promptHtml": "<p>Simplifique cada expresión en los números reales.</p><div class=\"math\">\\[\\sqrt{1 + \\left( \\dfrac{x}{\\sqrt{1 - x^2}} \\right)^2}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\frac{1}{\\sqrt{1-x^2}}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in(-1,1)\\).</p>"
    },
    {
      "id": "factor-62",
      "number": 62,
      "topic": "factorizacion",
      "level": "integrador",
      "group": "Radicales compuestos e identidades notables",
      "title": "Factorización 62",
      "promptHtml": "<p>Simplifique cada expresión en los números reales.</p><div class=\"math\">\\[\\sqrt{1 + \\left( x^3 - \\dfrac{1}{4x^3} \\right)^2}\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\left|x^3+\\frac{1}{4x^3}\\right|=|x|^3+\\frac{1}{4|x|^3}\\]</div><p class=\"answer-domain\"><strong>Dominio real original:</strong> \\(x\\in\\mathbb R\\setminus\\{0\\}\\).</p>"
    },
    {
      "id": "raiz-bambu",
      "number": 1,
      "topic": "raices",
      "level": "basico",
      "category": "geometria",
      "title": "El bambú quebrado",
      "promptHtml": "<p>Una caña de bambú de 10 pies de altura se ha quebrado por el viento. Su extremo superior toca el suelo a una distancia de 3 pies de la base del tallo. El jardinero necesita saber a qué altura del tallo se produjo la fractura para poder podar la parte dañada.</p>\n<p>Suponga que el suelo es horizontal, que la parte inferior sigue vertical y que la parte superior permanece recta y unida al punto de fractura.</p>\n<ol type=\"a\"><li>Dibuje la situación y defina la altura de la fractura. Exprese la longitud de la parte inclinada y establezca el dominio físico.</li><li>Construya una ecuación con ayuda de la figura, simplifíquela y encuentre su raíz. ¿Qué grado tiene la ecuación después de simplificar?</li><li>Indique la altura a la que se produjo la fractura y verifique que las dos partes suman los 10 pies originales.</li></ol>",
      "answerHtml": "<p>Altura de la fractura: \\(4{,}55\\) pies. Parte inclinada: \\(5{,}45\\) pies. Grado de la ecuación simplificada: \\(1\\).</p>",
      "sourceAnchor": "bambu",
      "sourceHref": "raices-de-polinomios.html#bambu"
    },
    {
      "id": "raiz-franja-vegetal",
      "number": 2,
      "topic": "raices",
      "level": "intermedio",
      "category": "geometria",
      "title": "Una franja vegetal: ¿qué ancho permite el presupuesto?",
      "promptHtml": "<p>En un parque hay una plazoleta rectangular de <span\nclass=\"math inline\">\\(12\\)</span> m por <span\nclass=\"math inline\">\\(8\\)</span> m. Se quiere rodearla por sus cuatro\nlados con una franja vegetal de ancho uniforme. Las cuatro piezas de\nfranja que quedan en las esquinas deben ser <strong>cuadrados</strong>,\nsin redondeos: el borde exterior conserva cuatro ángulos rectos. Si se\nllama <span class=\"math inline\">\\(x\\)</span> al ancho añadido a cada\nlado en dirección horizontal e <span class=\"math inline\">\\(y\\)</span> al\nañadido a cada lado en dirección vertical, cada esquina mide <span\nclass=\"math inline\">\\(x\\)</span> por <span\nclass=\"math inline\">\\(y\\)</span>; por tanto, la condición de esquinas\ncuadradas obliga a que <span class=\"math inline\">\\(x=y\\)</span>. El\nrectángulo exterior disponible mide <span\nclass=\"math inline\">\\(18\\)</span> m por <span\nclass=\"math inline\">\\(14\\)</span> m y está centrado respecto de la\nplazoleta. Esta intervención busca aumentar la superficie vegetada; no\nse supone que el área, por sí sola, determine su capacidad de\ninfiltración.</p>\n<p>La cotización del proyecto incluye:</p>\n<ul>\n<li><p><span class=\"math inline\">\\(\\$1\\,800\\,000\\)</span> por\npreparación y movilización, independientemente del ancho.</p></li>\n<li><p><span class=\"math inline\">\\(\\$12\\,000\\)</span> por cada metro\ncuadrado de superficie vegetal nueva.</p></li>\n<li><p><span class=\"math inline\">\\(\\$35\\,000\\)</span> por metro de borde\ninstalado en todo el perímetro <em>exterior</em> de la franja. No se\ncobra borde junto a la plazoleta.</p></li>\n</ul>\n<p>El presupuesto es <span class=\"math inline\">\\(\\$5\\,600\\,000\\)</span>.\nLas tarifas incluyen todos los costos considerados para esta\nintervención.</p>\n<ol>\n<li><p>Dibuje la plazoleta y las cuatro esquinas cuadradas. Antes de\nimponer <span class=\"math inline\">\\(x=y\\)</span>, obtenga el largo y el\nancho exteriores y calcule su semiperímetro (suma del largo y el ancho)\ny su perímetro completo. Después use un solo ancho <span\nclass=\"math inline\">\\(x\\)</span>, establezca su dominio geométrico y\nconstruya el área nueva y el costo total. El borde se cobra por el\nperímetro completo.</p></li>\n<li><p>Modele la condición de gastar exactamente el presupuesto.\nDetermine todas las raíces reales de la ecuación y explique cuáles\ncorresponden a una obra posible.</p></li>\n<li><p>¿Cuántos metros cuadrados nuevos se obtienen con la solución\nadmisible?</p></li>\n<li><p>La obra solo admite anchos especificados en centímetros enteros.\n¿Cuál es el mayor ancho que no supera el presupuesto? Un contratista\npropone redondear a <span class=\"math inline\">\\(2{,}70\\)</span> m: ¿cabe\nsu propuesta en el presupuesto? Justifique comparando los costos, no\nsolo los anchos.</p></li>\n</ol>",
      "answerHtml": "<p>Raíces para el ancho: \\(-18{,}53144934\\) y \\(2{,}69811600\\) m. Ancho admisible: \\(2{,}69811600\\) m; superficie vegetal nueva: \\(137{,}04395994\\,\\mathrm{m^2}\\).</p><p>Ancho máximo en centímetros enteros: \\(2{,}69\\) m; costo: $5.591.732,80. Con \\(2{,}70\\) m, costo: $5.601.920; exceso: $1.920.</p>",
      "sourceAnchor": "franja-vegetal",
      "sourceHref": "raices-de-polinomios.html#franja-vegetal"
    },
    {
      "id": "raiz-lamina-deposito",
      "number": 3,
      "topic": "raices",
      "level": "intermedio",
      "category": "geometria",
      "title": "Reutilizar una lámina: dos depósitos con la misma capacidad",
      "promptHtml": "<p>Una huerta quiere fabricar un depósito abierto para almacenar agua de\nriego. Dispone de una lámina rectangular reutilizada de <span\nclass=\"math inline\">\\(2{,}40\\)</span> m por <span\nclass=\"math inline\">\\(1{,}80\\)</span> m. En cada esquina se corta un\ncuadrado del mismo tamaño; después se doblan verticalmente los cuatro\nlados y se sellan las uniones. Desprecie el espesor, los dobleces y la\npérdida de volumen por el sellado.</p>\n<p>El depósito debe tener una capacidad geométrica de <span\nclass=\"math inline\">\\(550\\)</span> litros. Recuerde que <span\nclass=\"math inline\">\\(1000\\)</span> litros equivalen a <span\nclass=\"math inline\">\\(1\\,\\mathrm{m^3}\\)</span>.</p>\n<ol>\n<li><p>Defina el lado <span class=\"math inline\">\\(x\\)</span> de los\ncuadrados cortados, determine su dominio y construya la ecuación\ncorrespondiente a la capacidad solicitada.</p></li>\n<li><p>Calcule todas las raíces reales. Para cada una, calcule el largo,\nel ancho y la altura resultantes. ¿Por qué no basta con verificar que el\nproducto de las tres dimensiones sea positivo?</p></li>\n<li><p>Si dos diseños geométricamente válidos tienen la misma capacidad,\n¿cuál requiere retirar menos material? Cuantifique el área retirada en\ncada uno.</p></li>\n<li><p>Por accesibilidad, la altura del depósito no puede superar <span\nclass=\"math inline\">\\(0{,}45\\)</span> m. Seleccione el diseño que cumple\nesta condición. Si su corte se redondea al centímetro más cercano, ¿se\nconserva una capacidad de al menos <span\nclass=\"math inline\">\\(550\\)</span> litros? Proponga una medida en\ncentímetros enteros que sí cumpla y verifíquela.</p></li>\n</ol>",
      "answerHtml": "<p>Raíces: \\(0{,}19324645\\), \\(0{,}50907886\\) y \\(1{,}39767468\\) m; las dos primeras son geométricamente admisibles.</p><div class=\"table-wrap\"><table><thead><tr><th>Altura/corte (m)</th><th>Largo (m)</th><th>Ancho (m)</th><th>Área retirada (m²)</th></tr></thead><tbody><tr><td>0,19324645</td><td>2,01350709</td><td>1,41350709</td><td>0,14937677</td></tr><tr><td>0,50907886</td><td>1,38184227</td><td>0,78184227</td><td>1,03664515</td></tr></tbody></table></div><p>Diseño seleccionado: corte \\(0{,}19324645\\) m. Con corte de \\(0{,}19\\) m: \\(544{,}996\\) L, insuficientes. Corte de \\(0{,}20\\) m: \\(560\\) L; altura: \\(0{,}20\\) m.</p>",
      "sourceAnchor": "lamina-deposito",
      "sourceHref": "raices-de-polinomios.html#lamina-deposito"
    },
    {
      "id": "raiz-parcela",
      "number": 4,
      "topic": "raices",
      "level": "avanzado",
      "category": "geometria",
      "title": "Una parcela medida desde fuera de su lindero",
      "promptHtml": "<p>Una parcela rectangular tiene un área de <span\nclass=\"math inline\">\\(840\\,\\mathrm{m^2}\\)</span>. Uno de sus lados está\njunto a un camino recto. Se sabe que ese lado es el más largo de la\nparcela, o igual al otro.</p>\n<p>Llame <span class=\"math inline\">\\(A\\)</span> y <span\nclass=\"math inline\">\\(B\\)</span> a los extremos del lado junto al\ncamino, y <span class=\"math inline\">\\(D\\)</span> al vértice que se\nobtiene al avanzar desde <span class=\"math inline\">\\(A\\)</span> por el\nlado perpendicular al camino. El cuarto vértice es <span\nclass=\"math inline\">\\(C\\)</span>, opuesto a <span\nclass=\"math inline\">\\(A\\)</span>. Un observador se sitúa en <span\nclass=\"math inline\">\\(P\\)</span>, sobre la prolongación de <span\nclass=\"math inline\">\\(BA\\)</span> más allá de <span\nclass=\"math inline\">\\(A\\)</span>, a <span\nclass=\"math inline\">\\(5\\)</span> m de <span\nclass=\"math inline\">\\(A\\)</span>. Desde <span\nclass=\"math inline\">\\(P\\)</span> hasta <span\nclass=\"math inline\">\\(C\\)</span> se miden <span\nclass=\"math inline\">\\(58\\)</span> m en línea recta. Todos los puntos se\nconsideran en un terreno horizontal.</p>\n<ol>\n<li><p>Dibuje la situación. Defina <span\nclass=\"math inline\">\\(L=AB\\)</span> y <span\nclass=\"math inline\">\\(w=AD\\)</span>, en metros, y utilice el área para\nexpresar una dimensión en función de la otra. Escriba las restricciones\nque impone conocer cuál lado es el más largo.</p></li>\n<li><p>Utilice el teorema de Pitágoras en un triángulo apropiado y\nconstruya una ecuación polinómica con una sola incógnita. Antes de\neliminar denominadores, justifique por qué son distintos de\ncero.</p></li>\n<li><p>Calcule todas las raíces reales y recupere las dimensiones\ncorrespondientes. Explique por qué dos soluciones con dimensiones\npositivas no representan necesariamente dos respuestas a este problema.\nVerifique la solución seleccionada usando el área y la distancia\noriginales.</p></li>\n</ol>",
      "answerHtml": "<p>Raíces para \\(w\\): \\(-57{,}18496182\\), \\(-13{,}68940191\\), \\(16{,}61043625\\) y \\(54{,}26392747\\) m.</p><p>Dimensiones seleccionadas: lado junto al camino \\(L=50{,}57061640\\) m; lado perpendicular \\(w=16{,}61043625\\) m. Área: \\(840\\,\\mathrm{m^2}\\); distancia desde el observador: \\(58\\) m.</p>",
      "sourceAnchor": "parcela",
      "sourceHref": "raices-de-polinomios.html#parcela"
    },
    {
      "id": "raiz-estanque",
      "number": 5,
      "topic": "raices",
      "level": "avanzado",
      "category": "geometria",
      "title": "Excavar un estanque sin perder el espacio del fondo",
      "promptHtml": "<p>Se proyecta un estanque con abertura superior cuadrada de <span\nclass=\"math inline\">\\(12\\)</span> m por lado y fondo horizontal también\ncuadrado. Las paredes serán planas y, por seguridad del terreno, cada\nuna se desplazará horizontalmente <span\nclass=\"math inline\">\\(0{,}50\\)</span> m hacia el centro del estanque por\ncada metro de descenso vertical. Las secciones paralelas al fondo son\ncuadrados y tienen el mismo centro. El volumen geométrico que se desea\nexcavar es de <span\nclass=\"math inline\">\\(260\\,\\mathrm{m^3}\\)</span>.</p>\n<p>Desprecie el espesor de cualquier revestimiento. Puede usar que una\npirámide tiene volumen igual a un tercio del producto del área de su\nbase por su altura. Las dimensiones y la pendiente de las paredes son\ncondiciones del proyecto.</p>\n<ol>\n<li><p>Defina la profundidad <span class=\"math inline\">\\(h\\)</span>, en\nmetros, y construya una expresión para el lado del fondo. Establezca el\ndominio físico. Prolongue mentalmente las paredes hasta que se\nencuentren en un vértice: ¿qué altura tendría la pirámide completa cuya\nbase es la abertura?</p></li>\n<li><p>Obtenga el volumen excavado restando dos pirámides semejantes y\nconstruya una ecuación polinómica para la profundidad. Calcule sus\nraíces reales y seleccione las admisibles. Determine el lado del fondo\nque produciría la capacidad solicitada.</p></li>\n<li><p>Posteriormente se exige un fondo útil de al menos <span\nclass=\"math inline\">\\(10\\)</span> m por lado para instalar un equipo.\n¿Es compatible esta exigencia con los <span\nclass=\"math inline\">\\(260\\,\\mathrm{m^3}\\)</span>, conservando la\nabertura y la pendiente de las paredes? Determine la mayor capacidad\ngeométrica compatible con la nueva exigencia y cuantifique la capacidad\nque faltaría.</p></li>\n</ol>",
      "answerHtml": "<p>Profundidad para \\(260\\,\\mathrm{m^3}\\): \\(h=2{,}17642770\\) m, única raíz real. Lado del fondo: \\(9{,}82357230\\) m.</p><p>Con fondo de al menos \\(10\\) m por lado: profundidad máxima \\(2\\) m; volumen máximo \\(242{,}66666667\\,\\mathrm{m^3}\\); déficit \\(17{,}33333333\\,\\mathrm{m^3}\\).</p>",
      "sourceAnchor": "estanque",
      "sourceHref": "raices-de-polinomios.html#estanque"
    },
    {
      "id": "raiz-rampa",
      "number": 6,
      "topic": "raices",
      "level": "avanzado",
      "category": "geometria",
      "title": "Una rampa de tierra: volumen, pendiente y espacio disponible",
      "promptHtml": "<p>Una obra dispone de <span\nclass=\"math inline\">\\(500\\,\\mathrm{m^3}\\)</span> de tierra suelta para\nconstruir una rampa recta de acceso a una plataforma cuya altura todavía\npuede ajustarse. La tierra pierde un <span\nclass=\"math inline\">\\(15\\,\\%\\)</span> de su volumen al compactarse; no\nse consideran otras pérdidas. Se quiere utilizar inicialmente todo el\nmaterial disponible.</p>\n<p>La rampa comienza a la altura del terreno y sube de manera uniforme:\npor cada <span class=\"math inline\">\\(12\\)</span> m horizontales se eleva\n<span class=\"math inline\">\\(1\\)</span> m. La superficie de paso tiene\n<span class=\"math inline\">\\(3{,}20\\)</span> m de ancho a lo largo de\ntoda la rampa. En cada sección transversal, los taludes laterales se\ndesplazan horizontalmente <span class=\"math inline\">\\(1{,}50\\)</span> m\npor cada metro de altura. Por tanto, las secciones transversales son\ntrapecios, salvo la inicial, de altura cero. El terreno original es\nhorizontal y los bordes de la rampa son rectos.</p>\n<p>Para calcular el volumen puede utilizar la fórmula prismoidal exacta\npara esta geometría: <span\nclass=\"math display\">\\[V=\\frac{\\ell}{6}\\left(A_0+4A_m+A_1\\right).\\]</span>\nAquí <span class=\"math inline\">\\(V\\)</span> es el volumen compactado en\n<span class=\"math inline\">\\(\\mathrm{m^3}\\)</span>; <span\nclass=\"math inline\">\\(\\ell\\)</span> es la longitud horizontal en m;\n<span class=\"math inline\">\\(A_0\\)</span> y <span\nclass=\"math inline\">\\(A_1\\)</span> son las áreas de las secciones\ninicial y final, y <span class=\"math inline\">\\(A_m\\)</span> es el área\nde la sección situada a mitad de la longitud, todas en <span\nclass=\"math inline\">\\(\\mathrm{m^2}\\)</span>.</p>\n<ol>\n<li><p>Defina la altura final <span\nclass=\"math inline\">\\(h&gt;0\\)</span>, en metros, y exprese la longitud\nde la rampa en función de <span class=\"math inline\">\\(h\\)</span>.\nConstruya el área de una sección cuya altura sea <span\nclass=\"math inline\">\\(u\\)</span>, indicando cómo se obtiene su base\nmayor. Determine las áreas inicial, media y final.</p></li>\n<li><p>Convierta el material suelto en volumen compactado. A partir de\nla fórmula prismoidal, construya una ecuación polinómica cuya raíz\npermita dimensionar la rampa usando todo el material. Calcule las raíces\nreales e indique la altura, la longitud y el ancho de la base al\nfinal.</p></li>\n<li><p>La obra debe caber en un corredor de <span\nclass=\"math inline\">\\(40\\)</span> m de longitud y <span\nclass=\"math inline\">\\(13\\)</span> m de ancho. ¿Es posible usar todo el\nmaterial manteniendo la forma propuesta? Si no lo es, determine la mayor\naltura compatible con el corredor y cuánta tierra suelta quedaría sin\nutilizar.</p></li>\n</ol>",
      "answerHtml": "<p>Volumen compactado disponible: \\(425\\,\\mathrm{m^3}\\). Usando todo: altura \\(3{,}30089836\\) m; longitud \\(39{,}61078031\\) m; ancho final \\(13{,}10269508\\) m; no cabe en el corredor.</p><p>En el corredor: altura máxima \\(3{,}26666667\\) m; longitud \\(39{,}20\\) m; ancho \\(13\\) m; volumen compactado \\(414{,}03911111\\,\\mathrm{m^3}\\); tierra suelta sin utilizar \\(12{,}89516340\\,\\mathrm{m^3}\\).</p>",
      "sourceAnchor": "rampa",
      "sourceHref": "raices-de-polinomios.html#rampa"
    },
    {
      "id": "raiz-varas-cruzadas",
      "number": 7,
      "topic": "raices",
      "level": "intermedio",
      "category": "geometria",
      "title": "Medir un canal mediante dos varas cruzadas",
      "promptHtml": "<p>Durante la construcción de un canal rectangular, todavía seco, se\nquiere determinar su ancho interior sin tender una cinta horizontal\nentre sus paredes. En una misma sección transversal se colocan dos varas\nrígidas cruzadas. El fondo es horizontal y las paredes son\nverticales.</p>\n<p>La primera vara mide <span class=\"math inline\">\\(8\\)</span> m y va\ndesde el pie de la pared izquierda hasta un punto de la pared derecha.\nLa segunda mide <span class=\"math inline\">\\(10\\)</span> m y va desde el\npie de la pared derecha hasta un punto de la pared izquierda. El cruce\nde ambas varas queda a <span class=\"math inline\">\\(2{,}60\\)</span> m\nsobre el fondo. Desprecie el espesor de las varas y de los apoyos; las\nvaras no sobresalen más allá de sus puntos de contacto con las\nparedes.</p>\n<p>El maestro de obra quiere saber si una compuerta prefabricada de\n<span class=\"math inline\">\\(7\\)</span> m de ancho, que puede recortarse,\nalcanzaría para cubrir el ancho interior del canal.</p>\n<ol>\n<li><p>Dibuje la sección. Llame <span class=\"math inline\">\\(w\\)</span>\nal ancho del canal, <span class=\"math inline\">\\(u\\)</span> a la altura\ndel extremo superior de la vara de <span\nclass=\"math inline\">\\(8\\)</span> m y <span\nclass=\"math inline\">\\(v\\)</span> a la del extremo superior de la vara de\n<span class=\"math inline\">\\(10\\)</span> m. Llame <span\nclass=\"math inline\">\\(z\\)</span> a la distancia horizontal desde la\npared izquierda hasta el cruce. Todas las longitudes se expresan en\nmetros. Escriba las restricciones geométricas y utilice triángulos\nsemejantes para relacionar estas cuatro cantidades con la altura medida\ndel cruce.</p></li>\n<li><p>Aplique el teorema de Pitágoras a cada vara. Combine sus\nrelaciones con las obtenidas por semejanza para eliminar <span\nclass=\"math inline\">\\(w\\)</span>, <span class=\"math inline\">\\(v\\)</span>\ny <span class=\"math inline\">\\(z\\)</span>, hasta construir una ecuación\npolinómica solo en <span class=\"math inline\">\\(u\\)</span>. Antes de\neliminar cualquier denominador, explique cuándo puede ser cero y si ese\nvalor está permitido por la figura.</p></li>\n<li><p>Calcule todas las raíces reales con la calculadora gráfica. Para\ncada una, intente reconstruir las alturas y el ancho; descarte las que\ncontradigan la posición de las varas. Compruebe la solución admisible\nusando las longitudes originales.</p></li>\n<li><p>Decida si la compuerta alcanza. Si se especifica su ancho en\ncentímetros enteros y debe cubrir como mínimo el ancho calculado, ¿cuál\nes la medida mínima que debe tener después de recortarla?</p></li>\n</ol>",
      "answerHtml": "<p>Raíces reales para \\(u\\): \\(4{,}05614445510\\) y \\(1{,}83833622076\\) m. Solución admisible: \\(u=4{,}05614445510\\) m; \\(v=7{,}24239655367\\) m; \\(z=4{,}42002428581\\) m.</p><p>Ancho del canal: \\(6{,}89548346089\\) m. Compuerta de 7 m: suficiente. Medida mínima en centímetros enteros: \\(6{,}90\\) m.</p>",
      "sourceAnchor": "varas-cruzadas",
      "sourceHref": "raices-de-polinomios.html#varas-cruzadas"
    },
    {
      "id": "raiz-silo",
      "number": 8,
      "topic": "raices",
      "level": "avanzado",
      "category": "geometria",
      "title": "Un silo con cubierta cónica y una cantidad fija de lámina",
      "promptHtml": "<p>Una cooperativa proyecta un silo formado por un cilindro circular\nrecto y una cubierta cónica que comparte con el cilindro la misma base\ncircular. La altura vertical de la cubierta será <span\nclass=\"math inline\">\\(1{,}50\\)</span> m. La capacidad geométrica\ninterior, contando tanto el cilindro como el cono, debe ser <span\nclass=\"math inline\">\\(280\\,\\mathrm{m^3}\\)</span>.</p>\n<p>Hay exactamente <span\nclass=\"math inline\">\\(210\\,\\mathrm{m^2}\\)</span> de lámina para\nconstruir la pared curva del cilindro y la cubierta del cono. La base\ninferior será una losa existente y no consume lámina. Desprecie\nespesores, traslapos, recortes y aberturas. La capacidad indicada es un\nvolumen geométrico, no una afirmación sobre la cantidad de grano que\npodría almacenarse con seguridad en una operación real.</p>\n<p>El terreno disponible es una plataforma circular de <span\nclass=\"math inline\">\\(10\\)</span> m de diámetro, y la altura total de la\nconstrucción no puede superar <span class=\"math inline\">\\(12\\)</span>\nm.</p>\n<p>Para el modelo puede emplear las siguientes relaciones geométricas:\n<span class=\"math display\">\\[\\begin{aligned}V_{\\mathrm{cil}}&=\\pi r^2H,\\\\ V_{\\mathrm{cono}}&=\\frac13\\pi r^2h,\\\\ A_{\\mathrm{pared}}&=2\\pi rH,\\\\ A_{\\mathrm{cubierta}}&=\\pi r\\ell.\\end{aligned}\\]</span> Aquí <span\nclass=\"math inline\">\\(r\\)</span> es el radio común; <span\nclass=\"math inline\">\\(H\\)</span>, la altura de la pared cilíndrica;\n<span class=\"math inline\">\\(h\\)</span>, la altura vertical del cono; y\n<span class=\"math inline\">\\(\\ell\\)</span>, la distancia inclinada del\nvértice del cono a su borde circular. Las longitudes se expresan en\nmetros, las áreas en <span class=\"math inline\">\\(\\mathrm{m^2}\\)</span> y\nlos volúmenes en <span class=\"math inline\">\\(\\mathrm{m^3}\\)</span>.</p>\n<ol>\n<li><p>Dibuje una sección vertical que pase por el eje del silo. Exprese\n<span class=\"math inline\">\\(\\ell\\)</span> en función de <span\nclass=\"math inline\">\\(r\\)</span> y utilice la capacidad solicitada para\nexpresar <span class=\"math inline\">\\(H\\)</span> también en función de\n<span class=\"math inline\">\\(r\\)</span>. Determine el dominio geométrico\nantes de aplicar las restricciones de la plataforma.</p></li>\n<li><p>Construya la ecuación correspondiente al uso de toda la lámina.\nAísle la expresión con raíz cuadrada y transforme la ecuación en una\npolinómica. Indique el grado resultante y conserve la condición de signo\nque debe cumplirse <em>antes</em> de elevar al cuadrado.</p></li>\n<li><p>Calcule todas las raíces reales del polinomio. Reconstruya y\nverifique cada candidato en la ecuación original de superficie. ¿Cuántos\ndiseños de radio y altura positivos cumplen simultáneamente la capacidad\ny el área de lámina?</p></li>\n<li><p>Entre esos diseños, determine cuáles caben en la plataforma y\nrespetan la altura máxima. Entregue las dimensiones del diseño que puede\nconstruirse y explique por qué resolver solamente el polinomio habría\npodido conducir a una elección incorrecta.</p></li>\n</ol>",
      "answerHtml": "<p>Raíces reales del radio: \\(-8{,}78775831\\), \\(2{,}35278550\\), \\(2{,}97559846\\) y \\(6{,}80909301\\) m.</p><div class=\"table-wrap\"><table><thead><tr><th>Radio válido (m)</th><th>Altura cilíndrica (m)</th><th>Altura total (m)</th><th>Diámetro (m)</th></tr></thead><tbody><tr><td>2,97559846</td><td>9,56605985</td><td>11,06605985</td><td>5,95119692</td></tr><tr><td>6,80909301</td><td>1,42233745</td><td>2,92233745</td><td>13,61818601</td></tr></tbody></table></div><p>Diseño seleccionado por la plataforma: radio \\(2{,}97559846\\) m y altura cilíndrica \\(9{,}56605985\\) m. Capacidad: \\(280\\,\\mathrm{m^3}\\); lámina: \\(210\\,\\mathrm{m^2}\\).</p>",
      "sourceAnchor": "silo",
      "sourceHref": "raices-de-polinomios.html#silo"
    },
    {
      "id": "raiz-ciudad-amurallada",
      "number": 9,
      "topic": "raices",
      "level": "avanzado",
      "category": "geometria",
      "title": "La ciudad circular y el árbol visible",
      "promptHtml": "<p>Una antigua ciudad amurallada tiene forma circular, con una puerta en cada punto cardinal. Un árbol se encuentra a 3 <i>li</i> directamente al norte de la puerta Norte. Si una persona sale por la puerta Sur y camina 9 <i>li</i> hacia el Este, en ese momento el árbol se alinea con la muralla y se hace visible. Para los ingenieros que deben restaurar la muralla, es crucial conocer sus dimensiones. <strong>¿Cuál es el diámetro de la ciudad?</strong></p>\n<p>Para el modelo, la muralla se considera una circunferencia en planta y la alineación significa que la recta de visión desde la persona hasta el árbol es <strong>tangente</strong> a esa circunferencia. La persona camina hacia el Este en línea recta, sobre la prolongación de la tangente horizontal en la puerta Sur. Se ignoran las alturas de árbol y muralla; todas las distancias se expresan en la misma unidad <i>li</i>, sin convertirla a kilómetros.</p>\n<ol type=\"a\"><li>Dibuje el centro, las puertas Norte y Sur, el árbol y la posición final de la persona. Defina una incógnita positiva para el radio o el diámetro.</li><li>Construya una ecuación a partir de la tangencia y las distancias dadas; transfórmela en una ecuación polinómica. Si eleva al cuadrado o elimina factores, conserve las condiciones del dominio.</li><li>Calcule las raíces reales y decida cuáles describen una ciudad posible. Indique el diámetro y compruebe la tangencia en su dibujo o mediante las relaciones originales.</li></ol>",
      "answerHtml": "<p>Diámetro de la ciudad: \\(9\\) <i>li</i>. Radio: \\(4{,}5\\) <i>li</i>.</p>",
      "sourceAnchor": "ciudad-amurallada",
      "sourceHref": "raices-de-polinomios.html#ciudad-amurallada"
    },
    {
      "id": "raiz-equipos",
      "number": 10,
      "topic": "raices",
      "level": "intermedio",
      "category": "economia",
      "title": "Tres equipos para ejecutar un contrato",
      "promptHtml": "<p>Una empresa debe instalar puestos desmontables para una feria. Tres\nequipos independientes, A, B y C, pueden realizar por separado todo el\ntrabajo. El equipo B tarda tres días más que A, y C tarda ocho días más\nque A. Una prueba de planificación indica que, si los tres trabajan\njuntos desde el comienzo, completan el contrato en seis días.</p>\n<p>Se supone que cada equipo mantiene una productividad constante, que\nsus aportes se suman y que no se interfieren al trabajar juntos. El pago\nse calcula proporcionalmente al tiempo trabajado, admitiendo fracciones\nde día. Las tarifas son $390.000 por día para A, $280.000 para B y\n$180.000 para C. Solo hay un equipo disponible de cada tipo. La entrega\ndebe ocurrir en un máximo de nueve días y el presupuesto para los\nequipos es de $5.100.000.</p>\n<ol>\n<li><p>Defina el tiempo <span class=\"math inline\">\\(x\\)</span> que tarda\nA trabajando solo. Exprese qué fracción del trabajo realiza cada equipo\nen un día y construya la ecuación de la prueba conjunta. Indique el\ndominio de <span class=\"math inline\">\\(x\\)</span>.</p></li>\n<li><p>Transforme esa ecuación en una polinómica, calcule todas sus\nraíces reales y determine los tiempos individuales posibles.</p></li>\n<li><p>Para cada contratación ABC, AB, AC y BC, determine el tiempo para\ncompletar el trabajo y el costo correspondiente.</p></li>\n<li><p>¿Cuál de esas cuatro alternativas cumple simultáneamente plazo y\npresupuesto? Explique por qué elegir el equipo con la menor tarifa\ndiaria no resuelve por sí solo la decisión.</p></li>\n</ol>",
      "answerHtml": "<p>Tiempo individual: A, \\(14{,}89805643\\) días; B, \\(17{,}89805643\\) días; C, \\(22{,}89805643\\) días.</p><p>Raíces reales para \\(x\\): \\(14{,}89805643\\), \\(-6{,}38400943\\), \\(-1{,}51404700\\).</p><div class=\"table-scroll\"><table><thead><tr><th>Contratación</th><th>Tiempo (días)</th><th>Costo</th></tr></thead><tbody><tr><td>ABC</td><td>6</td><td>$5.100.000,00</td></tr><tr><td>AB</td><td>8,13042252</td><td>$5.447.383,09</td></tr><tr><td>AC</td><td>9,02570426</td><td>$5.144.651,43</td></tr><tr><td>BC</td><td>10,04582734</td><td>$4.621.080,58</td></tr></tbody></table></div><p>Contratación que cumple ambas condiciones: <strong>ABC</strong>.</p>",
      "sourceAnchor": "equipos",
      "sourceHref": "raices-de-polinomios.html#equipos"
    },
    {
      "id": "raiz-inventario",
      "number": 11,
      "topic": "raices",
      "level": "avanzado",
      "category": "economia",
      "title": "¿Qué merma puede soportar un inventario?",
      "promptHtml": "<p>Un almacén compra <span class=\"math inline\">\\(1000\\)</span> kg de un\ngrano alimentario a $4.000 por kilogramo. El costo total de\nalmacenamiento, inspección y disposición de pérdidas durante los cuatro\nmeses siguientes es $500.000. No recibe nuevas mercancías.</p>\n<p>Al finalizar cada mes se inspecciona primero el inventario: una\nfracción <span class=\"math inline\">\\(d\\)</span> de la masa que había al\ncomenzar ese mes se considera no apta y se retira sin ingreso de\nrecuperación. Inmediatamente después, el almacén vende <span\nclass=\"math inline\">\\(200\\)</span> kg aptos a $6.000 por kilogramo. Se\nusa la misma fracción de merma en los cuatro meses, con <span\nclass=\"math inline\">\\(0\\le d&lt;1\\)</span>. Las ventas de <span\nclass=\"math inline\">\\(200\\)</span> kg deben poder realizarse en cada\nmes; una cantidad negativa no representa inventario admisible.</p>\n<p>Después de la venta habitual del cuarto mes, todo el inventario apto\nque todavía queda se liquida a $4.000 por kilogramo. El almacén quiere\nuna utilidad contable de al menos $600.000, después de los costos\nindicados. Las cantidades y precios son condiciones del caso y no una\nestimación para un almacén real ni un estudio de deterioro de un\nproducto identificado.</p>\n<ol>\n<li><p>Sea <span class=\"math inline\">\\(R_t\\)</span> la masa que queda\ndespués de la venta habitual del mes <span\nclass=\"math inline\">\\(t\\)</span>, con <span\nclass=\"math inline\">\\(R_0=1000\\)</span>. Construya la relación entre los\ninventarios de dos meses consecutivos. Exprese <span\nclass=\"math inline\">\\(R_1,R_2,R_3,R_4\\)</span> en función de <span\nclass=\"math inline\">\\(d\\)</span>. Respete el orden: inspección, pérdida\ny venta.</p></li>\n<li><p>A partir de ingresos y costos, determine cuánto inventario <span\nclass=\"math inline\">\\(R_4\\)</span> debe quedar para alcanzar exactamente\nla utilidad exigida. Explique por qué el ingreso de la liquidación no\ndebe contarse como si se vendieran nuevamente los <span\nclass=\"math inline\">\\(800\\)</span> kg ya despachados.</p></li>\n<li><p>Use <span class=\"math inline\">\\(q=1-d\\)</span>, la fracción que\nsobrevive a cada inspección, para modelar una ecuación polinómica.\nCalcule sus raíces reales y compruebe el inventario de los cuatro meses\npara cada candidata.</p></li>\n<li><p>Determine la mayor merma mensual que permite alcanzar la meta.\n¿Una merma del <span class=\"math inline\">\\(5\\,\\%\\)</span> sería\ntolerable? Si el porcentaje se comunica con dos decimales, ¿debe\ninformarse <span class=\"math inline\">\\(4{,}89\\,\\%\\)</span> o <span\nclass=\"math inline\">\\(4{,}90\\,\\%\\)</span> como máximo permitido?\nJustifique la elección.</p></li>\n</ol>",
      "answerHtml": "<p>Inventario final requerido: \\(75\\) kg.</p><p>Raíces reales para \\(q\\): \\(0{,}951067354344\\) y \\(-0{,}646937517890\\).</p><p>Merma mensual máxima: \\(4{,}8932645656\\,\\%\\). Máximo comunicado con dos decimales: \\(4{,}89\\,\\%\\).</p><p>Inventarios después de cada venta: \\(751{,}06735434\\), \\(514{,}31564163\\), \\(289{,}14881658\\) y \\(75\\) kg.</p><p>Con merma del \\(5\\,\\%\\): \\(72{,}53125\\) kg finales y utilidad de <strong>$590.125</strong>; no alcanza la meta.</p>",
      "sourceAnchor": "inventario",
      "sourceHref": "raices-de-polinomios.html#inventario"
    },
    {
      "id": "raiz-credito",
      "number": 12,
      "topic": "raices",
      "level": "avanzado",
      "category": "economia",
      "title": "Descubrir la tasa de un crédito a partir de sus cuotas",
      "promptHtml": "<p>Un negocio recibe hoy un préstamo de $30.000.000. El contrato\nestablece cinco pagos mensuales iguales de $6.400.000, el primero al\nterminar el primer mes y el último al terminar el quinto. No hay\ncomisión inicial, seguros, pagos adicionales ni cargos por\nadministración. El capital entregado coincide con el desembolso\nrecibido.</p>\n<p>Durante cada mes, antes de efectuar el pago, el saldo pendiente\naumenta en una misma proporción <span class=\"math inline\">\\(i\\)</span>,\nque es la tasa de interés efectiva mensual. Después se descuenta la\ncuota de ese mes. El quinto pago extingue exactamente la deuda.\nConsidere tasas <span class=\"math inline\">\\(i\\ge0\\)</span>. Estos son\ntérminos propuestos para el ejercicio, no una oferta de una entidad\nfinanciera.</p>\n<p><strong>Cómo calcular una cuota cuando se conoce la tasa.</strong> Al\npagar una cuota mensual, una parte cubre los intereses del mes y el\nresto reduce la deuda. Como la deuda va disminuyendo después de cada\npago, en los meses siguientes se calculan intereses sobre un saldo\nmenor.</p>\n<p>Para un préstamo de <span class=\"math inline\">\\(P\\)</span> pesos, una\ntasa efectiva mensual <span class=\"math inline\">\\(i&gt;0\\)</span> y\n<span class=\"math inline\">\\(n\\)</span> cuotas iguales pagadas al final\nde cada mes, la cuota <span class=\"math inline\">\\(M\\)</span> es <span\nclass=\"math display\">\\[M=P\\,\\frac{i(1+i)^n}{(1+i)^n-1}.\\]</span> Aquí\n<span class=\"math inline\">\\(P\\)</span> es el dinero recibido al\ncomienzo; <span class=\"math inline\">\\(i\\)</span> es la tasa mensual como\nproporción (<span class=\"math inline\">\\(0{,}02\\)</span> significa <span\nclass=\"math inline\">\\(2\\,\\%\\)</span>); <span\nclass=\"math inline\">\\(n\\)</span> es el número de pagos mensuales; y\n<span class=\"math inline\">\\(M\\)</span> es el valor de cada cuota, en\npesos. Si la tasa es cero, cada cuota es simplemente <span\nclass=\"math inline\">\\(P/n\\)</span>. La fórmula supone que no existen los\ncargos adicionales excluidos en este contrato.</p>\n<p><strong>Ejemplo numérico.</strong> Si se recibieran <span\nclass=\"math inline\">\\(\\$30.000.000\\)</span>, se pactaran cinco cuotas y\nla tasa fuera del <span class=\"math inline\">\\(2\\,\\%\\)</span> mensual, la\nfórmula daría una cuota de aproximadamente <span\nclass=\"math inline\">\\(\\$6.364.751{,}82\\)</span>. Al terminar el primer\nmes se deben los 30 millones más <span\nclass=\"math inline\">\\(\\$600.000\\)</span> de intereses. Al pagar la\nprimera cuota quedan aproximadamente <span\nclass=\"math inline\">\\(\\$24.235.248{,}18\\)</span> de deuda. Durante el\nsegundo mes, el <span class=\"math inline\">\\(2\\,\\%\\)</span> se calcula\nsobre ese saldo: aproximadamente <span\nclass=\"math inline\">\\(\\$484.704{,}96\\)</span>. Después de la segunda\ncuota quedan <span class=\"math inline\">\\(\\$18.355.201{,}32\\)</span>. Si\nse repite el proceso usando la cuota sin redondear, la quinta deja el\nsaldo en cero; en una operación en centavos puede ajustarse la última\npor redondeo.</p>\n<p>En el ejemplo se conocía la tasa y se calculó la cuota. En el\ncontrato del problema se conoce la cuota de <span\nclass=\"math inline\">\\(\\$6.400.000\\)</span> y se pide encontrar qué tasa\nhace que los cinco pagos cancelen exactamente la deuda. Puede construir\nesa condición siguiendo los saldos mes a mes.</p>\n<ol>\n<li><p>Exprese en millones de pesos el saldo inmediatamente después de\ncada pago. Sea <span class=\"math inline\">\\(B_t\\)</span> el saldo después\ndel pago <span class=\"math inline\">\\(t\\)</span>, con <span\nclass=\"math inline\">\\(B_0=30\\)</span>. Construya la regla entre dos\nsaldos consecutivos y la condición final.</p></li>\n<li><p>Use <span class=\"math inline\">\\(x=1+i\\)</span> para construir una\necuación polinómica y determine su grado y dominio. Calcule todas las\nraíces reales y seleccione las que describen un crédito\npermitido.</p></li>\n<li><p>Un comerciante suma las cuotas, resta el capital y divide ese\nexceso entre cinco meses y entre el capital original. Afirma que así\nobtiene la tasa mensual del crédito. Compare ese resultado con su\nsolución y explique qué ignora acerca del saldo pendiente.</p></li>\n<li><p>Verifique los cinco saldos con la tasa encontrada. Si la tasa\nfuera del <span class=\"math inline\">\\(2\\,\\%\\)</span> mensual, ¿las cinco\ncuotas de $6.400.000 extinguirían exactamente la deuda? Finalmente,\ncalcule la tasa efectiva anual equivalente, entendida como la proporción\nen que crecería un saldo sin pagos al aplicar la misma tasa mensual\ndurante doce meses.</p></li>\n</ol>",
      "answerHtml": "<p>Única raíz real para \\(x\\): \\(1{,}021905829943\\).</p><p>Tasa efectiva mensual: \\(2{,}1905829943\\,\\%\\). Tasa efectiva anual equivalente: \\(29{,}6971764810\\,\\%\\).</p><p>Resultado del cálculo simplificado del comerciante: \\(1{,}333333\\ldots\\,\\%\\) mensual.</p><p>Saldos después de cada pago, en millones de pesos: \\(24{,}25717490\\), \\(18{,}38854845\\), \\(12{,}39136486\\), \\(6{,}26280799\\), \\(0\\).</p><p>Con tasa del \\(2\\,\\%\\), la quinta cuota exacta sería <strong>$6.216.567,07</strong>; pagar $6.400.000 excedería el saldo en <strong>$183.432,93</strong>.</p>",
      "sourceAnchor": "credito",
      "sourceHref": "raices-de-polinomios.html#credito"
    },
    {
      "id": "raiz-van",
      "number": 13,
      "topic": "raices",
      "level": "avanzado",
      "category": "economia",
      "title": "Una inversión ambiental: ¿puede haber dos tasas de equilibrio?",
      "promptHtml": "<p>Una empresa evalúa instalar temporalmente una planta de\naprovechamiento de materiales en un terreno arrendado. Al terminar el\ncontrato debe retirar las instalaciones y restaurar el predio. Para el\nproyecto se plantean los siguientes flujos <em>netos</em>, en millones\nde pesos:</p>\n<div class=\"center\">\n<table>\n<thead>\n<tr class=\"header\">\n<th style=\"text-align: center;\">Momento</th>\n<th style=\"text-align: right;\">Flujo</th>\n<th style=\"text-align: left;\">Descripción</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td style=\"text-align: center;\">Hoy</td>\n<td style=\"text-align: right;\"><span\nclass=\"math inline\">\\(-100\\)</span></td>\n<td style=\"text-align: left;\">Instalación y puesta en marcha.</td>\n</tr>\n<tr class=\"even\">\n<td style=\"text-align: center;\">Final del año 1</td>\n<td style=\"text-align: right;\"><span\nclass=\"math inline\">\\(145\\)</span></td>\n<td style=\"text-align: left;\">Cobros del contrato y ventas, menos costos\ndel año.</td>\n</tr>\n<tr class=\"odd\">\n<td style=\"text-align: center;\">Final del año 2</td>\n<td style=\"text-align: right;\"><span\nclass=\"math inline\">\\(16\\)</span></td>\n<td style=\"text-align: left;\">Cobros menos costos del año.</td>\n</tr>\n<tr class=\"even\">\n<td style=\"text-align: center;\">Final del año 3</td>\n<td style=\"text-align: right;\"><span\nclass=\"math inline\">\\(47\\)</span></td>\n<td style=\"text-align: left;\">Cobros y venta de equipos, menos costos\ndel año.</td>\n</tr>\n<tr class=\"odd\">\n<td style=\"text-align: center;\">Final del año 4</td>\n<td style=\"text-align: right;\"><span\nclass=\"math inline\">\\(-118\\)</span></td>\n<td style=\"text-align: left;\">Retiro de instalaciones y restauración del\npredio.</td>\n</tr>\n</tbody>\n</table>\n</div>\n<p>Un flujo positivo es dinero recibido y uno negativo es dinero pagado.\nNo deben agregarse nuevamente los costos ya incluidos en estos\nflujos.</p>\n<p>Para comparar dinero de distintos momentos se adopta el método del\nvalor actual neto (VAN) del libro citado en la bibliografía. Un flujo\n<span class=\"math inline\">\\(F\\)</span> al final del año <span\nclass=\"math inline\">\\(t\\)</span> tiene hoy el valor <span\nclass=\"math display\">\\[\\frac{F}{(1+i)^t}.\\]</span> Aquí <span\nclass=\"math inline\">\\(F\\)</span> se expresa en millones de pesos, <span\nclass=\"math inline\">\\(t\\)</span> es el número de años transcurridos e\n<span class=\"math inline\">\\(i\\)</span> es la tasa anual de descuento\ncomo proporción (por ejemplo, <span\nclass=\"math inline\">\\(i=0{,}08\\)</span> significa <span\nclass=\"math inline\">\\(8\\,\\%\\)</span>). El VAN suma los valores actuales\nde todos los flujos, incluido el inicial. Un VAN positivo significa que\nel proyecto supera la rentabilidad exigida con esa tasa. Una tasa que\nhace VAN igual a cero se llama tasa interna de retorno. Considere\nsolamente tasas no negativas.</p>\n<p><strong>Un ejemplo para entender el VAN.</strong> Suponga que la\nrentabilidad anual de referencia es del <span\nclass=\"math inline\">\\(10\\,\\%\\)</span>. Cien millones disponibles hoy se\nconvertirían en 110 millones al terminar un año y en 121 millones al\nterminar dos años. Por eso, recibir 121 millones dentro de dos años\ntiene hoy el mismo valor financiero que disponer de 100 millones: para\nregresar al presente se divide 121 entre <span\nclass=\"math inline\">\\((1{,}10)^2\\)</span>. Para un cobro de 121 y una\ninversión inicial de 100, el VAN al <span\nclass=\"math inline\">\\(10\\,\\%\\)</span> es cero. Si el cobro fuera 130, su\nvalor de hoy sería <span class=\"math inline\">\\(130/(1{,}10)^2\\)</span>,\ny al restarle los 100 invertidos quedaría un VAN positivo. Cada flujo\ndel proyecto se traslada al presente de esta misma manera, conservando\nsu signo; un pago futuro se descuenta también, pero se suma como\ncantidad negativa.</p>\n<ol>\n<li><p>Construya el VAN del proyecto. Explique por qué sumar\ndirectamente los cinco flujos equivale a un caso particular de la\ncomparación.</p></li>\n<li><p>Introduzca <span class=\"math inline\">\\(x=1+i\\)</span> y construya\nuna ecuación polinómica para hallar las tasas de equilibrio. Determine\nel dominio de <span class=\"math inline\">\\(x\\)</span>.</p></li>\n<li><p>Calcule todas las raíces reales, determine cuáles producen tasas\nadmisibles y expréselas como porcentajes anuales.</p></li>\n<li><p>Evalúe el VAN para tasas del <span\nclass=\"math inline\">\\(8\\,\\%\\)</span>, <span\nclass=\"math inline\">\\(20\\,\\%\\)</span> y <span\nclass=\"math inline\">\\(40\\,\\%\\)</span>. ¿En cuáles de esos escenarios se\nsupera la rentabilidad exigida?</p></li>\n<li><p>Un asesor solo encuentra la tasa positiva más alta y concluye:\n«Como es mayor que el <span class=\"math inline\">\\(8\\,\\%\\)</span>,\ndebemos aceptar el proyecto». Evalúe la conclusión. ¿Qué papel desempeña\nel egreso final?</p></li>\n</ol>",
      "answerHtml": "<p>Raíces reales para \\(x\\): \\(1{,}10473029\\) y \\(1{,}34191297\\).</p><p>Tasas de equilibrio: \\(10{,}473029\\,\\%\\) y \\(34{,}191297\\,\\%\\) anuales.</p><div class=\"table-scroll\"><table><thead><tr><th>Tasa</th><th>VAN (millones de pesos)</th></tr></thead><tbody><tr><td>8 %</td><td>−1,446727</td></tr><tr><td>20 %</td><td>2,237654</td></tr><tr><td>40 %</td><td>−1,853394</td></tr></tbody></table></div><p>Entre las tres tasas evaluadas, el VAN es positivo únicamente al <strong>20 %</strong>. Al 8 %, el proyecto no alcanza la rentabilidad exigida.</p>",
      "sourceAnchor": "van",
      "sourceHref": "raices-de-polinomios.html#van"
    },
    {
      "id": "raiz-biomasa",
      "number": 14,
      "topic": "raices",
      "level": "avanzado",
      "category": "ambiente",
      "title": "Aprovechamiento de una población: una cuota para tres temporadas",
      "promptHtml": "<p>Una asociación estudia cuántos kilogramos de peces de una misma\nespecie podría capturar al final de cada temporada en un estanque. La\n<strong>población</strong> es el conjunto de peces de esa especie que\nvive allí. Se la llama <strong>aprovechable</strong> porque se está\nevaluando su captura para uso o venta; esa palabra no significa que\ncualquier cuota sea aceptable. La <strong>biomasa</strong> es el peso\ntotal de esos peces vivos: por ejemplo, 100 peces de 2 kg representan\n200 kg de biomasa. El problema trabaja con ese peso total, no con el\nnúmero de peces.</p>\n<p>Inicialmente hay <span class=\"math inline\">\\(400\\)</span> kg. Para\nexplorar el escenario, se adopta una capacidad de referencia de <span\nclass=\"math inline\">\\(1000\\)</span> kg. Cuanto más cerca esté la biomasa\nde esa capacidad, menos espacio y recursos quedan para el crecimiento.\nLas cifras son parámetros de planificación, no mediciones atribuidas a\nuna especie del artículo de referencia.</p>\n<p>El equipo utiliza esta regla práctica en cada temporada, siempre en\nel mismo orden:</p>\n<ul>\n<li><p>Anota cuántos kilogramos de peces hay al comenzar la\ntemporada.</p></li>\n<li><p>Calcula cuánto falta para llegar a 1000 kg y qué porcentaje de\nesa capacidad representa el faltante.</p></li>\n<li><p>Calcula el 80 % del peso inicial de los peces y conserva de esa\ncantidad el porcentaje del paso anterior. El resultado es el aumento\nneto de biomasa previsto para esa temporada, después de los nacimientos,\nel crecimiento y la mortalidad natural incorporados en esta\nregla.</p></li>\n<li><p>Suma ese aumento al peso inicial y, al final, retira <span\nclass=\"math inline\">\\(h\\)</span> kg mediante captura. Lo que queda pasa\na ser el peso inicial de la temporada siguiente.</p></li>\n</ul>\n<p><strong>Ejemplo de aplicación de la regla.</strong> Si se comienza\ncon 400 kg, faltan 600 kg para llegar a 1000: queda libre el 60 % de la\ncapacidad de referencia. El 80 % de 400 kg es 320 kg, y el 60 % de 320\nkg es 192 kg. Antes de la captura se proyectan, entonces, 592 kg.\nDespués se retira la cuota acordada. En la temporada siguiente deben\nrepetirse todos los pasos con el peso que haya quedado; no se añaden\nsiempre los mismos 192 kg.</p>\n<p>Se repite la <strong>misma cuota</strong> durante tres temporadas y\nse desea terminar la tercera con <span\nclass=\"math inline\">\\(500\\)</span> kg. La cuota debe ser no negativa, no\npuede extraerse más de lo disponible, y la biomasa que queda en cada una\nde las tres temporadas debe estar entre 0 y 1000 kg. La estructura de la\nregla se adapta del modelo de población de Eraud et al. (2021), sin dar\npor calibrado el escenario para estos peces.</p>\n<ol>\n<li><p>Sea <span class=\"math inline\">\\(N_t\\)</span> la biomasa, en kg,\nque queda al terminar la temporada <span\nclass=\"math inline\">\\(t\\)</span>, con <span\nclass=\"math inline\">\\(N_0=400\\)</span>. Construya la regla que relaciona\n<span class=\"math inline\">\\(N_{t+1}\\)</span>, <span\nclass=\"math inline\">\\(N_t\\)</span> y <span\nclass=\"math inline\">\\(h\\)</span>, y obtenga expresiones para <span\nclass=\"math inline\">\\(N_1\\)</span>, <span\nclass=\"math inline\">\\(N_2\\)</span> y <span\nclass=\"math inline\">\\(N_3\\)</span>.</p></li>\n<li><p>Modele la meta final y explique por qué se obtiene una ecuación\nde grado cuatro en <span class=\"math inline\">\\(h\\)</span>, aunque la\nregla de cada temporada sea cuadrática en la biomasa.</p></li>\n<li><p>Para facilitar la gráfica, utilice <span\nclass=\"math inline\">\\(z=h/1000\\)</span>, que expresa la cuota en miles\nde kg. Calcule las raíces reales y verifique la trayectoria completa de\ncada cuota obtenida. Seleccione las admisibles.</p></li>\n<li><p>Si la cuota se fija en kilogramos enteros y la meta es terminar\ncon <em>al menos</em> <span class=\"math inline\">\\(500\\)</span> kg,\ncompare los dos enteros cercanos a la cuota admisible y decida cuál\ncumple.</p></li>\n<li><p>Con la cuota continua seleccionada, construya la ecuación de una\nbiomasa de equilibrio: una biomasa que se mantendría igual tras una\ntemporada completa. Calcule sus raíces y compárelas con la biomasa\ninicial. ¿Comprobar tres temporadas demuestra por sí solo sostenibilidad\nindefinida?</p></li>\n</ol>\n<p class=\"source-note\">Modelo de referencia: Eraud et al. (2021), adaptado al escenario de biomasa descrito. <a href=\"raices-de-polinomios.html#fuentes\">Consultar la bibliografía.</a></p>",
      "answerHtml": "<ul>\n<li>Grado de la ecuación en la cuota: <strong>4</strong>.</li>\n<li>Raíces reales para la cuota: \\(h\\approx162{,}32391471\\) kg y \\(h\\approx-3042{,}48094617\\) kg. Cuota admisible: <strong>\\(162{,}32391471\\) kg por temporada</strong>.</li>\n<li>Raíces reales en la escala \\(z\\): \\(0{,}16232391471\\) y \\(-3{,}04248094617\\).</li>\n<li>Biomasas con la cuota admisible, al terminar las temporadas 1, 2 y 3: <strong>\\(429{,}67608529\\), \\(463{,}39580820\\) y \\(500\\) kg</strong>.</li>\n<li>Biomasas para la cuota descartada: \\(3634{,}48094617\\), \\(-983{,}01474917\\) y \\(500\\) kg.</li>\n<li>Cuota entera de \\(162\\) kg: biomasa final \\(501{,}04780288\\) kg. Cuota de \\(163\\) kg: \\(497{,}81000490\\) kg. De esas dos, cumple <strong>\\(162\\) kg</strong>.</li>\n<li>Biomasas de equilibrio: <strong>\\(282{,}98593\\) y \\(717{,}01407\\) kg</strong>. La biomasa inicial es \\(400\\) kg.</li>\n</ul>",
      "sourceAnchor": "biomasa",
      "sourceHref": "raices-de-polinomios.html#biomasa"
    },
    {
      "id": "raiz-carbonato",
      "number": 15,
      "topic": "raices",
      "level": "avanzado",
      "category": "ambiente",
      "title": "Agua con dióxido de carbono: un balance que determina la acidez",
      "promptHtml": "<p>Un laboratorio prepara agua desionizada con carbono inorgánico\ndisuelto y la mantiene en un recipiente cerrado, <em>sin fase\ngaseosa</em>, a <span class=\"math inline\">\\(25\\,^{\\circ}\\mathrm\nC\\)</span>. Se fija una concentración total de carbono inorgánico de\n<span class=\"math inline\">\\(T=5{,}00\\times10^{-4}\\)</span> mol/L. Se\nsupone una solución ideal diluida, sin otras sales, sólidos ni ácidos.\nNo se pretende representar con esta composición el agua de cualquier\nrío.</p>\n<p>El carbono se distribuye entre una forma neutra, bicarbonato y\ncarbonato. Para este cálculo se utilizan las siguientes cantidades\nnuméricas de concentración, todas en mol/L:</p>\n<ul>\n<li><p><span class=\"math inline\">\\(A\\)</span>: dióxido de carbono acuoso\nmás ácido carbónico, agrupados como <span\nclass=\"math inline\">\\(\\mathrm{H_2CO_3^*}\\)</span>.</p></li>\n<li><p><span class=\"math inline\">\\(B\\)</span>: bicarbonato, <span\nclass=\"math inline\">\\(\\mathrm{HCO_3^-}\\)</span>.</p></li>\n<li><p><span class=\"math inline\">\\(D\\)</span>: carbonato, <span\nclass=\"math inline\">\\(\\mathrm{CO_3^{2-}}\\)</span>.</p></li>\n<li><p><span class=\"math inline\">\\(H\\)</span>: iones hidrógeno, <span\nclass=\"math inline\">\\(\\mathrm{H^+}\\)</span>; <span\nclass=\"math inline\">\\(W\\)</span>: iones hidróxido, <span\nclass=\"math inline\">\\(\\mathrm{OH^-}\\)</span>.</p></li>\n</ul>\n<p>El material de Penn State citado en la bibliografía proporciona las\nrelaciones de equilibrio y sus constantes. En la aproximación ideal\nadoptada, se escribe: <span\nclass=\"math display\">\\[\\frac{HB}{A}=K_1,\\qquad \\frac{HD}{B}=K_2,\\qquad\nHW=K_w,\\]</span> <span class=\"math display\">\\[K_1=10^{-6{,}35},\\qquad\nK_2=10^{-10{,}33},\\qquad K_w=10^{-14}.\\]</span> Las constantes se usan\ncon concentraciones expresadas en mol/L y el estado estándar de <span\nclass=\"math inline\">\\(1\\)</span> mol/L. Se añaden dos balances del\nsistema: <span class=\"math display\">\\[A+B+D=T,\\qquad H=B+2D+W.\\]</span>\nEl primero conserva carbono y el segundo iguala cargas positivas y\nnegativas. El factor 2 cuenta las dos cargas negativas del carbonato.\nEstas relaciones son todos los conocimientos químicos necesarios.</p>\n<p><strong>Ruta de trabajo algebraica.</strong> Para responder no\nnecesita explicar las reacciones ni diseñar un experimento: trate <span\nclass=\"math inline\">\\(A,B,D,H,W\\)</span> como cinco números desconocidos\nque deben cumplir simultáneamente las cinco igualdades dadas. Las\nconstantes <span class=\"math inline\">\\(K_1,K_2,K_w,T\\)</span> ya son\nconocidas. El objetivo es reducir el sistema a una ecuación en <span\nclass=\"math inline\">\\(H\\)</span>.</p>\n<ol>\n<li><p>En la primera relación, multiplique por <span\nclass=\"math inline\">\\(A\\)</span> y despeje <span\nclass=\"math inline\">\\(B\\)</span>. En la segunda, despeje <span\nclass=\"math inline\">\\(D\\)</span> y sustituya en ella la expresión\nobtenida para <span class=\"math inline\">\\(B\\)</span>. En la tercera,\ndespeje <span class=\"math inline\">\\(W\\)</span>. Debe quedar <span\nclass=\"math inline\">\\(B\\)</span> en términos de <span\nclass=\"math inline\">\\(A,H\\)</span>, <span\nclass=\"math inline\">\\(D\\)</span> en términos de <span\nclass=\"math inline\">\\(A,H\\)</span>, y <span\nclass=\"math inline\">\\(W\\)</span> en términos de <span\nclass=\"math inline\">\\(H\\)</span>.</p></li>\n<li><p>Sustituya las expresiones de <span\nclass=\"math inline\">\\(B\\)</span> y <span\nclass=\"math inline\">\\(D\\)</span> en <span\nclass=\"math inline\">\\(A+B+D=T\\)</span>. Todos los términos del miembro\nizquierdo contienen <span class=\"math inline\">\\(A\\)</span>: sáquelo como\nfactor común y despeje <span class=\"math inline\">\\(A\\)</span>. Reescriba\nel resultado como un solo cociente de polinomios en <span\nclass=\"math inline\">\\(H\\)</span>, multiplicando numerador y denominador\npor <span class=\"math inline\">\\(H^2\\)</span>.</p></li>\n<li><p>Use la expresión anterior de <span\nclass=\"math inline\">\\(A\\)</span> para escribir también <span\nclass=\"math inline\">\\(B\\)</span> y <span\nclass=\"math inline\">\\(D\\)</span> únicamente en términos de <span\nclass=\"math inline\">\\(H\\)</span>. Sustituya esas dos expresiones y la de\n<span class=\"math inline\">\\(W\\)</span> en la igualdad <span\nclass=\"math inline\">\\(H=B+2D+W\\)</span>. ¿Cuántas incógnitas\nquedan?</p></li>\n<li><p>Identifique los denominadores que aparecen y justifique que son\npositivos cuando <span class=\"math inline\">\\(H&gt;0\\)</span>.\nMultiplique para eliminarlos, distribuya los productos, agrupe potencias\niguales y escriba un polinomio igual a cero. Indique el grado de ese\npolinomio.</p></li>\n<li><p>Para introducirlo en la calculadora, haga el cambio de escala\n<span class=\"math inline\">\\(H=10^{-6}x\\)</span>, usando valores\nnuméricos de concentración en mol/L. Esto significa que <span\nclass=\"math inline\">\\(x\\)</span> mide la concentración en micromoles por\nlitro. Sustituya, divida toda la ecuación por <span\nclass=\"math inline\">\\(10^{-24}\\)</span> y calcule las raíces reales.\nAjuste el zoom cerca de cero para localizar raíces pequeñas.</p></li>\n<li><p>Recuerde que <span class=\"math inline\">\\(H\\)</span> es una\nconcentración <em>positiva</em>. Descarte las raíces incompatibles con\nesa condición y convierta la solución seleccionada a mol/L.</p></li>\n<li><p>Sustituya el valor positivo de <span\nclass=\"math inline\">\\(H\\)</span> en sus fórmulas para recuperar <span\nclass=\"math inline\">\\(A,B,D,W\\)</span>. Calcule los dos miembros de cada\nuna de las cinco igualdades originales y compruebe que coinciden\naproximadamente. Use varias cifras: <span\nclass=\"math inline\">\\(D\\)</span> y <span\nclass=\"math inline\">\\(W\\)</span> pueden ser mucho menores que las otras\ncantidades.</p></li>\n<li><p>El laboratorio informa el resultado mediante el número <span\nclass=\"math inline\">\\(\\mathrm{pH}=-\\log_{10}(H/(1\\,\\mathrm{mol/L}))\\)</span>.\nCalcule ese número con la calculadora. Para interpretar el resultado,\nuse esta regla a <span class=\"math inline\">\\(25\\,^{\\circ}\\mathrm\nC\\)</span>: pH menor que 7, medio ácido; pH igual a 7, neutro; pH mayor\nque 7, básico. Por último, compare <span\nclass=\"math inline\">\\(H\\)</span> con <span\nclass=\"math inline\">\\(T\\)</span>: ¿son iguales en la solución?</p></li>\n</ol>\n<p class=\"source-note\">Relaciones y constantes de referencia: Penn State, CE 574, ejemplo 1.1. <a href=\"raices-de-polinomios.html#fuentes\">Consultar la bibliografía.</a></p>",
      "answerHtml": "<ul>\n<li>Incógnitas que quedan después de las sustituciones: <strong>1</strong>. Grado del polinomio: <strong>4</strong>.</li>\n<li>Raíces reales en la escala \\(x\\): \\(14{,}7233427581\\), \\(-15{,}1699128083\\), \\(-1{,}04598931\\times10^{-4}\\) y \\(-8{,}94300034\\times10^{-6}\\).</li>\n<li>Concentración admisible: <strong>\\(H\\approx1{,}47233428\\times10^{-5}\\) mol/L</strong>.</li>\n<li>Otras concentraciones: \\(A\\approx4{,}85277383\\times10^{-4}\\), \\(B\\approx1{,}47225700\\times10^{-5}\\), \\(D\\approx4{,}67710593\\times10^{-11}\\) y \\(W\\approx6{,}79193588\\times10^{-10}\\) mol/L.</li>\n<li>Valor común de los dos miembros en las primeras tres igualdades: aproximadamente \\(4{,}46683592\\times10^{-7}\\), \\(4{,}67735141\\times10^{-11}\\) y \\(10^{-14}\\), respectivamente. En el balance de carbono: \\(5{,}00\\times10^{-4}\\); en el de cargas: \\(1{,}47233428\\times10^{-5}\\).</li>\n<li><strong>pH \\(\\approx4{,}831994\\): medio ácido.</strong></li>\n<li>Comparación final: \\(H\\approx0{,}0000147233\\) mol/L y \\(T=0{,}0005000000\\) mol/L.</li>\n</ul>",
      "sourceAnchor": "carbonato",
      "sourceHref": "raices-de-polinomios.html#carbonato"
    },
    {
      "id": "raiz-manning",
      "number": 16,
      "topic": "raices",
      "level": "avanzado",
      "category": "ambiente",
      "title": "Un canal de escorrentía: geometría, caudal y mantenimiento",
      "promptHtml": "<p>Se proyecta un canal trapezoidal para desviar escorrentía de una zona\nsusceptible a erosión. Su fondo horizontal tendrá <span\nclass=\"math inline\">\\(0{,}60\\)</span> m de ancho. Cada talud se desplaza\nhorizontalmente <span class=\"math inline\">\\(1{,}5\\)</span> m por cada\nmetro vertical. El fondo desciende <span\nclass=\"math inline\">\\(0{,}10\\)</span> m por cada <span\nclass=\"math inline\">\\(100\\)</span> m de recorrido. El caudal de diseño\nes <span class=\"math inline\">\\(0{,}80\\,\\mathrm{m^3/s}\\)</span>.</p>\n<p>Se aproxima el movimiento por flujo uniforme y estacionario en un\ntramo recto, sin infiltración. La FAO utiliza la fórmula de Manning para\nla velocidad. Al multiplicar por el área transversal, se obtiene: <span\nclass=\"math display\">\\[Q=\\frac1n A R^{2/3}S^{1/2},\\qquad R=\\frac\nAP.\\]</span> Aquí <span class=\"math inline\">\\(Q\\)</span> es el caudal en\n<span class=\"math inline\">\\(\\mathrm{m^3/s}\\)</span>; <span\nclass=\"math inline\">\\(A\\)</span>, el área de la sección ocupada por agua\nen <span class=\"math inline\">\\(\\mathrm{m^2}\\)</span>; <span\nclass=\"math inline\">\\(P\\)</span>, la longitud del fondo y los taludes en\ncontacto con agua en m; <span class=\"math inline\">\\(R\\)</span>, el radio\nhidráulico en m; y <span class=\"math inline\">\\(S\\)</span>, la pendiente\nlongitudinal en m/m. <span class=\"math inline\">\\(n\\)</span> es el\ncoeficiente de rugosidad de Manning, con unidades <span\nclass=\"math inline\">\\(\\mathrm{s/m^{1/3}}\\)</span> en esta forma SI de la\necuación. La superficie libre no forma parte de <span\nclass=\"math inline\">\\(P\\)</span>.</p>\n<p>Para hierba corta y pocas malezas se adopta <span\nclass=\"math inline\">\\(n=0{,}024\\)</span>, de la tabla 37 de la FAO. Las\ndimensiones, el caudal y el resguardo siguientes son condiciones del\nproyecto.</p>\n<ol>\n<li><p>Dibuje la sección transversal. Defina la profundidad de agua\n<span class=\"math inline\">\\(y&gt;0\\)</span>, construya <span\nclass=\"math inline\">\\(A(y)\\)</span> y <span\nclass=\"math inline\">\\(P(y)\\)</span> y convierta la pendiente del texto a\nm/m. Use el teorema de Pitágoras para las longitudes\ninclinadas.</p></li>\n<li><p>Sustituya en Manning y construya una ecuación polinómica para\n<span class=\"math inline\">\\(y\\)</span>. Determine su grado <em>antes de\nexpandir</em>. Puede conservar productos y potencias al introducirla en\nla calculadora.</p></li>\n<li><p>Calcule las raíces reales y seleccione las físicamente\nadmisibles. Compruebe la solución en la fórmula original, no solo en el\npolinomio.</p></li>\n<li><p>La distancia vertical entre el agua y el borde superior del canal\n(bordo libre o resguardo) debe ser de al menos <span\nclass=\"math inline\">\\(0{,}20\\)</span> m. ¿Cuál es la profundidad total\nmínima que debe construirse si se especifica en centímetros\nenteros?</p></li>\n<li><p>Finalmente se construye una profundidad total de <span\nclass=\"math inline\">\\(0{,}95\\)</span> m. La maleza aumenta y la\nrugosidad pasa a <span class=\"math inline\">\\(n=0{,}040\\)</span>, valor\nque la FAO asocia con mantenimiento deficiente y malezas densas en la\nprofundidad de flujo. Modele la nueva profundidad de agua y determine si\ntodavía se cumple el resguardo. Si no se cumple, calcule el máximo\ncaudal que podría conducirse respetándolo.</p></li>\n</ol>\n<p class=\"source-note\">Modelo y rugosidades de referencia: FAO, capítulo 8, sección 8.2 y tabla 37. <a href=\"raices-de-polinomios.html#fuentes\">Consultar la bibliografía.</a></p>",
      "answerHtml": "<ul>\n<li>Pendiente longitudinal: <strong>\\(S=0{,}001\\)</strong>, equivalente al \\(0{,}10\\,\\%\\). Grado resultante: <strong>10</strong>.</li>\n<li>Raíces reales iniciales: \\(y\\approx-1{,}12231826\\) m y \\(y\\approx0{,}7065029243\\) m. Profundidad admisible de agua: <strong>\\(0{,}7065029243\\) m</strong>.</li>\n<li>Caudal verificado: \\(0{,}80\\,\\mathrm{m^3/s}\\).</li>\n<li>Profundidad total mínima: \\(0{,}9065029243\\) m; especificada en centímetros enteros: <strong>\\(0{,}91\\) m</strong>.</li>\n<li>Con \\(n=0{,}040\\): profundidad del agua \\(0{,}8890018335\\) m y bordo libre \\(0{,}0609981665\\) m, menor que los \\(0{,}20\\) m exigidos.</li>\n<li>Profundidad máxima de agua conservando el bordo libre en el canal de \\(0{,}95\\) m: \\(0{,}75\\) m. Caudal máximo con la nueva rugosidad: <strong>\\(0{,}5474144588\\,\\mathrm{m^3/s}\\)</strong>.</li>\n</ul>",
      "sourceAnchor": "manning",
      "sourceHref": "raices-de-polinomios.html#manning"
    },
    {
      "id": "complejo-1",
      "number": 1,
      "topic": "complejos",
      "level": "intermedio",
      "title": "Sumar y restar pares de componentes",
      "promptHtml": "<p>Opera las partes reales e imaginarias y expresa el resultado en la forma \\(a+bi\\).</p><div class=\"math\">\\[(3-2i)+(-1+5i)-(2+i).\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\boxed{2i}\\]</div>"
    },
    {
      "id": "complejo-2",
      "number": 2,
      "topic": "complejos",
      "level": "intermedio",
      "title": "El cuadrado de un binomio complejo",
      "promptHtml": "<p>Desarrolla el producto notable y expresa el resultado en la forma \\(a+bi\\).</p><div class=\"math\">\\[(2-3i)^2.\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\boxed{-5-12i}\\]</div>"
    },
    {
      "id": "complejo-3",
      "number": 3,
      "topic": "complejos",
      "level": "intermedio",
      "title": "Un cociente en forma binómica",
      "promptHtml": "<p>Calcula el cociente y expresa el resultado en la forma \\(a+bi\\).</p><div class=\"math\">\\[\\frac{4-i}{1+2i}.\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\boxed{\\frac25-\\frac95i}\\]</div>"
    },
    {
      "id": "complejo-4",
      "number": 4,
      "topic": "complejos",
      "level": "avanzado",
      "title": "Potencias de i y conjugación",
      "promptHtml": "<p>Simplifica la expresión y escribe un único número en la forma \\(a+bi\\).</p><div class=\"math\">\\[i^{2026}(2+3i)+\\overline{(1-2i)^2}.\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\boxed{-5+i}\\]</div>"
    },
    {
      "id": "complejo-5",
      "number": 5,
      "topic": "complejos",
      "level": "avanzado",
      "title": "Una operación combinada",
      "promptHtml": "<p>Respeta el orden de las operaciones y expresa el resultado en la forma \\(a+bi\\).</p><div class=\"math\">\\[\\frac{(2-i)^2}{1+i}-\\frac{3+i}{2-i}.\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\boxed{-\\frac32-\\frac92i}\\]</div>"
    },
    {
      "id": "complejo-6",
      "number": 6,
      "topic": "complejos",
      "level": "avanzado",
      "title": "Resolver una ecuación lineal compleja",
      "promptHtml": "<p>Encuentra el único \\(z\\in\\mathbb C\\) que satisface la ecuación y escríbelo en la forma \\(a+bi\\).</p><div class=\"math\">\\[(2-i)z+(1+3i)=(1+i)z+(4-2i).\\]</div>",
      "answerHtml": "<div class=\"math\">\\[\\boxed{z=\\frac{13}{5}+\\frac15i}\\]</div>"
    }
  ],
  "days": [
    [
      "factor-14",
      "factor-38",
      "factor-39",
      "factor-40",
      "raiz-bambu",
      "complejo-1"
    ],
    [
      "factor-15",
      "factor-41",
      "factor-42",
      "factor-43",
      "raiz-franja-vegetal",
      "complejo-2"
    ],
    [
      "factor-16",
      "factor-44",
      "factor-45",
      "factor-46",
      "raiz-lamina-deposito",
      "complejo-3"
    ],
    [
      "factor-17",
      "factor-47",
      "factor-48",
      "factor-49",
      "raiz-parcela",
      "complejo-4"
    ],
    [
      "factor-18",
      "factor-50",
      "factor-51",
      "factor-52",
      "raiz-estanque",
      "complejo-5"
    ],
    [
      "factor-19",
      "factor-53",
      "factor-54",
      "factor-55",
      "raiz-rampa",
      "complejo-6"
    ]
  ]
};
