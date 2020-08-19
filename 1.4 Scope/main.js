// 1) Crea una función llamada multiplicarDosNumeros que no reciba ningún argumento y que al ejecutarse devuelva el resultado de multiplicar dos números declarados globalmente (num1 y num2).

var num1 = 5;
var num2 = 7;

function multiplicarDosNumeros() {
  return num1 * num2;
};

console.log(multiplicarDosNumeros());

// 2) Crea una función llamada dividirDosNumeros que no reciba ningún argumento y que al ejecutarse devuelva el resultado de dividir un número declarado globalmente (num1) entre un número declarado localmente (num2) dentro de la misma función.

function dividirDosNumeros() {
  var num3 = 2;
  return num1 / num3;
};

console.log(dividirDosNumeros());

// 3) Crea una función llamada sumarTresNumeros, que reciba como argumento un numero (num1), y que al ejecutarse devuelva el resultado de sumar tres numeros: num1, num2 declarado globalmente, y num3 declarado localmente dentro de la funcion.

function sumarTresNumeros(num1) {
  var num3 = 1;
  return num1 + num2 + num3;
};

console.log(sumarTresNumeros(8));