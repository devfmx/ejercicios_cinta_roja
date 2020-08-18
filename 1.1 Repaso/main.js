/*
---------------------------------------------
1.- Hacer una función que convierta de grados
    centígrados a Farenheit
---------------------------------------------
*/

function farenheitCentigrados(fahrenheit) {
  return fahrenheit + " °F = "
      + Math.round((fahrenheit - 32) * (5 / 9) * 100) / 100
      + " °C";
};

//console.log(farenheitCentigrados(100));

/*
---------------------------------------------
2.- Hacer una función que muestre la tabla de
  multiplicar de un número
---------------------------------------------
*/

function tablaDeMultiplicar(numero) {

  for (var i = 1; i <= 10; i++) {
      console.log(numero + " * " + i + " = " + (numero * i));
  }

  return null;
};

//tablaDeMultiplicar(5);

/*
---------------------------------------------
3.- Función que pida N parametros y devuelva
  cuantos parámetros se le pasaron
---------------------------------------------
*/

function cuantosParametros() {
  /* 
    El objeto "arguments" solo puede ser usado con las funciones
    clásicas; no puede ser utilizado dentro de arrow functions
  */
  return "Esta funcion recibio " + arguments.length + " argumentos";
};

// console.log( cuantosParametros( 1,
//                                 "123",
//                                 true,
//                                 null,
//                                 {verdadero: true, falso: false},
//                                 undefined,
//                                 [10,20]
//                                )
//             );

/*
---------------------------------------------
4.- Leer un arreglo de enteros y obtener
    su promedio
---------------------------------------------
*/

var enteros = [1, 5, 10, 12, 12, 13, 22, 25, 30, 32];

function obtenerPromedio(enteros) {
  var sumaTotal = 0;

  for (i = 0; i < enteros.length; i++) {
      sumaTotal += enteros[i];
  }

  return sumaTotal / enteros.length;
};

//console.log( obtenerPromedio(enteros) );

/*
---------------------------------------------
5.- Leer el nombre y sueldo de 8 empleados y
  mostrar el nombre y sueldo del empleado
  que más gana
---------------------------------------------
*/

function quienGanaMas() {
  var nombreEmpleado = "";
  var sueldoEmpleado = 0;

  if (arguments.length % 2 != 0) {
      return "Debes introducir nombre y salario de cada empleado";
  } else
      for (var i = 0; i < arguments.length; i += 2) {
          if (sueldoEmpleado < arguments[i + 1]) {
              nombreEmpleado = arguments[i];
              sueldoEmpleado = arguments[i + 1];
          }
      }

  return "El emplado mejor pagado es: \n"
      + nombreEmpleado + ", gana $"
      + sueldoEmpleado;
};

// console.log( quienGanaMas("Juan Rulfo", 12000,
//                           "Doris Lessing", 15000,
//                           "Emilio Pacheco", 8000
//                          )
//            );

/*
---------------------------------------------
6.- Guardar en un array los 20 primeros
  números pares
---------------------------------------------
*/

function numerosPares() {
  var veinteNumerosPares = [];
  var indice = 0;

  for (var i = 0; indice < 20; i++) {
      if (i % 2 == 0) {
          console.log("Par " + (indice + 1) + " : " + i);
          veinteNumerosPares[indice] = i;
          indice++;
      }
  }

  return null;
};

//console.log(numerosPares());

/*
---------------------------------------------
7.- Hacer una funcion que calcule el tiempo
  necesario para que un automóvil que se
  mueve con una velocidad de 73000 m/h
  recorra una distancia de 120 km.
            (TIEMPO = d/v)
---------------------------------------------
*/

var vocho = {
  velocidad: 73000
}

function calculaTiempo(automovil, distancia) {

  var tiempo = Math.round(
      (distancia / (automovil.velocidad / 1000))
      * 100
  ) / 100;

  return "Te tomaría " + tiempo
      + " horas recorrer "
      + distancia
      + "km a esta velocidad."
};

//console.log(calculaTiempo(vocho, 120));

/*
---------------------------------------------
8.- Crear una funcion que reciba como
  parametro una oración y defina si
  es palindromo
---------------------------------------------
*/

function esPalindromo(oracion) {
  var oracionSinEspacios = [];
  var indice = 0;

  for (var i = 0; i < oracion.length; i++) {
      if (oracion[i] == " ") {
          //console.log("Espacio encontrado en posicion: " + i);
      } else {
          oracionSinEspacios[indice] = oracion[i].toUpperCase();
          indice++;
      }
  }

  //Este será el índice que correrá desde la última letra hacia la primera
  var indiceAlReves = (oracionSinEspacios.length - 1);

  for (var i = 0; i < oracionSinEspacios.length; i++) {
      if (oracionSinEspacios[i] != oracionSinEspacios[indiceAlReves]) {
          //console.log(oracionSinEspacios[i]);
          //console.log(oracionSinEspacios[indiceAlReves]);
          return "La oracion no es palindrome";
      } else indiceAlReves--;
  }

  return "La oracion es palindrome";
};

//console.log( esPalindromo("Anita lava la tina") );

