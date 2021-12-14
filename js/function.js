let texto_resultado = document.getElementById("texto_resultado");
let casillas = document.getElementsByTagName("td");
for (let i = 0; i < casillas.length - 1; i++) {
  casillas[i].addEventListener("click", mostraralerta, false);
}

let resultado = 0;
let operador = 1;
let operacion = "+";
let operando1 = "";
let operando2 = "";
let dato;
let operacion_anterior = "";

function mostraralerta() {
  dato = this.innerHTML;
  console.log(dato);
  switch (dato) {
    case "+":
      operacion_concatenada();
      operacion = "+";
      operador = 2;
      break;
    case "-":
      operacion_concatenada();
      operacion = "-";
      operador = 2;
      break;
    case "*":
      operacion_concatenada();
      operacion = "*";
      operador = 2;
      break;
    case "/":
      operacion_concatenada();
      operacion = "/";
      operador = 2;
      break;
    case "CE":
      if (operador == 1) {
        operando1 = "";
      } else {
        operando2 = "";
      }
      break;
    case "C":
      resultado = 0;
      operador = 1;
      operacion = "+";
      operando1 = "";
      operando2 = "";
      dato;
      texto_resultado.innerHTML = "0";
      break;
    case "=":
      resultado = calcular();
      texto_resultado.innerHTML = resultado;
      operando1 = "";
      operando2 = "";
      operador = 1;
      break;
    default:
      if (resultado != 0) {
        operando1 = resultado.toString();
      } else {
        if (operador == 1) {
          operando1 += dato;
        }
      }
      if (operador == 2) {
        operando2 += dato;
      }
      break;
  }
}

function calcular() {
  let resultado;
  operando1 = parseFloat(operando1);
  operando2 = parseFloat(operando2);
  switch (operacion) {
    case "+":
      resultado = operando1 + operando2;
      break;
    case "-":
      resultado = operando1 - operando2;
      break;
    case "*":
      resultado = operando1 * operando2;
      break;
    case "/":
      resultado = operando1 / operando2;
      break;
  }
  return resultado.toFixed(2);
}

function operacion_concatenada() {
  if (operando2 != "") {
    operando1 = calcular().toString();
    texto_resultado.innerHTML = operando1;
    operando2 = "";
  }
}
