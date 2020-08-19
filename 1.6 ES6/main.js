// 1) Utilizando arrow function, plantillas de texto y desestructuración de objetos, crea una función llamada reproducirPelicula que reciba como argumento un objeto pelicula que contenga las propiedades titulo y director. Al ejecutar la función, debe mostrarse en consola un mensaje como el siguiente:

const pelicula = {
  titulo: 'Titanic',
  director: 'James Cameron',
};

const reproducirPelicula = (objetoPelicula) => {
  const { titulo, director } = objetoPelicula;
  console.log(`Reproduciendo ${titulo}, dirigida por ${director}`);
};

reproducirPelicula(pelicula)

// 2) Utilizando arrow function, plantillas de texto y desestructuración de arreglos, crea una función llamada obtenerTerceraFruta que reciba como argumento un arreglo frutas que contenga los nombres de al menos cinco frutas distintas, como string. Al ejecutar la función, debe mostrarse en consola un mensaje como el siguiente:

const frutas = [
  "Manzana",
  "Uva",
  "Fresa",
  "Papaya",
  "Durazno"
];

const obtenerCuartaFruta = (arregloFrutas) => {
  const [ , , , cuartaFruta] = arregloFrutas;
  console.log(`La cuarta fruta del arreglo es ${cuartaFruta}`);
};

obtenerCuartaFruta(frutas); 