/*
---------------------------------------------
9.- Mostrar los primeros 10 dígitos de la
  serie Fibbonacci
---------------------------------------------
*/

function fibonacci() {
  var a = 1;
  var b = 0;
  var temp = 0;

  for (var i = 1; i <= 10; i++) {
      temp = a;
      a = a + b;
      b = temp;
      console.log("Número " + i + " de Fibonacci : " + b);
  }

  return null;
};

//console.log( fibonacci() );

/*
---------------------------------------------
10.- Escribe una función que halle 
   el máximo entre dos números 
---------------------------------------------
*/

function maximoDeDos(num1, num2) {
  if (num1 > num2){
      return num1;
  } else if (num1 < num2) {
      return num2;
  } else return num1;
};

//console.log( maximo(10, 15) );

/*
---------------------------------------------
11.- Escribe una función que halle 
   el máximo entre tres números
---------------------------------------------
*/

function maximoDeTres(num1, num2, num3) {
  if (num1 > num2 && num1 > num3){
      return num1;
  } else if (num2 > num1 && num2 > num3){
      return num2;
  } else if (num3 > num1 && num3 > num2){
      return num3;
  } else if (num1 === num2 && num2 === num3){
      return num1;
  } else return 'Algo extraño ocurrió...';
};

//console.log( maximoDeTres(1,2,3) );

/*
---------------------------------------------
12.- Escribe una función  que cheque si un 
   número es negativo, positivo o cero
---------------------------------------------
*/

function queTipoEs(numero) {
  if (numero === 0){
      return 'El número introducido es cero';
  } else if (numero > 0){
      return 'El número introducido es positivo';
  } else if (numero < 0){
      return 'El número introducido es negativo';
  } else return 'Algo extraño ocurrió...';
};

//console.log( queTipoEs(-2) );

/*
---------------------------------------------
13.- Escribe una función para verificar si 
   un número es divisible entre 5 y 11 
   o no lo es
---------------------------------------------
*/

function esDivisible(numero) {
  if (numero % 5 == 0 && numero % 11 == 0){
      return 'El número es divisible entre 5 y 11'
  } else {
      return 'El número no es divisible entre 5 y 11'
  }
};

//console.log( esDivisible(55) );

/*
---------------------------------------------
14.- Escriba una función para ingresar 
   cualquier letra del alfabeto y verifique 
   si es vocal o consonante
---------------------------------------------
*/

function examinarLetra(letra) {
  if (letra == 'a' || letra == 'A' || letra == 'e' || letra == 'E' || letra == 'i' || letra == 'I' || letra == 'o' || letra == 'O' || letra == 'u' || letra == 'U') {
      return "Es una vocal";
  } else if ((letra >= 'a' && letra <= 'z') || (letra >= 'A' && letra <= 'Z')) {
      return "Es una consonante";
  } else {
      return "Debes introducir una letra del alfabeto";
  }
};

//console.log( examinarLetra('b') );

/*
---------------------------------------------
15.- Escribe una función que imprima todos
   los números naturales de 1 hasta n
---------------------------------------------
*/

function imprimirNumerosNaturales(n) {
  for (var i=1; i<=n; i++){
      console.log(i);
  }
};

//imprimirNumerosNaturales(50);

/*
---------------------------------------------
16.- Escribe una función que imprima todos
   los números naturales en reversa, 
   desde n hasta 1.
---------------------------------------------
*/

function imprimirNumerosNaturalesReves(n) {
  for(var i=n; i>=1; i--){
      console.log(i);
  }
};

//imprimirNumerosNaturalesReves(20);

/*
---------------------------------------------
17.- Escribe una función que imprima todos
   los números pares entre 1 y 100
---------------------------------------------
*/

function imprimirNumerosPares() {
  for(var i=1; i<=100; i++){
      if(i%2 == 0){
          console.log(i);
      }
  }
};

//imprimirNumerosPares();

/*
---------------------------------------------
18.- Escribe una función que imprima todos
   los números nones entre 1 y 100
---------------------------------------------
*/

function imprimirNumerosNones() {
  for (var i = 1; i <= 100; i++) {
      if (i % 2 != 0) {
          console.log(i);
      }
  }
};

//imprimirNumerosNones();

/*
---------------------------------------------
19.- Escribe una función que halle la suma
   de todos los numeros naturales entre 
   1 y n
---------------------------------------------
*/

function sumaNumerosNaturales(n) {
  var sumaTotal = 0;

  for (var i=1; i<=n; i++){
      sumaTotal += i;
  }

  return sumaTotal;
};

//console.log( sumaNumerosNaturales(5) );

/*
---------------------------------------------
20.- Escribe una función que imprima una
   pirámide de astericos como la siguiente:
     
                   *
                  * *
                 * * *
                * * * *
               * * * * *
---------------------------------------------
*/

function imprimirPiramide(pisos) {
  for (var i = 0; i < pisos; i++) {
      var texto = '';
      for (var j = 1; j < pisos - i; j++) {
          texto = texto + ' ';
      }
      for (var k = 1; k <= (2 * i + 1); k++) {
          texto = texto + '*';
      }
      console.log(texto);
  }
};

//imprimirPiramide(5);