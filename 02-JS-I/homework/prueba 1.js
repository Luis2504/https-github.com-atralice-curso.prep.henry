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