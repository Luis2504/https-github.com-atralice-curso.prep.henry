// No cambies los nombres de las funciones.


function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:

  console.log(array[0])

  
}

console.log(devolverPrimerElemento([1,2,3,4]))


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  
  console.log(array[array.length-1]); 
}

console.log(devolverUltimoElemento([1,2,3,4]));


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  console.log(array.length);
}

console.log(obtenerLargoDelArray([1,2,3,4]));

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  array.push(array.length + 1);

  return array;
}

console.log(incrementarPorUno([1,2,3,4]));


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  array.push(elemento)

  console.log(array);
}

console.log(agregarItemAlFinalDelArray([0,1,2,3],4));

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  array.unshift(elemento);
  console.log(array);
}

console.log(agregarItemAlComienzoDelArray([0,1,2,3],-1));


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  
  return palabras[3]+palabras[2]+palabras[5]+palabras[0]+palabras[1]+palabras[4]+palabras[6];
}

console.log(dePalabrasAFrase(['día ','maravilloso ', 'es ', 'Hoy ', 'para ', 'un ', 'sonrreir!! ']));

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if (array.includes(elemento)){
    return true;

  }

  return false;


}

console.log(arrayContiene([1,2,3,4],4));
console.log(arrayContiene([1,2,3,4],5));




function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  console.log( numeros.reduce(function(numeros,b){return numeros + b},0))
}
agregarNumeros([1,2,3,4])

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma=0;
  for (let  i=0;i<resultadosTest.length; i++){    
    suma += resultadosTest[i];
     
  }
  console.log(suma);
}

promedioResultadosTest([1,2,3,4])



function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  console.log (Math.max(...numeros));
  
}

numeroMasGrande([1,2,3])




function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
