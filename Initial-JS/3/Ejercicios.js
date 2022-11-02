'use strict'
/**
 * ! 1: 'Programa que: 
 * 1) pida 6 números por pantalla y los meta en un array 
 * 2) tiene que mostrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola 
 * 3) Tenemos que ordenarlo y mostrarlo
 * 4) invertir su orden y mostrarlo
 * 5) Mostrar cuántos elementos tiene el array
 * 6) Búsqueda de un valor introducido por el usuario,  y que nos diga si está en el array y que nos diga su índice o posición
 */

const numeros = (num = 6, elemento, lista = [], busqueda) =>{
    for (let i = 1; i<=num; i++){
        elemento = prompt(`Elemento ${i}:`);
        lista.push(elemento);
        console.log(lista[i-1]);
    }
    console.log('Esta es la lista ordenada: '+lista.sort ((a, b) => a - b ));
    console.log('Así es la lista ordenada al revés: '+lista.sort ((a, b) => a - b ).reverse());
    console.log('El tamaño de la lista es de '+lista.length+' elementos');
    busqueda = prompt("¿Existirá este elemento dentro de la lista?");
    let find_element= (lista.find(search => search == `${busqueda}`))
    if (find_element != undefined){
        console.log(`El elemento "${busqueda}" existe`);
    }else{
        console.log('El elemento no existe');
    }
}

// let texto = [1, 2, 3, 4, 5];
// let numeros = Number(cadena);
// console.log(numeros);
// let busqueda = texto.find(elemento => elemento <= 4);
// console.log(busqueda);