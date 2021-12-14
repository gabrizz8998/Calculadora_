let texto_resultado=document.getElementById("texto_resultado");
let casillas = document.getElementsByTagName("td");
for (let i = 0; i < casillas.length; i++) {
  casillas[i].addEventListener("click", mostraralerta, false);
}
let resultado = 0;
let operador = 1;
let operacion = "+";
let operando1 = "";
let operando2 = "";
let dato;
function mostraralerta() {
  dato = this.innerHTML;
  
  switch (dato) {
    case "+":
      operacion = "+";
      operador = 2;
      break;
    case "-":
      operacion = "-";
      operador = 2;
      break;
    case "*":
      operacion = "*";
      operador = 2;
      break;
    case "/":
      operacion = "/";
      operador = 2;
      break;
    case "CE":
        resultado = 0;
        operador = 1;
        operacion = "+";
        operando1 = "";
        operando2 = "";
        dato;
        texto_resultado.innerHTML="Resultado";
        break;
    case "C":
        if(operador == 1){
            operando1="";
        }
        else{
            operando2="";
        }
        break;
    case "=":
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
      resultado=resultado.toFixed(2);
      texto_resultado.innerHTML="Resultado = "+resultado;
      operando1 ="";
      operando2 ="";
      operador = 1;
      break;
    default:
        if(resultado!=0){
            operando1=resultado.toString();
          }else{
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


function calcular(){
    
}