/** @format */

"use strict";

/**
*  EJ.1.
 * "Jm y Sr van a comprar un helao, Jm tiene 2 euros y Sr tiene 1,60 euros; el helado cuesta 3,40 euros; tienes que creartme un programa que pida al usuario introdurcir el dinero de Sr y el dinero de Jm"
 * Aparecer el dinero de Jm, el de Sr, el total de los dos juntos, si da para comprar o no el helado "no da para comprar/sí da", si da el dinero: "El helado cuesta tanto y las vueltas son tanto", si no da: "el helado cuesta tanto, y te fakta esto dedinero"las vueltas

* EJ.2.
 * "IDEM, buscar la manera de cómo simplificar el ejercicio 1", lo más simplificado posible

* EJ.3.pueden hacerse el 3 y 4 con for
 * "Con un bucle, haz la tabla de multiplicar del 10 (10*1, *2, etc.)" hasta el 10

* EJ.4.pueden hacerse el 3 y 4 con for
 * "Créame un bucle que saque la tabla de multiplicar de un número que tú elijas ("Elige un número del 1 al 20", ni el 0 ni el 21 me la puede hacer, etc.)"

* EJ.5.
 * "Haz un programa que convierta galones en litros, 3,7galones == 1l, en función de los litros que pidamos, a galones "Cuantos litros tienes" "cuantos galones quieres""
 * Do while
 * 
* EJ.6.
 * "Tabla de multiplicar que me muestre todas las tablas del 1 al 10 (Idem 4 que me muestre las tablas)"
 * Con for
* 
 * "Nada de internet, pero puedes revisar apuntes, aprende a pensar, perro"
 * "No simplificar hasta terminar"
 * "Antes de programar, esquema y pensar, ¿Cómo hago esto?"
 * Que los nombres de las variables sean simples y descriptivas, faciliten su reconocimiento.
 * Que los argumentos queden simplificados, que la línea de códico quede visible, mejor a que quede en una sola.
 * 
 */

//:*******************************EJ1 + EJ2::*******************************
const compraH = (J, S, H) => {
	let M;
	if (J + S >= H) {
		M = `Da de sobra para comprarlo, las vueltan son de ${
			J + S - H
		} euros`;
	} else {
		M = `No llega la pasta, faltan ${
			H - (J + S)
		} euros`;
	}
	console.log(
		`Jm tiene ${J} euros, Sr, ${S} euros, el helado cuesta ${H} euros, ${M}.`
	);
};
compraH(
	Number(prompt("Dinero de Jm", 2)),
	Number(prompt("Dinero de Sr", 1.6)),
	Number(3.4)
);

alert("Vas a pasar al siguiente ejercicio");
// // //:*******************************EJ3::*******************************
let X = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let numeros in X) {
	console.log(
		`${X[numeros]} x ${10} = ${X[numeros] * 10}`
	);
}

alert("Vas a pasar al siguiente ejercicio");
// //:*******************************EJ4::*******************************
const ej4 = (A) => {
	A = Number(
		prompt("Escoge un número entre el 1 y el 20", 1)
	);
	if (A <= 0 || A >= 21) {
		ej4();
	} else {
		for (let numeros in X) {
			console.log(
				`${X[numeros]} x ${A} = ${X[numeros] * A}`
			);
		}
	}
};
ej4();

alert("Vas a pasar al siguiente ejercicio");
//:*******************************EJ5::*******************************
const G = (galones) =>
	`Los ${galones} galones corresponden a ${
		galones / 3.7
	} litros.`;
console.log(
	G(
		Number(
			prompt(
				"Escribe el número de galones que quieras convertir en litros",
				2
			)
		)
	)
);

alert("Vas a pasar al siguiente ejercicio");
//*****************************EJ6:*******************************
for (let numeros in X) {
	for (let i = 0; i < 10; i++) {
		console.log(
			`${X[numeros]} x ${i} = ${X[numeros] * i}`
		);
	}
	console.log("+++++++++++++++++++++++++++++++++");
}
