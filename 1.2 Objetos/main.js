// 1.1) Elige un gato de la lista de gatos ficticios de Wikipedia:
// https://en.wikipedia.org/wiki/List_of_fictional_felines
// Crea un objeto llamado myCat que contenga las propiedades que representen 
// la información listada en cada columna en esa página de Wikipedia. 
// Es decir, el objeto debe contener character, earliest_appearance y notes.

const myCat = {
  // Propiedad y valor
  character: 'Chesire Cat',
  earliest_appearance: "Alice's Adventures in Wonderland",
  notes: "Sometimes raises philosophical points that annoy or baffle Alice. It does, however, appear to cheer her up when it turns up suddenly at the Queen of Hearts' croquet field, and when sentenced to death baffles everyone by having made its head appear without its body, sparking a massive argument between the executioner and the King and Queen of Hearts about whether something that does not have a body can indeed be beheaded.",
};

// 1.2) Imprime el contenido de la propiedad character en consola 
// como parte de un mensaje de bienvenida. El mensaje en consola debe 
// lucir similar a esto:
// Hola, soy un gato ficticio. Mejor conocido como Chesire Cat. Aparecí por primera vez en Alice's Adventures in Wonderland.  

console.log(
  "Hola, soy un gato ficticio. Mejor conocido como "
  + myCat.character
  + ". Aparecí por primera vez en "
  + myCat.earliest_appearance
  + "."
);

// 1.3) Mediante una nueva línea de código, es decir sin modificar el código escrito en los puntos anteriores, añade al objeto myCat una nueva propiedad canSmile y asígnalo a true.

// Antes de agregar la propiedad, esta no existe
console.log(myCat.canSmile);
myCat.canSmile = true;
// Verificamos que la propiedad se ha añadido al objeto
console.log(myCat.canSmile);

// 1.4) Sin modificar el código previo, añade un método al objeto myCat llamado sayHello que al ejecutarse imprima en consola el mismo mensaje del inciso 1.2), pero esta vez emplea la palabra reservada this para mostrar el nombre del gato ficticio y donde apareció por primera vez.

myCat.sayHello = function(){
  console.log(
    "Hola, soy un gato ficticio. Mejor conocido como "
    + this.character
    + ". Aparecí por primera vez en "
    + this.earliest_appearance
    + "."
  );
};

myCat.sayHello();

// 1.5) Sin modificar el código previo, cambia el valor de la propiedad character para que el gato ficticio tenga otro nombre. Manda a llamar el método sayHello para verificar que el cambio de nombre se ha aplicado correctamente.

myCat.character = 'Garfield';
myCat.sayHello();

// 1.6) Agrega una nueva propiedad llamada canFly y un nuevo método llamado fly para el objeto myCat.  Al ejecutar el método fly se debe imprimir en consola el mensaje ¡Puedo volar! si myCat tiene la propiedad canFly en true. Si canFly está asignado a false, debe mostrarse el mensaje No puedo volar....

myCat.canFly = false;
myCat.fly = function() {
  if (this.canFly === true) {
    console.log('¡Puedo volar!');
  } else if (this.canFly === false) {
    console.log('No puedo volar...');
  } else {
    console.log('Algo extraño ocurrió...');
  }
};

myCat.fly();

// 2) Crea un objeto receta que contenga la receta para preparar Mole Poblano. El objeto receta debe contener las propiedades de titulo (string), porciones(number),ingredientes (arreglo de strings) y preparacion (string).Imprime la información de la receta en consola de forma que luzca así:

// Titulo: Mole Poblano
// Porciones: 4
// Ingredientes:
// - chile pasilla
// - tomate
// - cebolla
// - ajo
// - aceite vegetal
// - chocolate
// - caldo de pollo
// Preparación: 
// Coloca agua en los chiles pasilla y colócalos en tu licuadora con los tomates, la cebolla, el ajo asados, y una taza de caldo de pollo. Licúa hasta que tenga una salsa muy suave. Pon a hervir la salsa y agrega la tableta de chocolate. Mezcla todo hasta que se incorpore.

var receta = {
  titulo: 'Mole Poblano',
  porciones: 4,
  ingredientes: [
    'chile pasilla',
    'tomate',
    'cebolla',
    'ajo',
    'aceite vegetal',
    'chocolate',
    'caldo de pollo'
  ],
  preparacion: 'Coloca agua en los chiles pasilla y colócalos en tu licuadora con los tomates, la cebolla, el ajo asados, y una taza de caldo de pollo. Licúa hasta que tenga una salsa muy suave. Pon a hervir la salsa y agrega la tableta de chocolate. Mezcla todo hasta que se incorpore.',
};

console.log('Titulo: ' + receta.titulo);
console.log('Porciones: ' + receta.porciones);
console.log('Ingredientes:');
for (var i = 0; i < receta.ingredientes.length; i++) {
  console.log('- ' + receta.ingredientes[i]);
};
console.log('Preparacion:');
console.log(receta.preparacion);