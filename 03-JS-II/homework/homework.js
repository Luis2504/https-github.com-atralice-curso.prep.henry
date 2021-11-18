// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:

  if (x!==y && x>y){
    console.log(x);
  }
  else if (x!==y && x<y){
    console.log(y);
  }
  else if (x=y){
    console.log(y);
  }
}

obtenerMayor(2,1);
obtenerMayor(1,3);
obtenerMayor(1,1);

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:

  if (idioma ==='aleman'){
    console.log('Guten Tag!');
  }
  else if (idioma ==='mandarín'){
    console.log('Ni Hao!')
  }
  else if ( idioma ==='ingles'){
    console.log('hello!')
  }
  else if (idioma==='japones'){
    console.log(undefined)
  }

  return
}

saludo('aleman')
saludo('mandarín')
saludo('ingles')
saludo('japones')

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero===10 || numero===5){
    console.log(true);
  }
  else if (numero!==10 || numero !==5){
    console.log(false)
  }
}

esDiezOCinco(10)
esDiezOCinco(5)
esDiezOCinco(1)


function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero<50 && numero>20){
    console.log(true);
  }
  
  return false
}

estaEnRango(30);
estaEnRango(60);


function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:

  if (numero===Math.floor(numero)){
    console.log(true);
  }
  return console.log(false);
}

esEntero(2);
esEntero(-2.1);


function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero

  if (numero % 3 === 0){
    console.log("fizz");
  }
  else if (numero % 5 ===0){
    console.log("buzz");
  }
  else if (numero%3 ===0 && numero%5===0){
    console.log("fizzbuzz")
  }
  else if (numero%3!==0 && numero %5!==0){
    console.log(numero)
  }
}
fizzBuzz(18);
fizzBuzz(10);
fizzBuzz(15);
fizzBuzz(29);

NumerosPrimos=[2,3,5,7,11,13,17,19,23,27]
function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
 for (i=0;i<=NumerosPrimos.length; i=i++){   
  if (NumerosPrimos[i]%numero==0 && numero/numero ==1){
    console.log(true);
  }
  else if (NumerosPrimos[i]%numero!==0 && numero/numero !==1){
   console.log(false);
  }
  }
}
esPrimo(10)


const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', 'Samuel'];

for (let i = 0; i < nombresEstudiantes.length; i++) {
  console.log(nombresEstudiantes[i]);
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  saludo,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  esPrimo
};
