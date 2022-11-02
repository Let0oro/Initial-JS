'use strict'

//PRUEBATONTA

/**
 * 1. que se introduzca una frase
 * 2. que a esa frase se le separen las palabras (por espacios) y transformarlo en un array
 * 3. que a esa frase se le eliminen las comas y los puntos, los signos de interrogación, etc
 * 4. condicionar la longitud de los elementos del array (busqueda .some) a los que tengan menos de 5 caracteres
 * 5. los que resulten, que aparezcan en una lista desordenada 
 * 
 */

const CuentaLetras = (oracion, NumPalabrasTot, NumLetras) => {
    // oracion = (prompt("Texto a analizar:"));
    for (let i = 0; i < NumPalabrasTot; i++) {
        let palabrasTot = oracion.split(" ")[i];
        if ((palabrasTot.length) <= NumLetras) {
            document.write(`<ul><li>${palabrasTot}</li></ul>`);
        }
    }
}
