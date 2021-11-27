var firsname = 'Luis';
let lastname = 'Jojoa';
var número = 15;
const pi = 3.14;


//TIPOS DE DATOS 


// string

 Saludo = 'hello word';
 once ='1' + '1';

 // numero 

 x=1;


 // booleanos 

 t= true;
 f= false;
 

 // null undefined

 nulo_nada = null;
 variable_i=d;

 // operadores matematicos

 // + ,- ,*, /, = (asignación), % modulo 


// funciones 

function  mifunction() {// código
}
const otrafuncion = function () { 
    // código

}

const yotra = () => {
    //código
}
// ejemplo


console.log('hola, mi nombre es Luis');
console.log('yo tengo 30 años');
console.log('hola, mi nombre es Juan');
console.log('yo tengo 23 años')

function presentar (nombre,edad) {
    console.log('Hola mi nombre es:' + nombre);
    console.log('y tengo' + edad + 'años');
}
presentar('luis',23);

// invocar la funcion

presentar()

function hola(){
    //scout nuevo
    var nombrenuevo='nico'
    var nobrew = 'mateo'
}



// funciones return

function noretirna(){
    var none = 'hola'
    var nole = 'hula'
}

function siretorna(a, b){
    return a + b;
}

siretorna(1,2)

// control de flujo 

function puedemanejar(edad){
    if (eada>18){
        return true;
    }
    return false;
}

// permite agrgar lógica al

puedemanejar(22)

// condicional if

if (true) {
    console.log('hola');

}

if (edad>21){
    console.log('sos viejo');
}else  {
    console.log('sos joven')
}


// Expresiones 

1<2;
1==1



// statemnet if, if else, else if. for, while

// operador negacion !

// == compara vaores d etador el interprete se forza.

// === compara el tipo de dato y permite veracidad 

// !== diferente que

// operadores lógicos

// && "y",  o "||", not "!"




// BUCLES E INTEGRACIÓN
//"BUCLE FOR" dry code (Dont repeat yourself "no terepitas")


//cunado se tiene que hacer una acción repetitiva; se recurre a dry code para hacerlo de forma automatica 
//para evitar tanta escritura

// imprimkir uan fucncion del 1-N

//if (N>=1){
 //console.log(1)
//}
//console.log(1)

//if (N>=1){
 //console.log(1)
//}
//console.log(1)
//if (N>=1){
 //console.log(1)
//}
//console.log(1)

//.
//.
//.
// BUCLE FOR 

// for (variable de repeticion; varibale de frenado: tamaño de paso) {
    // bloque de código;
//}

// for (var i = 0; i<= 100; i++){
    // Math.pow(i,2);
//}

// ejemplo 

// imprimir los números del 1 al 100

/* #########################################
######           A R R A Y S          ######
############################################ */


for (var i=1; i<=100; i++){
    console.log(i)
}

// imprimir los numeros del 1-100, aplicando una función. Use  i=i+1.
function imprimeN(n){
    for (var i=1; i<=n; i=i+1){
    console.log(i);    
}
}
imprimeN(100);

// Imprime los nuemros pares del 1-100. consodere i=i+1

function imprimeN(n){
    for (i=1; i<=n; i=i+1){
        if (i%2==0){
            console.log(i)
        }
    }
}

imprimeN(100)

// Imprime los numeros con doble condicion


function imprimeN(n){
     for (i=1; i<=n; i=i+1){
         if (i%3===0){
             console.log(i)
         }
         if (i>2000){
             return;
         }
     }
}

imprimeN(200);

// Imprime con doble bucle for; un for dentro de otro for 

function imprimeN(n){
    for (i=1; i<=n; i=i+1){
        if (i%2===0){
            console.log(i)
        }
        if (i>200){
            for(j=1; j<=20; j=j+1){
                console.log(j);
            }
            return;
        }
    }
}

imprimeN(201)

//Iprimir doble  bucle for haciendo matriz;

function matriz(n,m){
    for(var i=1; i<=n; i=i+1){
        for(var j=1; j<=m; j=j+1){
            console.log(i+','+j);
        }
    }
}

