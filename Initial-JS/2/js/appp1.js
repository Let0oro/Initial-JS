/** @format */

"use strict";
/**
 * EJ.1.
 * "Jm y Sr van a comprar un helao, Jm tiene 2 euros y Sr tiene 1,60 euros; el helado cuesta 3,40 euros; tienes que creartme un programa que pida al usuario introdurcir el dinero de Sr y el dinero de Jm"
 * Aparecer el dinero de Jm, el de Sr, el total de los dos juntos, si da para comprar o no el helado "no da para comprar/sí da", si da el dinero: "El helado cuesta tanto y las vueltas son tanto", si no da: "el helado cuesta tanto, y te fakta esto dedinero"las vueltas
 *
 * Tal y como salga
 */

// let dineroJ = Number(prompt("Cuanto dinero tiene Jm?", 2));
// let dineroS = Number(prompt("Cuanto dinero tiene Sr?", 1.6));
// let dinerotot = (dineroJ+dineroS);
// let valorH = 3

/*
console.log ('Jm tiene '+dineroJ);
console.log ('Sr tiene '+dineroS);
console.log ('Juntos tienen '+dinerotot);
if (dinerotot < valorH){
    console.log ('No tienes suficiente dinero, te faltan '+ (valorH-dinerotot)+' euros');
}else if(dinerotot==valorH){
    console.log('Te da justo, uff!');
}else if(dinerotot>valorH){
    console.log('Te da de sobra, muy bien!, en total te sobran '+(dinerotot-valorH)+' euros');
}else{
    console.log('Escribe bien!!!!');
}


 /** 
 * EJ.2.
 * "IDEM, buscar la manera de cómo simplificar el ejercicio 1", lo más simplificado posible
 *
 * INCLUYE PRECIO JUSTO
 if (dinerotot < valorH){
     console.log ('No tienes suficiente dinero, te faltan '+ (valorH-dinerotot)+' euros');
}else if(dinerotot==valorH){
    console.log('Te da justo, uff!');
}else if(dinerotot>valorH){
    console.log('Te da de sobra, muy bien!, en total te sobran '+(dinerotot-valorH)+' euros');
}else{console.log('Escribe bien!!!!');
}
*/

// console.log ('Jm tiene '+dineroJ+' euros y Sr '+dineroS+' euros, juntos tienen '+dinerotot+' euros');

// if (dinerotot < valorH){
//      console.log ('No tienes suficiente dinero, te faltan '+ (valorH-dinerotot)+' euros');
// }else if(dinerotot>=valorH){
//     console.log('Te da la pasta, muy bien!, en total te sobran '+(dinerotot-valorH)+' euros');
// }else{
//     console.log('Escribe bien!!!!');
// }

/** EJ.3.pueden hacerse el 3 y 4 con for
 * "Con un bucle, haz la tabla de multiplicar del 10 (10*1, *2, etc.)" hasta el 10
 */
/*for (let i=0;i<=10;i++){
    let product = (10*i);
    console.log('10 x '+i+' = '+product);
 }

 /** EJ.4.pueden hacerse el 3 y 4 con for
 * "Créame un bucle que saque la tabla de multiplicar de un número que tú elijas ("Elige un número del 1 al 20", ni el 0 ni el 21 me la puede hacer, etc.)"
 */

// let number = prompt("¿De qué número, entre el 1 y el 20, te gustaría ver la tabla de multiplicar?", 10)
// if(number >=0 && number <=20){
//     for (let i=0;i<=10;i++){
//     let product = (10*i);
//     console.log('10 x '+i+' = '+product);
//  }}else{
//      console.log('Escoge un número entre el 1 y el 20, por favor');
//  }

/** EJ.5.
 * "Haz un programa que convierta galones en litros, 3,7galones == 1l, en función de los litros que pidamos, a galones "Cuantos litros tienes" "cuantos galones quieres""
 * Do while
 */

// let l = prompt('Cuantos litros quieres transformar a galones');
// let gal = 3.7;
// do {
//     console.log('El número de galones equivalente a los litros introducidos es de '+(l*gal));
// }while(l = 0)

/** EJ.6.
 * "Tabla de multiplicar que me muestre todas las tablas del 1 al 10 (Idem 4 que me muestre las tablas)"
 * Con for
 *
 * "Nada de internet, pero puedes revisar apuntes, aprende a pensar, perro"
 * "No simplificar hasta terminar"
 * "Antes de programar, esquema y pensar, ¿Cómo hago esto?"
 * Hasta las 15:25 de mañana
 * */
//  let number =  1
//  let product = (10*i);

//  if(number >=1 && number <=0){
//     for (let i=0;i<=10;i++){
//     let product = (10*i);
//     console.log('10 x '+i+' = '+product);
//  }}else{
//      console.log('Escoge un número entre el 0 y el 100, por favor');
//  }
// let n = 1;

// PRUEBA 6 QUE FUNCIONA

// for (let n = 1; n<=10; n++) {
//     let m = 1;
//     while (m<=9){
//         console.log(m+' x '+n+ ' = '+(m*n));
//         m++;
//     }
//     console.log(m+' x '+n+ ' = '+(m*n));
// }

let m = 1;
for (let n = 1; n <= 10; n++) {
	if (m != 10) {
		console.log(m + " x " + n + " = " + m * n);
		m++;
		n = 0;
	} else {
		console.log(m + " x " + n + " = " + m * n);
		m = 1;
		n++;
	}
	debugger;
}

/*
mxn = r
0x0 = 0
1x0 = 0
...
0x1
1x1
...
0x2
*/
