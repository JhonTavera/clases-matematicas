// Soluciones breves aprobadas: L > 0; 0± indica el signo de aproximación.
// Las fracciones con 0± son la notación de límites usada en el curso.
window.SOLUCIONES = {
  "Ej-a": {
    "respuesta": "0",
    "valor": "0",
    "pasos": [
      "\\frac{(x-2)^2}{x^2-4}=\\frac{(x-2)^2}{(x-2)(x+2)}",
      "=\\frac{x-2}{x+2}\\xrightarrow{x\\to 2}0"
    ],
    "nota": "El signo cambia al cruzar 2."
  },
  "Ej-b": {
    "respuesta": "L",
    "valor": "\\frac{1}{4}",
    "pasos": [
      "\\frac{x-2}{x^2-4}=\\frac{x-2}{(x-2)(x+2)}",
      "=\\frac{1}{x+2}\\xrightarrow{x\\to 2}\\frac{1}{4}"
    ],
    "nota": ""
  },
  "Ej-c": {
    "respuesta": "-infinito",
    "valor": "-\\infty",
    "pasos": [
      "\\frac{x-3}{x^2-4}=\\frac{x-3}{(x-2)(x+2)}\\xrightarrow{x\\to 2^+}\\frac{-1}{0^+\\cdot4}=-\\infty"
    ],
    "nota": ""
  },
  "Ej-d": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\frac{x-3}{x^2-4}=\\frac{x-3}{(x-2)(x+2)}\\xrightarrow{x\\to 2^-}\\frac{-1}{0^-\\cdot4}=+\\infty"
    ],
    "nota": ""
  },
  "Ej-e": {
    "respuesta": "NE",
    "valor": "\\mathrm{NE}",
    "pasos": [
      "f(x)=\\frac{x-3}{x^2-4}=\\frac{x-3}{(x-2)(x+2)}",
      "\\lim_{x\\to 2^-}f(x)=+\\infty,\\qquad\\lim_{x\\to 2^+}f(x)=-\\infty\\;\\Rightarrow\\;\\mathrm{NE}"
    ],
    "nota": "Los límites laterales son distintos.",
    "laterales": [
      "+\\infty",
      "-\\infty"
    ]
  },
  "Ej-f": {
    "respuesta": "-infinito",
    "valor": "-\\infty",
    "pasos": [
      "\\frac{2-x}{(x-2)^3}=\\frac{-(x-2)}{(x-2)^3}",
      "=\\frac{-1}{(x-2)^2}\\xrightarrow{x\\to 2}\\frac{-1}{0^+}=-\\infty"
    ],
    "nota": ""
  },
  "13a": {
    "respuesta": "L",
    "valor": "\\frac{2}{5}",
    "pasos": [
      "\\frac{2x+3}{5x+7}=\\frac{2+3/x}{5+7/x}\\xrightarrow{x\\to\\infty}\\frac{2}{5}"
    ],
    "nota": ""
  },
  "13b": {
    "respuesta": "L",
    "valor": "\\frac{2}{5}",
    "pasos": [
      "\\frac{2x+3}{5x+7}=\\frac{2+3/x}{5+7/x}\\xrightarrow{x\\to-\\infty}\\frac{2}{5}"
    ],
    "nota": ""
  },
  "14a": {
    "respuesta": "L",
    "valor": "2",
    "pasos": [
      "\\frac{2x^3+7}{x^3-x^2+x+7}=\\frac{2+7/x^3}{1-1/x+1/x^2+7/x^3}\\xrightarrow{x\\to\\infty}2"
    ],
    "nota": ""
  },
  "14b": {
    "respuesta": "L",
    "valor": "2",
    "pasos": [
      "\\frac{2x^3+7}{x^3-x^2+x+7}=\\frac{2+7/x^3}{1-1/x+1/x^2+7/x^3}\\xrightarrow{x\\to-\\infty}2"
    ],
    "nota": ""
  },
  "15a": {
    "respuesta": "0+",
    "valor": "0^+",
    "pasos": [
      "\\frac{x+1}{x^2+3}=\\frac{1/x+1/x^2}{1+3/x^2}\\xrightarrow{x\\to\\infty}0^+"
    ],
    "nota": ""
  },
  "15b": {
    "respuesta": "0-",
    "valor": "0^-",
    "pasos": [
      "\\frac{x+1}{x^2+3}=\\frac{1/x+1/x^2}{1+3/x^2}\\xrightarrow{x\\to-\\infty}0^-"
    ],
    "nota": ""
  },
  "16a": {
    "respuesta": "0+",
    "valor": "0^+",
    "pasos": [
      "\\frac{3x+7}{x^2-2}=\\frac{3/x+7/x^2}{1-2/x^2}\\xrightarrow{x\\to\\infty}0^+"
    ],
    "nota": ""
  },
  "16b": {
    "respuesta": "0-",
    "valor": "0^-",
    "pasos": [
      "\\frac{3x+7}{x^2-2}=\\frac{3/x+7/x^2}{1-2/x^2}\\xrightarrow{x\\to-\\infty}0^-"
    ],
    "nota": ""
  },
  "17a": {
    "respuesta": "L",
    "valor": "7",
    "pasos": [
      "\\frac{7x^3}{x^3-3x^2+6x}=\\frac{7}{1-3/x+6/x^2}\\xrightarrow{x\\to\\infty}7"
    ],
    "nota": ""
  },
  "17b": {
    "respuesta": "L",
    "valor": "7",
    "pasos": [
      "\\frac{7x^3}{x^3-3x^2+6x}=\\frac{7}{1-3/x+6/x^2}\\xrightarrow{x\\to-\\infty}7"
    ],
    "nota": ""
  },
  "18a": {
    "respuesta": "0+",
    "valor": "0^+",
    "pasos": [
      "\\frac{1}{x^3-4x+1}=\\frac{1/x^3}{1-4/x^2+1/x^3}\\xrightarrow{x\\to\\infty}0^+"
    ],
    "nota": ""
  },
  "18b": {
    "respuesta": "0-",
    "valor": "0^-",
    "pasos": [
      "\\frac{1}{x^3-4x+1}=\\frac{1/x^3}{1-4/x^2+1/x^3}\\xrightarrow{x\\to-\\infty}0^-"
    ],
    "nota": ""
  },
  "19a": {
    "respuesta": "0+",
    "valor": "0^+",
    "pasos": [
      "\\frac{10x^5+x^4+31}{x^6}=\\frac{10}{x}+\\frac{1}{x^2}+\\frac{31}{x^6}\\xrightarrow{x\\to\\infty}0^+"
    ],
    "nota": "El término 10/x determina el signo para |x| grande."
  },
  "19b": {
    "respuesta": "0-",
    "valor": "0^-",
    "pasos": [
      "\\frac{10x^5+x^4+31}{x^6}=\\frac{10}{x}+\\frac{1}{x^2}+\\frac{31}{x^6}\\xrightarrow{x\\to-\\infty}0^-"
    ],
    "nota": "El término 10/x determina el signo para |x| grande."
  },
  "20a": {
    "respuesta": "L",
    "valor": "\\frac{9}{2}",
    "pasos": [
      "\\frac{9x^4+x}{2x^4+5x^2-x+6}=\\frac{9+1/x^3}{2+5/x^2-1/x^3+6/x^4}\\xrightarrow{x\\to\\infty}\\frac{9}{2}"
    ],
    "nota": ""
  },
  "20b": {
    "respuesta": "L",
    "valor": "\\frac{9}{2}",
    "pasos": [
      "\\frac{9x^4+x}{2x^4+5x^2-x+6}=\\frac{9+1/x^3}{2+5/x^2-1/x^3+6/x^4}\\xrightarrow{x\\to-\\infty}\\frac{9}{2}"
    ],
    "nota": ""
  },
  "21a": {
    "respuesta": "-L",
    "valor": "-\\frac{2}{3}",
    "pasos": [
      "\\frac{-2x^3-2x+3}{3x^3+3x^2-5x}=\\frac{-2-2/x^2+3/x^3}{3+3/x-5/x^2}\\xrightarrow{x\\to\\infty}-\\frac{2}{3}"
    ],
    "nota": ""
  },
  "21b": {
    "respuesta": "-L",
    "valor": "-\\frac{2}{3}",
    "pasos": [
      "\\frac{-2x^3-2x+3}{3x^3+3x^2-5x}=\\frac{-2-2/x^2+3/x^3}{3+3/x-5/x^2}\\xrightarrow{x\\to-\\infty}-\\frac{2}{3}"
    ],
    "nota": ""
  },
  "22a": {
    "respuesta": "-L",
    "valor": "-1",
    "pasos": [
      "\\frac{-x^4}{x^4-7x^3+7x^2+9}=\\frac{-1}{1-7/x+7/x^2+9/x^4}\\xrightarrow{x\\to\\infty}-1"
    ],
    "nota": ""
  },
  "22b": {
    "respuesta": "-L",
    "valor": "-1",
    "pasos": [
      "\\frac{-x^4}{x^4-7x^3+7x^2+9}=\\frac{-1}{1-7/x+7/x^2+9/x^4}\\xrightarrow{x\\to-\\infty}-1"
    ],
    "nota": ""
  },
  "23": {
    "respuesta": "L",
    "valor": "2",
    "pasos": [
      "\\sqrt{\\frac{8x^2-3}{2x^2+x}}=\\sqrt{\\frac{8-3/x^2}{2+1/x}}\\xrightarrow{x\\to\\infty}2"
    ],
    "nota": ""
  },
  "24": {
    "respuesta": "L",
    "valor": "\\frac{1}{2}",
    "pasos": [
      "\\left(\\frac{x^2+x-1}{8x^2-3}\\right)^{1/3}=\\sqrt[3]{\\frac{1+1/x-1/x^2}{8-3/x^2}}\\xrightarrow{x\\to-\\infty}\\frac{1}{2}"
    ],
    "nota": ""
  },
  "25": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\left(\\frac{1-x^3}{x^2+7x}\\right)^5=\\left(\\frac{1/x^2-x}{1+7/x}\\right)^5\\xrightarrow{x\\to-\\infty}+\\infty"
    ],
    "nota": "Al ir x a −∞, −x va a +∞."
  },
  "26": {
    "respuesta": "0+",
    "valor": "0^+",
    "pasos": [
      "\\sqrt{\\frac{x^2-5x}{x^3+x-2}}=\\sqrt{\\frac{1/x-5/x^2}{1+1/x^2-2/x^3}}\\xrightarrow{x\\to\\infty}0^+"
    ],
    "nota": ""
  },
  "27": {
    "respuesta": "0+",
    "valor": "0^+",
    "pasos": [
      "\\frac{2\\sqrt{x}+x^{-1}}{3x-7}=\\frac{2/\\sqrt{x}+1/x^2}{3-7/x}\\xrightarrow{x\\to\\infty}0^+"
    ],
    "nota": ""
  },
  "28": {
    "respuesta": "-L",
    "valor": "-1",
    "pasos": [
      "\\frac{2+\\sqrt{x}}{2-\\sqrt{x}}=\\frac{2/\\sqrt{x}+1}{2/\\sqrt{x}-1}\\xrightarrow{x\\to\\infty}-1"
    ],
    "nota": ""
  },
  "29": {
    "respuesta": "L",
    "valor": "1",
    "pasos": [
      "\\frac{\\sqrt[3]{x}-\\sqrt[5]{x}}{\\sqrt[3]{x}+\\sqrt[5]{x}}=\\frac{1-1/x^{2/15}}{1+1/x^{2/15}}\\xrightarrow{x\\to-\\infty}1"
    ],
    "nota": "Raíces impares reales; x^(2/15) crece a +∞."
  },
  "30": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\frac{x^{-1}+x^{-4}}{x^{-2}-x^{-3}}=\\frac{x+1/x^2}{1-1/x}\\xrightarrow{x\\to\\infty}+\\infty"
    ],
    "nota": ""
  },
  "31": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\frac{2x^{5/3}-x^{1/3}+7}{x^{8/5}+3x+\\sqrt{x}}=x^{1/15}\\frac{2-x^{-4/3}+7x^{-5/3}}{1+3x^{-3/5}+x^{-11/10}}\\xrightarrow{x\\to\\infty}+\\infty"
    ],
    "nota": "El cociente tiende a 2 y x^(1/15) a +∞."
  },
  "32": {
    "respuesta": "-L",
    "valor": "-\\frac{5}{2}",
    "pasos": [
      "\\frac{\\sqrt[3]{x}-5x+3}{2x+x^{2/3}-4}=\\frac{x^{-2/3}-5+3/x}{2+x^{-1/3}-4/x}\\xrightarrow{x\\to-\\infty}-\\frac{5}{2}"
    ],
    "nota": ""
  },
  "33": {
    "respuesta": "L",
    "valor": "1",
    "pasos": [
      "\\frac{\\sqrt{x^2+1}}{x+1}=\\frac{\\sqrt{1+1/x^2}}{1+1/x}\\xrightarrow{x\\to\\infty}1"
    ],
    "nota": "Para x>0, √(x²)=x."
  },
  "34": {
    "respuesta": "-L",
    "valor": "-1",
    "pasos": [
      "\\frac{\\sqrt{x^2+1}}{x+1}=\\frac{-\\sqrt{1+1/x^2}}{1+1/x}\\xrightarrow{x\\to-\\infty}-1"
    ],
    "nota": "Para x<0, √(x²)=−x."
  },
  "35": {
    "respuesta": "L",
    "valor": "\\frac{1}{2}",
    "pasos": [
      "\\frac{x-3}{\\sqrt{4x^2+25}}=\\frac{1-3/x}{\\sqrt{4+25/x^2}}\\xrightarrow{x\\to\\infty}\\frac{1}{2}"
    ],
    "nota": ""
  },
  "36": {
    "respuesta": "L",
    "valor": "3",
    "pasos": [
      "\\frac{4-3x^3}{\\sqrt{x^6+9}}=\\frac{3-4/x^3}{\\sqrt{1+9/x^6}}\\xrightarrow{x\\to-\\infty}3"
    ],
    "nota": "Para x<0, √(x⁶)=−x³."
  },
  "37": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\frac{1}{3x}\\xrightarrow{x\\to0^+}\\frac{1}{3\\cdot0^+}=+\\infty"
    ],
    "nota": ""
  },
  "38": {
    "respuesta": "-infinito",
    "valor": "-\\infty",
    "pasos": [
      "\\frac{5}{2x}\\xrightarrow{x\\to0^-}\\frac{5}{2\\cdot0^-}=-\\infty"
    ],
    "nota": ""
  },
  "39": {
    "respuesta": "-infinito",
    "valor": "-\\infty",
    "pasos": [
      "\\frac{3}{x-2}\\xrightarrow{x\\to2^-}\\frac{3}{0^-}=-\\infty"
    ],
    "nota": ""
  },
  "40": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\frac{1}{x-3}\\xrightarrow{x\\to3^+}\\frac{1}{0^+}=+\\infty"
    ],
    "nota": ""
  },
  "41": {
    "respuesta": "-infinito",
    "valor": "-\\infty",
    "pasos": [
      "\\frac{2x}{x+8}\\xrightarrow{x\\to-8^+}\\frac{-16}{0^+}=-\\infty"
    ],
    "nota": ""
  },
  "42": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\frac{3x}{2x+10}=\\frac{3x}{2(x+5)}\\xrightarrow{x\\to-5^-}\\frac{-15}{2\\cdot0^-}=+\\infty"
    ],
    "nota": ""
  },
  "43": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\frac{4}{(x-7)^2}\\xrightarrow{x\\to7}\\frac{4}{0^+}=+\\infty"
    ],
    "nota": ""
  },
  "44": {
    "respuesta": "-infinito",
    "valor": "-\\infty",
    "pasos": [
      "\\frac{-1}{x^2(x+1)}\\xrightarrow{x\\to0}\\frac{-1}{0^+\\cdot1}=\\frac{-1}{0^+}=-\\infty"
    ],
    "nota": ""
  },
  "45a": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\frac{2}{3x^{1/3}}\\xrightarrow{x\\to0^+}\\frac{2}{3\\cdot0^+}=+\\infty"
    ],
    "nota": "Una raíz impar conserva el signo."
  },
  "45b": {
    "respuesta": "-infinito",
    "valor": "-\\infty",
    "pasos": [
      "\\frac{2}{3x^{1/3}}\\xrightarrow{x\\to0^-}\\frac{2}{3\\cdot0^-}=-\\infty"
    ],
    "nota": "Una raíz impar conserva el signo."
  },
  "46a": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\frac{2}{x^{1/5}}\\xrightarrow{x\\to0^+}\\frac{2}{0^+}=+\\infty"
    ],
    "nota": "Una raíz impar conserva el signo."
  },
  "46b": {
    "respuesta": "-infinito",
    "valor": "-\\infty",
    "pasos": [
      "\\frac{2}{x^{1/5}}\\xrightarrow{x\\to0^-}\\frac{2}{0^-}=-\\infty"
    ],
    "nota": "Una raíz impar conserva el signo."
  },
  "47": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\frac{4}{x^{2/5}}\\xrightarrow{x\\to0}\\frac{4}{0^+}=+\\infty"
    ],
    "nota": "La potencia es positiva a ambos lados de 0."
  },
  "48": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\frac{1}{x^{2/3}}\\xrightarrow{x\\to0}\\frac{1}{0^+}=+\\infty"
    ],
    "nota": "La potencia es positiva a ambos lados de 0."
  },
  "49": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\tan x=\\frac{\\sin x}{\\cos x}\\xrightarrow{x\\to(\\pi/2)^-}\\frac{1}{0^+}=+\\infty"
    ],
    "nota": ""
  },
  "50": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\sec x=\\frac{1}{\\cos x}\\xrightarrow{x\\to(-\\pi/2)^+}\\frac{1}{0^+}=+\\infty"
    ],
    "nota": ""
  },
  "51": {
    "respuesta": "NE",
    "valor": "\\mathrm{NE}",
    "pasos": [
      "f(\\theta)=(1+\\csc\\theta)=1+\\frac{1}{\\sin\\theta}",
      "\\lim_{\\theta\\to 0^-}f(\\theta)=-\\infty,\\qquad\\lim_{\\theta\\to 0^+}f(\\theta)=+\\infty\\;\\Rightarrow\\;\\mathrm{NE}"
    ],
    "nota": "Los límites laterales son distintos.",
    "laterales": [
      "-\\infty",
      "+\\infty"
    ]
  },
  "52": {
    "respuesta": "NE",
    "valor": "\\mathrm{NE}",
    "pasos": [
      "f(\\theta)=(2-\\cot\\theta)=2-\\frac{\\cos\\theta}{\\sin\\theta}",
      "\\lim_{\\theta\\to 0^-}f(\\theta)=+\\infty,\\qquad\\lim_{\\theta\\to 0^+}f(\\theta)=-\\infty\\;\\Rightarrow\\;\\mathrm{NE}"
    ],
    "nota": "Los límites laterales son distintos.",
    "laterales": [
      "+\\infty",
      "-\\infty"
    ]
  },
  "53a": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\frac{1}{x^2-4}=\\frac{1}{(x-2)(x+2)}\\xrightarrow{x\\to2^+}\\frac{1}{0^+\\cdot4}=+\\infty"
    ],
    "nota": ""
  },
  "53b": {
    "respuesta": "-infinito",
    "valor": "-\\infty",
    "pasos": [
      "\\frac{1}{x^2-4}=\\frac{1}{(x-2)(x+2)}\\xrightarrow{x\\to2^-}\\frac{1}{0^-\\cdot4}=-\\infty"
    ],
    "nota": ""
  },
  "53c": {
    "respuesta": "-infinito",
    "valor": "-\\infty",
    "pasos": [
      "\\frac{1}{x^2-4}=\\frac{1}{(x-2)(x+2)}\\xrightarrow{x\\to-2^+}\\frac{1}{(-4)\\cdot0^+}=-\\infty"
    ],
    "nota": ""
  },
  "53d": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\frac{1}{x^2-4}=\\frac{1}{(x-2)(x+2)}\\xrightarrow{x\\to-2^-}\\frac{1}{(-4)\\cdot0^-}=+\\infty"
    ],
    "nota": ""
  },
  "54a": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\frac{x}{x^2-1}=\\frac{x}{(x-1)(x+1)}\\xrightarrow{x\\to1^+}\\frac{1}{0^+\\cdot2}=+\\infty"
    ],
    "nota": ""
  },
  "54b": {
    "respuesta": "-infinito",
    "valor": "-\\infty",
    "pasos": [
      "\\frac{x}{x^2-1}=\\frac{x}{(x-1)(x+1)}\\xrightarrow{x\\to1^-}\\frac{1}{0^-\\cdot2}=-\\infty"
    ],
    "nota": ""
  },
  "54c": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\frac{x}{x^2-1}=\\frac{x}{(x-1)(x+1)}\\xrightarrow{x\\to-1^+}\\frac{-1}{(-2)\\cdot0^+}=+\\infty"
    ],
    "nota": ""
  },
  "54d": {
    "respuesta": "-infinito",
    "valor": "-\\infty",
    "pasos": [
      "\\frac{x}{x^2-1}=\\frac{x}{(x-1)(x+1)}\\xrightarrow{x\\to-1^-}\\frac{-1}{(-2)\\cdot0^-}=-\\infty"
    ],
    "nota": ""
  },
  "55a": {
    "respuesta": "-infinito",
    "valor": "-\\infty",
    "pasos": [
      "\\left(\\frac{x^2}{2}-\\frac{1}{x}\\right)\\xrightarrow{x\\to0^+}0-\\frac{1}{0^+}=-\\infty"
    ],
    "nota": ""
  },
  "55b": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\left(\\frac{x^2}{2}-\\frac{1}{x}\\right)\\xrightarrow{x\\to0^-}0-\\frac{1}{0^-}=+\\infty"
    ],
    "nota": ""
  },
  "55c": {
    "respuesta": "0",
    "valor": "0",
    "pasos": [
      "\\left(\\frac{x^2}{2}-\\frac{1}{x}\\right)=\\frac{x^3-2}{2x}\\xrightarrow{x\\to\\sqrt[3]{2}}\\frac{2-2}{2\\sqrt[3]{2}}=0"
    ],
    "nota": "El numerador cambia de signo al cruzar ∛2."
  },
  "55d": {
    "respuesta": "L",
    "valor": "\\frac{3}{2}",
    "pasos": [
      "\\left(\\frac{x^2}{2}-\\frac{1}{x}\\right)\\xrightarrow{x\\to-1}\\frac{1}{2}+1=\\frac{3}{2}"
    ],
    "nota": ""
  },
  "56a": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\frac{x^2-1}{2x+4}=\\frac{x^2-1}{2(x+2)}\\xrightarrow{x\\to-2^+}\\frac{3}{2\\cdot0^+}=+\\infty"
    ],
    "nota": ""
  },
  "56b": {
    "respuesta": "-infinito",
    "valor": "-\\infty",
    "pasos": [
      "\\frac{x^2-1}{2x+4}=\\frac{x^2-1}{2(x+2)}\\xrightarrow{x\\to-2^-}\\frac{3}{2\\cdot0^-}=-\\infty"
    ],
    "nota": ""
  },
  "56c": {
    "respuesta": "0+",
    "valor": "0^+",
    "pasos": [
      "\\frac{x^2-1}{2x+4}=\\frac{(x-1)(x+1)}{2(x+2)}\\xrightarrow{x\\to1^+}\\frac{0^+\\cdot2}{6}=0^+"
    ],
    "nota": ""
  },
  "56d": {
    "respuesta": "-L",
    "valor": "-\\frac{1}{4}",
    "pasos": [
      "\\frac{x^2-1}{2x+4}\\xrightarrow{x\\to0^-}\\frac{-1}{4}=-\\frac{1}{4}"
    ],
    "nota": ""
  },
  "57a": {
    "respuesta": "-infinito",
    "valor": "-\\infty",
    "pasos": [
      "\\frac{x^2-3x+2}{x^3-2x^2}=\\frac{(x-1)(x-2)}{x^2(x-2)}",
      "=\\frac{x-1}{x^2}\\xrightarrow{x\\to0^+}\\frac{-1}{0^+}=-\\infty"
    ],
    "nota": ""
  },
  "57b": {
    "respuesta": "L",
    "valor": "\\frac{1}{4}",
    "pasos": [
      "\\frac{x^2-3x+2}{x^3-2x^2}=\\frac{(x-1)(x-2)}{x^2(x-2)}",
      "=\\frac{x-1}{x^2}\\xrightarrow{x\\to2^+}\\frac{2-1}{2^2}=\\frac{1}{4}"
    ],
    "nota": ""
  },
  "57c": {
    "respuesta": "L",
    "valor": "\\frac{1}{4}",
    "pasos": [
      "\\frac{x^2-3x+2}{x^3-2x^2}=\\frac{(x-1)(x-2)}{x^2(x-2)}",
      "=\\frac{x-1}{x^2}\\xrightarrow{x\\to2^-}\\frac{2-1}{2^2}=\\frac{1}{4}"
    ],
    "nota": ""
  },
  "57d": {
    "respuesta": "L",
    "valor": "\\frac{1}{4}",
    "pasos": [
      "\\frac{x^2-3x+2}{x^3-2x^2}=\\frac{(x-1)(x-2)}{x^2(x-2)}",
      "=\\frac{x-1}{x^2}\\xrightarrow{x\\to2}\\frac{2-1}{2^2}=\\frac{1}{4}"
    ],
    "nota": ""
  },
  "57e": {
    "respuesta": "-infinito",
    "valor": "-\\infty",
    "pasos": [
      "\\frac{x^2-3x+2}{x^3-2x^2}=\\frac{(x-1)(x-2)}{x^2(x-2)}",
      "=\\frac{x-1}{x^2}\\xrightarrow{x\\to0}\\frac{-1}{0^+}=-\\infty"
    ],
    "nota": ""
  },
  "58a": {
    "respuesta": "L",
    "valor": "\\frac{1}{8}",
    "pasos": [
      "\\frac{x^2-3x+2}{x^3-4x}=\\frac{(x-1)(x-2)}{x(x-2)(x+2)}",
      "=\\frac{x-1}{x(x+2)}\\xrightarrow{x\\to2^+}\\frac{1}{2\\cdot4}=\\frac{1}{8}"
    ],
    "nota": ""
  },
  "58b": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\frac{x^2-3x+2}{x^3-4x}=\\frac{(x-1)(x-2)}{x(x-2)(x+2)}",
      "=\\frac{x-1}{x(x+2)}\\xrightarrow{x\\to-2^+}\\frac{-3}{(-2)\\cdot0^+}=+\\infty"
    ],
    "nota": ""
  },
  "58c": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\frac{x^2-3x+2}{x^3-4x}=\\frac{(x-1)(x-2)}{x(x-2)(x+2)}",
      "=\\frac{x-1}{x(x+2)}\\xrightarrow{x\\to0^-}\\frac{-1}{0^-\\cdot2}=+\\infty"
    ],
    "nota": ""
  },
  "58d": {
    "respuesta": "0+",
    "valor": "0^+",
    "pasos": [
      "\\frac{x^2-3x+2}{x^3-4x}=\\frac{(x-1)(x-2)}{x(x-2)(x+2)}",
      "=\\frac{x-1}{x(x+2)}\\xrightarrow{x\\to1^+}\\frac{0^+}{1\\cdot3}=0^+"
    ],
    "nota": ""
  },
  "58e": {
    "respuesta": "NE",
    "valor": "\\mathrm{NE}",
    "pasos": [
      "f(x)=\\frac{x^2-3x+2}{x^3-4x}=\\frac{x-1}{x(x+2)}",
      "\\lim_{x\\to 0^-}f(x)=+\\infty,\\qquad\\lim_{x\\to 0^+}f(x)=-\\infty\\;\\Rightarrow\\;\\mathrm{NE}"
    ],
    "nota": "Los límites laterales son distintos.",
    "laterales": [
      "+\\infty",
      "-\\infty"
    ]
  },
  "59a": {
    "respuesta": "-infinito",
    "valor": "-\\infty",
    "pasos": [
      "\\left(2-\\frac{3}{t^{1/3}}\\right)\\xrightarrow{t\\to0^+}2-\\frac{3}{0^+}=-\\infty"
    ],
    "nota": ""
  },
  "59b": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\left(2-\\frac{3}{t^{1/3}}\\right)\\xrightarrow{t\\to0^-}2-\\frac{3}{0^-}=+\\infty"
    ],
    "nota": ""
  },
  "60a": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\left(\\frac{1}{t^{3/5}}+7\\right)\\xrightarrow{t\\to0^+}\\frac{1}{0^+}+7=+\\infty"
    ],
    "nota": ""
  },
  "60b": {
    "respuesta": "NE",
    "valor": "\\mathrm{NE}",
    "pasos": [
      "f(t)=\\left(\\frac{1}{t^{3/5}}+7\\right)",
      "\\lim_{t\\to 0^-}f(t)=-\\infty,\\qquad\\lim_{t\\to 0^+}f(t)=+\\infty\\;\\Rightarrow\\;\\mathrm{NE}"
    ],
    "nota": "Los límites laterales son distintos.",
    "laterales": [
      "-\\infty",
      "+\\infty"
    ]
  },
  "61a": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\left(\\frac{1}{x^{2/3}}+\\frac{2}{(x-1)^{2/3}}\\right)\\xrightarrow{x\\to0^+}\\frac{1}{0^+}+\\frac{2}{1}=+\\infty"
    ],
    "nota": ""
  },
  "61b": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\left(\\frac{1}{x^{2/3}}+\\frac{2}{(x-1)^{2/3}}\\right)\\xrightarrow{x\\to0^-}\\frac{1}{0^+}+\\frac{2}{1}=+\\infty"
    ],
    "nota": ""
  },
  "61c": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\left(\\frac{1}{x^{2/3}}+\\frac{2}{(x-1)^{2/3}}\\right)\\xrightarrow{x\\to1^+}1+\\frac{2}{0^+}=+\\infty"
    ],
    "nota": ""
  },
  "61d": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\left(\\frac{1}{x^{2/3}}+\\frac{2}{(x-1)^{2/3}}\\right)\\xrightarrow{x\\to1^-}1+\\frac{2}{0^+}=+\\infty"
    ],
    "nota": ""
  },
  "62a": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\left(\\frac{1}{x^{1/3}}-\\frac{1}{(x-1)^{4/3}}\\right)\\xrightarrow{x\\to0^+}\\frac{1}{0^+}-1=+\\infty"
    ],
    "nota": ""
  },
  "62b": {
    "respuesta": "-infinito",
    "valor": "-\\infty",
    "pasos": [
      "\\left(\\frac{1}{x^{1/3}}-\\frac{1}{(x-1)^{4/3}}\\right)\\xrightarrow{x\\to0^-}\\frac{1}{0^-}-1=-\\infty"
    ],
    "nota": ""
  },
  "62c": {
    "respuesta": "-infinito",
    "valor": "-\\infty",
    "pasos": [
      "\\left(\\frac{1}{x^{1/3}}-\\frac{1}{(x-1)^{4/3}}\\right)\\xrightarrow{x\\to1^+}1-\\frac{1}{0^+}=-\\infty"
    ],
    "nota": ""
  },
  "62d": {
    "respuesta": "-infinito",
    "valor": "-\\infty",
    "pasos": [
      "\\left(\\frac{1}{x^{1/3}}-\\frac{1}{(x-1)^{4/3}}\\right)\\xrightarrow{x\\to1^-}1-\\frac{1}{0^+}=-\\infty"
    ],
    "nota": ""
  },
  "80": {
    "respuesta": "0+",
    "valor": "0^+",
    "pasos": [
      "(\\sqrt{x+9}-\\sqrt{x+4})=(\\sqrt{x+9}-\\sqrt{x+4})\\frac{\\sqrt{x+9}+\\sqrt{x+4}}{\\sqrt{x+9}+\\sqrt{x+4}}",
      "=\\frac{5}{\\sqrt{x+9}+\\sqrt{x+4}}\\xrightarrow{x\\to\\infty}0^+"
    ],
    "nota": ""
  },
  "81": {
    "respuesta": "0+",
    "valor": "0^+",
    "pasos": [
      "(\\sqrt{x^2+25}-\\sqrt{x^2-1})=(\\sqrt{x^2+25}-\\sqrt{x^2-1})\\frac{\\sqrt{x^2+25}+\\sqrt{x^2-1}}{\\sqrt{x^2+25}+\\sqrt{x^2-1}}",
      "=\\frac{26}{\\sqrt{x^2+25}+\\sqrt{x^2-1}}\\xrightarrow{x\\to\\infty}0^+"
    ],
    "nota": ""
  },
  "82": {
    "respuesta": "0+",
    "valor": "0^+",
    "pasos": [
      "(\\sqrt{x^2+3}+x)=\\frac{3}{\\sqrt{x^2+3}-x}\\xrightarrow{x\\to-\\infty}0^+"
    ],
    "nota": "Conjugado; el denominador es positivo y crece sin límite."
  },
  "83": {
    "respuesta": "-L",
    "valor": "-\\frac{3}{4}",
    "pasos": [
      "(2x+\\sqrt{4x^2+3x-2})=\\frac{3x-2}{\\sqrt{4x^2+3x-2}-2x}",
      "=\\frac{-3+2/x}{\\sqrt{4+3/x-2/x^2}+2}\\xrightarrow{x\\to-\\infty}-\\frac{3}{4}"
    ],
    "nota": "Conjugado y división entre −x (x<0)."
  },
  "84": {
    "respuesta": "-L",
    "valor": "-\\frac{1}{6}",
    "pasos": [
      "(\\sqrt{9x^2-x}-3x)=\\frac{-x}{\\sqrt{9x^2-x}+3x}",
      "=\\frac{-1}{\\sqrt{9-1/x}+3}\\xrightarrow{x\\to\\infty}-\\frac{1}{6}"
    ],
    "nota": "Conjugado y división entre x (x>0)."
  },
  "9": {
    "respuesta": "0",
    "valor": "0",
    "pasos": [
      "0\\le\\left|\\frac{\\sin(2x)}{x}\\right|\\le\\frac{1}{x}\\xrightarrow{x\\to\\infty}0"
    ],
    "nota": "Por encaje; el signo oscila."
  },
  "10": {
    "respuesta": "0",
    "valor": "0",
    "pasos": [
      "0\\le\\left|\\frac{\\cos\\theta}{3\\theta}\\right|\\le\\frac{1}{3|\\theta|}\\xrightarrow{\\theta\\to-\\infty}0"
    ],
    "nota": "Por encaje; el signo oscila."
  },
  "11": {
    "respuesta": "-L",
    "valor": "-1",
    "pasos": [
      "\\frac{2-t+\\sin t}{t+\\cos t}=\\frac{2/t-1+(\\sin t)/t}{1+(\\cos t)/t}\\xrightarrow{t\\to-\\infty}-1"
    ],
    "nota": ""
  },
  "12": {
    "respuesta": "L",
    "valor": "\\frac{1}{2}",
    "pasos": [
      "\\frac{r+\\sin r}{2r+7-5\\sin r}=\\frac{1+(\\sin r)/r}{2+7/r-5(\\sin r)/r}\\xrightarrow{r\\to\\infty}\\frac{1}{2}"
    ],
    "nota": ""
  },
  "17": {
    "respuesta": "L",
    "valor": "\\frac{2}{3}",
    "pasos": [
      "\\frac{x^{1/3}-1}{\\sqrt{x}-1}=\\frac{(x-1)/(x^{2/3}+x^{1/3}+1)}{(x-1)/(\\sqrt{x}+1)}",
      "=\\frac{\\sqrt{x}+1}{x^{2/3}+x^{1/3}+1}\\xrightarrow{x\\to1}\\frac{2}{3}"
    ],
    "nota": ""
  },
  "18": {
    "respuesta": "0",
    "valor": "0",
    "pasos": [
      "\\frac{x^{2/3}-16}{\\sqrt[4]{x}-8}\\xrightarrow{x\\to64}\\frac{16-16}{2\\sqrt2-8}=0"
    ],
    "nota": "El denominador no es cero; el numerador cambia de signo."
  },
  "19": {
    "respuesta": "L",
    "valor": "\\frac{2}{\\pi}",
    "pasos": [
      "\\frac{\\tan(2x)}{\\tan(\\pi x)}=\\frac{2}{\\pi}\\frac{\\sin(2x)}{2x}\\frac{\\pi x}{\\sin(\\pi x)}\\frac{\\cos(\\pi x)}{\\cos(2x)}\\xrightarrow{x\\to0}\\frac{2}{\\pi}"
    ],
    "nota": "Se usa sin(u)/u → 1 cuando u → 0."
  },
  "20": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\csc x=\\frac{1}{\\sin x}\\xrightarrow{x\\to\\pi^-}\\frac{1}{0^+}=+\\infty"
    ],
    "nota": ""
  },
  "21": {
    "respuesta": "L",
    "valor": "1",
    "pasos": [
      "\\sin\\left(\\frac{x}{2}+\\sin x\\right)\\xrightarrow{x\\to\\pi}\\sin(\\pi/2+0)=1"
    ],
    "nota": ""
  },
  "22": {
    "respuesta": "L",
    "valor": "1",
    "pasos": [
      "\\cos^2(x-\\tan x)\\xrightarrow{x\\to\\pi}\\cos^2(\\pi-0)=1"
    ],
    "nota": ""
  },
  "23t": {
    "respuesta": "L",
    "valor": "4",
    "pasos": [
      "\\frac{8x}{3\\sin x-x}=\\frac{8}{3\\,\\frac{\\sin x}{x}-1}\\xrightarrow{x\\to0}4"
    ],
    "nota": "Se usa sin(x)/x → 1."
  },
  "24t": {
    "respuesta": "0",
    "valor": "0",
    "pasos": [
      "\\frac{\\cos(2x)-1}{\\sin x}=\\frac{-2\\sin^2 x}{\\sin x}",
      "=-2\\sin x\\xrightarrow{x\\to0}0"
    ],
    "nota": "El signo cambia al cruzar 0."
  },
  "94": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\frac{1}{x}\\xrightarrow{x\\to0^+}\\frac{1}{0^+}=+\\infty"
    ],
    "nota": ""
  },
  "95": {
    "respuesta": "-infinito",
    "valor": "-\\infty",
    "pasos": [
      "\\frac{1}{x}\\xrightarrow{x\\to0^-}\\frac{1}{0^-}=-\\infty"
    ],
    "nota": ""
  },
  "96": {
    "respuesta": "-infinito",
    "valor": "-\\infty",
    "pasos": [
      "\\frac{1}{x-2}\\xrightarrow{x\\to2^-}\\frac{1}{0^-}=-\\infty"
    ],
    "nota": ""
  },
  "97": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\frac{1}{x-2}\\xrightarrow{x\\to2^+}\\frac{1}{0^+}=+\\infty"
    ],
    "nota": ""
  },
  "98": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\frac{1}{1-x^2}=\\frac{1}{(1-x)(1+x)}\\xrightarrow{x\\to1^-}\\frac{1}{0^+\\cdot2}=+\\infty"
    ],
    "nota": ""
  },
  "B01": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\frac{1}{x}\\xrightarrow{x\\to0^+}\\frac{1}{0^+}=+\\infty"
    ],
    "nota": ""
  },
  "B02": {
    "respuesta": "NE",
    "valor": "\\mathrm{NE}",
    "pasos": [
      "f(x)=\\frac{1}{x}",
      "\\lim_{x\\to 0^-}f(x)=-\\infty,\\qquad\\lim_{x\\to 0^+}f(x)=+\\infty\\;\\Rightarrow\\;\\mathrm{NE}"
    ],
    "nota": "Los límites laterales son distintos.",
    "laterales": [
      "-\\infty",
      "+\\infty"
    ]
  },
  "B03": {
    "respuesta": "NE",
    "valor": "\\mathrm{NE}",
    "pasos": [
      "f(x)=\\frac{1}{x-2}",
      "\\lim_{x\\to 2^-}f(x)=-\\infty,\\qquad\\lim_{x\\to 2^+}f(x)=+\\infty\\;\\Rightarrow\\;\\mathrm{NE}"
    ],
    "nota": "Los límites laterales son distintos.",
    "laterales": [
      "-\\infty",
      "+\\infty"
    ]
  },
  "B04": {
    "respuesta": "0+",
    "valor": "0^+",
    "pasos": [
      "\\sin x\\xrightarrow{x\\to0^+}0^+"
    ],
    "nota": "sin(x)>0 para x>0 próximo a 0."
  },
  "B05": {
    "respuesta": "L",
    "valor": "1",
    "pasos": [
      "\\cos x\\xrightarrow{x\\to0^+}\\cos0=1"
    ],
    "nota": ""
  },
  "B06": {
    "respuesta": "NE",
    "valor": "\\mathrm{NE}",
    "pasos": [
      "\\sin(2n\\pi)=0,\\qquad\\sin(2n\\pi+\\pi/2)=1\\quad(n\\to\\infty)"
    ],
    "nota": "Dos sucesiones que van a +∞ dan valores distintos."
  },
  "B07": {
    "respuesta": "NE",
    "valor": "\\mathrm{NE}",
    "pasos": [
      "\\tan(n\\pi)=0,\\qquad\\tan(n\\pi+\\pi/4)=1\\quad(n\\to\\infty)"
    ],
    "nota": "Dos sucesiones que van a +∞ dan valores distintos."
  },
  "B08": {
    "respuesta": "-L",
    "valor": "-\\frac{\\pi}{2}",
    "pasos": [
      "\\arctan x\\xrightarrow{x\\to-\\infty}-\\frac{\\pi}{2}"
    ],
    "nota": "Asíntota horizontal de arctan(x) hacia −∞."
  },
  "B09": {
    "respuesta": "0+",
    "valor": "0^+",
    "pasos": [
      "(x^2-3x)=x(x-3)\\xrightarrow{x\\to3^+}3\\cdot0^+=0^+"
    ],
    "nota": ""
  },
  "B10": {
    "respuesta": "0-",
    "valor": "0^-",
    "pasos": [
      "\\frac{-4}{x^3}\\xrightarrow{x\\to\\infty}0^-"
    ],
    "nota": "x³>0 y su magnitud crece sin límite."
  },
  "B11": {
    "respuesta": "0+",
    "valor": "0^+",
    "pasos": [
      "\\frac{-4}{x^3}\\xrightarrow{x\\to-\\infty}0^+"
    ],
    "nota": "x³<0 y su magnitud crece sin límite."
  },
  "B12": {
    "respuesta": "0+",
    "valor": "0^+",
    "pasos": [
      "\\frac{1}{x}\\xrightarrow{x\\to\\infty}0^+"
    ],
    "nota": "El denominador es positivo y crece sin límite."
  },
  "B13": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "e^x\\xrightarrow{x\\to\\infty}+\\infty"
    ],
    "nota": "La exponencial crece sin cota superior."
  },
  "B14": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\ln x\\xrightarrow{x\\to\\infty}+\\infty"
    ],
    "nota": "El logaritmo crece sin cota superior."
  },
  "B15": {
    "respuesta": "0+",
    "valor": "0^+",
    "pasos": [
      "e^x=\\frac{1}{e^{-x}}\\xrightarrow{x\\to-\\infty}0^+"
    ],
    "nota": ""
  },
  "B16": {
    "respuesta": "NE",
    "valor": "\\mathrm{NE}",
    "pasos": [
      "\\operatorname{Dom}(\\ln)=(0,\\infty)\\;\\Rightarrow\\;\\mathrm{NE}"
    ],
    "nota": "No hay valores del dominio real a la izquierda de 0."
  },
  "B17": {
    "respuesta": "0-",
    "valor": "0^-",
    "pasos": [
      "\\ln x\\xrightarrow{x\\to1^-}0^-"
    ],
    "nota": "ln(1)=0 y ln(x)<0 para 0<x<1."
  },
  "B18": {
    "respuesta": "0+",
    "valor": "0^+",
    "pasos": [
      "\\ln x\\xrightarrow{x\\to1^+}0^+"
    ],
    "nota": "ln(1)=0 y ln(x)>0 para x>1."
  },
  "A01": {
    "respuesta": "L",
    "valor": "\\frac{\\pi}{2}",
    "pasos": [
      "u=\\left(\\frac{1+x}{x^2}\\right)^{-x}=\\left(\\frac{x^2}{1+x}\\right)^x",
      "\\ln u=x\\ln\\left(\\frac{x}{1+1/x}\\right)\\to+\\infty\\;\\Rightarrow\\;u\\to+\\infty",
      "\\arctan u\\to\\frac{\\pi}{2}"
    ],
    "nota": ""
  },
  "A02": {
    "respuesta": "L",
    "valor": "1",
    "pasos": [
      "0<\\left(\\frac{x}{2x+7}\\right)^x<\\left(\\frac{1}{2}\\right)^x\\to0\\quad(x\\to\\infty)",
      "\\cos\\left(\\left(\\frac{x}{2x+7}\\right)^x\\right)\\to\\cos0=1"
    ],
    "nota": ""
  },
  "A03": {
    "respuesta": "L",
    "valor": "1",
    "pasos": [
      "\\cos(4^x-5^x)\\xrightarrow{x\\to-\\infty}\\cos(0^+-0^+)=\\cos0=1"
    ],
    "nota": ""
  },
  "A04": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\ln\\left(\\frac{1+\\ln(x^x)}{\\ln x}\\right)=\\ln\\left(x+\\frac{1}{\\ln x}\\right)\\xrightarrow{x\\to\\infty}+\\infty"
    ],
    "nota": "ln(x^x)=x ln(x)."
  },
  "A05": {
    "respuesta": "-infinito",
    "valor": "-\\infty",
    "pasos": [
      "\\cot(\\pi x)=\\frac{\\cos(\\pi x)}{\\sin(\\pi x)}\\xrightarrow{x\\to2^-}\\frac{1}{0^-}=-\\infty"
    ],
    "nota": ""
  },
  "A06": {
    "respuesta": "0-",
    "valor": "0^-",
    "pasos": [
      "u=\\frac{3x+2}{2x^2+1}=\\frac{3/x+2/x^2}{2+1/x^2}\\xrightarrow{x\\to-\\infty}0^-",
      "\\sin u\\to0^-"
    ],
    "nota": "El seno conserva el signo cerca de 0."
  },
  "A07": {
    "respuesta": "L",
    "valor": "1",
    "pasos": [
      "\\left|\\sqrt{x-\\sqrt{x}}-\\sqrt{x+\\sqrt{x}}\\right|=\\frac{2\\sqrt{x}}{\\sqrt{x-\\sqrt{x}}+\\sqrt{x+\\sqrt{x}}}",
      "=\\frac{2}{\\sqrt{1-1/\\sqrt{x}}+\\sqrt{1+1/\\sqrt{x}}}\\xrightarrow{x\\to\\infty}1"
    ],
    "nota": "El valor absoluto invierte la diferencia; se racionaliza."
  },
  "A08": {
    "respuesta": "-infinito",
    "valor": "-\\infty",
    "pasos": [
      "\\frac{1+e^{-x}}{x}\\xrightarrow{x\\to\\infty}0^+\\;\\Rightarrow\\;\\ln\\left(\\frac{1+e^{-x}}{x}\\right)\\to-\\infty"
    ],
    "nota": ""
  },
  "A09": {
    "respuesta": "NE",
    "valor": "\\mathrm{NE}",
    "pasos": [
      "f(x)=\\cot(2x)=\\frac{\\cos(2x)}{\\sin(2x)}",
      "\\lim_{x\\to \\pi/2^-}f(x)=-\\infty,\\qquad\\lim_{x\\to \\pi/2^+}f(x)=+\\infty\\;\\Rightarrow\\;\\mathrm{NE}"
    ],
    "nota": "Los límites laterales son distintos.",
    "laterales": [
      "-\\infty",
      "+\\infty"
    ]
  },
  "A10": {
    "respuesta": "-L",
    "valor": "-1",
    "pasos": [
      "\\sin\\left(\\frac{x^2-\\pi x}{2x}\\right)=\\sin\\left(\\frac{x-\\pi}{2}\\right)\\xrightarrow{x\\to0}-1"
    ],
    "nota": ""
  },
  "A11": {
    "respuesta": "L",
    "valor": "\\frac{\\pi}{2}",
    "pasos": [
      "(\\ln x)^{1-x}=e^{(1-x)\\ln(\\ln x)}\\xrightarrow{x\\to\\infty}0^+",
      "\\arccos\\left((\\ln x)^{1-x}\\right)\\to\\arccos0=\\frac{\\pi}{2}"
    ],
    "nota": "El exponente tiende a −∞."
  },
  "A12": {
    "respuesta": "-infinito",
    "valor": "-\\infty",
    "pasos": [
      "\\ln\\left((1-1/x)^{x^3}\\right)=x^3\\ln(1-1/x)=-x^2\\frac{\\ln(1-1/x)}{-1/x}",
      "\\frac{\\ln(1-1/x)}{-1/x}\\to1\\;\\Rightarrow\\;-x^2\\frac{\\ln(1-1/x)}{-1/x}\\to-\\infty"
    ],
    "nota": "Se usa ln(1+u)/u → 1 cuando u → 0."
  },
  "A13": {
    "respuesta": "-infinito",
    "valor": "-\\infty",
    "pasos": [
      "u=\\frac{\\pi-x}{x+2},\\qquad u-\\frac{\\pi}{2}=\\frac{-(2+\\pi)x}{2(x+2)}\\xrightarrow{x\\to0^-}0^+",
      "\\tan u=\\frac{\\sin u}{\\cos u}\\to\\frac{1}{0^-}=-\\infty"
    ],
    "nota": ""
  },
  "A14": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "x-\\sqrt[3]{x^2-5}=x\\left(1-x^{-1/3}\\sqrt[3]{1-5/x^2}\\right)\\xrightarrow{x\\to\\infty}+\\infty",
      "\\ln\\left(x-\\sqrt[3]{x^2-5}\\right)\\to+\\infty"
    ],
    "nota": ""
  },
  "A15": {
    "respuesta": "NE",
    "valor": "\\mathrm{NE}",
    "pasos": [
      "f(x)=\\arctan\\left(\\frac{1}{x}\\right)",
      "\\lim_{x\\to 0^-}f(x)=-\\frac{\\pi}{2},\\qquad\\lim_{x\\to 0^+}f(x)=\\frac{\\pi}{2}\\;\\Rightarrow\\;\\mathrm{NE}"
    ],
    "nota": "Los límites laterales son distintos.",
    "laterales": [
      "-\\frac{\\pi}{2}",
      "\\frac{\\pi}{2}"
    ]
  },
  "A16": {
    "respuesta": "+infinito",
    "valor": "+\\infty",
    "pasos": [
      "\\frac{x}{x-1}\\xrightarrow{x\\to1^+}\\frac{1}{0^+}=+\\infty\\;\\Rightarrow\\;\\ln\\left(\\frac{x}{x-1}\\right)\\to+\\infty"
    ],
    "nota": ""
  },
  "A17": {
    "respuesta": "0-",
    "valor": "0^-",
    "pasos": [
      "\\operatorname{arccsc}\\left(\\frac{\\sqrt{x^2-3x}}{x}\\right)=\\arcsin\\left(\\frac{x}{\\sqrt{x^2-3x}}\\right)",
      "\\frac{x}{\\sqrt{x^2-3x}}=-\\sqrt{\\frac{x}{x-3}}\\xrightarrow{x\\to0^-}0^-\\;\\Rightarrow\\;\\arcsin\\left(\\frac{x}{\\sqrt{x^2-3x}}\\right)\\to0^-"
    ],
    "nota": ""
  },
  "A18": {
    "respuesta": "NE",
    "valor": "\\mathrm{NE}",
    "pasos": [
      "f(x)=\\tan\\left(\\frac{\\pi}{x}\\right)",
      "\\lim_{x\\to 2^-}f(x)=-\\infty,\\qquad\\lim_{x\\to 2^+}f(x)=+\\infty\\;\\Rightarrow\\;\\mathrm{NE}"
    ],
    "nota": "π/x se acerca a π/2 por el lado contrario al de x respecto a 2.",
    "laterales": [
      "-\\infty",
      "+\\infty"
    ]
  }
};