matriz(2,2)

// BUCLE WHILE

// AL igual que el for ejecuta tareas repetitivas, pero lo hace a partir de cierta condicion impuesta.

// while (condicion){
    // bloque de codigo;
//}

//ejemplo imrpime los numero asta el 100
var i=0;

while (i<=100){
    console.log(i);
    i=i+1;
}

// Imprime usando bucle while con una funcion;

function imprimeN(n){
    var i=0;
    while (i<=n){
        console.log(i);
        i=i+1;
    }
}

imprimeN(100)


// imprime matroz usando funcion y bucle while

function matriz(n,m){
    var i=0;
    var j=0;
    while(i<n){
        while(j<m){
            console.log(i,j);
            j=j+1;
        }
        j=0;
        i=i+1;
    }
}

matriz(2,3)

/* ################################################
#######        C   L  A  S  E  S             ######
################################################### */


/* Las clases son plantillas para construir a partir de objetos; las palntillas son prototipos que definen caractristicas
genrales de los objetos*/


/*Objeto literal 
####################### */
var voris = { nombre: 'voris',
    edad: 23,
}

var miguel ={
    nombre:"migue", 
    edad: 34
}

/*  Creamos la plantilla para construir el obgeto  para no tener que repetir el codigo

definimos clases(plantila) e imstancias (objetos)*/

/* Functions Constructors  y new 
###############################

las funsction conctroctors son funciones especiales que construyen objetos */



function Persona() {
    this.firstname='Luis';  /* kidwords this */
    this.lastnmae='Jojoa';

}

var juan = new Persona(); /* new instancia un un objeto o crea un nuevo objeto */



function Car(marca, color) {
    this.marca=marca;  /* kidwords this */
    this.color=color;

}

var Ferrari = new Car('deportivo','black'); /* new instancia un un objeto o crea un nuevo objeto */
var SixWill = new Car('Pickup', 'Black');
var Audi = new Car ('Nissan', 'Green')

 /* el keyword new crea un objeto nuevo bacio y glindea el objetos; es decir le da los atributos al
 objeto de la funcion constructora */

 /* funcion constructora con operadores lógicos
 ############################################## */


 /* con el operador OR 
 #####################*/



function Car(marca, color) {
    this.marca=marca || 'bosbaguen';  /* logigo operado default OR || */
    this.color=color || 'white';

}

var Ferrari = new Car(); /* new instancia un un objeto o crea un nuevo objeto */
var SixWill = new Car();
var Audi = new Car ()

a || b

// tabla de la verdad

T || T = T;
T || F = T;
F || T = T;
F || F = F;  /*  si a es true se marca el primer  valor "a", si a es false se marca el segundo operador "b" */

/* con el operador Y And 
############################ */


function Car(marca, color) {
    this.marca='bosbaguen' && marca;  /* logigo operado default AND && */
    this.color= 'white' && color ;

}

var Ferrari = new Car('deportivo', 'green'); /* new instancia un un objeto o crea un nuevo objeto */
var SixWill = new Car('clásico', 'gris');
var Audi = new Car ('moderno', 'black');

/* Tabla de la verdad del and && 
################################*/




T && T = T;
T && F = F;
F && T = F;
F && F = F;  /*  si a es true se marca el segundo valor  "a", si a es false se marca el primer valor "b" */



/* Prototipes
###################################### */

/* los cada obgetos que creemos ademas de las propiedades tieene un prototipo; si el obgeto que se crea no tiene una propiedad 
la trata de asignar desde el prototivo; si no esat definido su resultado es undefined  elprototipo es el la funtions constructor*/


function Car(marca, color) {
    this.marca=marca;  /* prototipo*/
    this.color=color ;

}

Car.prototype.getmarca=function (){
    return this.marca;
}
                                  /* Define la propiedad que se le asigna */

Car.prototype.getcolor=function (){
    return this.color;
}

var Ferrari = new Car('deportivo', 'green'); /* asignacion de la propiedad */
var SixWill = new Car('clásico', 'gris');
var Audi = new Car ('moderno', 'black');



/* ################################################
#######     T I P O S   D E  C L A S E S     ######
################################################### */


/* CLASES DECLARATORIAS METODO DEL CONSTRUCTOR Y PROTOTIPO 
#########################################################*/

/* La clase declaratoria crea uan especie de plantilla de varibles declaradas in definidas utilizando la el prototipo
constructor, que seran llamdas mediante un metodo, (funcion); asi son dinamicas y son llamdas al 
final siguiendo un prototipo siguiendo un prototipo,  */

class Declaratoria{
    constructor(var1,var2){
        this.var1=var1;
        this.var2=var2;
    }

    llamado(){

        return this.var1 + this.var2;
    }
}

const sum = new Declaratoria(1,2);
console.log(sum.llamado())


/* Metodo de la funcion especial
#################################*/

function Convension(var1,var2){
    this.var1=var1;
    this.var2=var2;
}

Convension.prototype.var=function(){
    return this.var1 + this.var2 
}

const sum = new Convension(1,1);
console.log(sum.var())

/* CLASES DECLARATORIAS METODO DEL CONSTRUCTOR Y ESTÁTICO 
#########################################################*

Asi la clase tenga el metodo del cosntructor no se instancia la clase; es decir, las propiedades no lleban el prototipo
del keyword this que es el encargado de instancia cada propiedad del objeto.*/



class Fecha {
    constructor(dia, mes, ano) {
      this.dia = dia;
      this.mes = mes;
      this.ano = ano;
    }
  
    static hoy() {
      var fecha = new Date();
      var dia = fecha.getDate();
      var mes = fecha.getMonth() + 1;
      var ano = fecha.getFullYear();
      return new Fecha(dia, mes, ano);
    }
}
  

/* ################################################
#######      C  A  L  L  B  A  C  K  S      ######
################################################### */

/* Firts class funstions () */


/* pasa a las funciones como argumentos, */


function Hola(usuario){
    return "Hola " + usuario + " !";
}

function Adios (usuario){
    return "adios " + usuario + " !";
}

function saludo(usuario, cb){
    return cb(usuario);
}

Hola('Luis');
Adios('Luis');
saludo("Luis", Hola);

/* modificar la función */

console.log(saludo("Liz", function (a) { return a + " eres hermosa"}));


/* CALBACKS EN ARREGLOS (ARRAYS) */
/* ############################## */

/* Otros tipo0s de claback son los relacioados a arreglos, los cuales agregan elemnetos (array.push)
quitan elementos (array.pop)... 

Estos son vistos como prototipos de los arreglos, por tanto tenemos varios prototipos ademas de 
los anteriores; tenemos el prtotipo forEach*/



/* Prototipo forEach
##################### */

/* forEcha ejecuata la funcion por cada elemento del array */

var alumnos =['diego', 'edith', 'alejandro','duvan'];

/* Sin colback */

for (var i=0; i< alumnos.length; i++){
    console.log(alumnos[i]);
}
/* Con colback */

var alumnos =['diego', 'edith', 'alejandro','duvan'];

 alumnos.forEach(function(elemento,indice){
     console.log(elemento);
});


/* CALBACKS con MAPS 
  #######################*/
/* Crea un nuevo arreglo aplicada la función para la crración de cada elemento a partir del arreglo anterior */

var num = [1,2,3,4];

var numdouble = num.map(function(x){    /* 'map' mapea cada elemento del array y lo invoca con la nueva funcion */
    return Math.pow(x,2);
    
})

numdouble;


/* con colbacks*/

var nuevonum= [];
for(var i=0; i<num.length; i++){
    nuevonum.push(num[i].capitalize());
}

/* CALBAKS CON REDUCE 
######################*/


/* Reduce aplica una funcion reductora sobre cada elemnto del array devolviendo un único valor */

var num = [1,2,3,4,5,6,7,8,9];

/* sin calbacks */
var suma = 0;
for (var i=0; i< num.length; i=i+1){
    suma = suma + num[i];
}

/* con calbacks */

var sumaReduce = num.reduce(function(acumulador,elemnto){
    return acumulador + elemnto
},0)




