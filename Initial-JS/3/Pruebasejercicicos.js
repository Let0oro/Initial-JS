/** @format */

"use strict";

//1 y 2

const compraH = (J = 2, S = 1.6, H = 3.4, M) => {
	J = prompt("Dinero de Jm:");
	S = prompt("Dinero de Sr:");
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

//3

const Tabla10 = (
	firstnumber = 0,
	lastnumber = 10,
	multiplynumber = 10
) => {
	for (
		firstnumber;
		firstnumber <= lastnumber;
		firstnumber++
	) {
		console.log(
			`${firstnumber} x ${multiplynumber} = ${
				firstnumber * multiplynumber
			}`
		);
	}
};

//4:

const TablaAny = (
	firstnumber = 0,
	lastnumber = 10,
	multiplynumber = 10
) => {
	multiplynumber = prompt(
		"Escribe un número del 1 al 20"
	);
	if (multiplynumber <= 0 || multiplynumber >= 21) {
		alert("Número introducido incorrecto");
		console.log(Tabla10());
	} else {
		for (
			firstnumber;
			firstnumber <= lastnumber;
			firstnumber++
		) {
			console.log(
				`${firstnumber} x ${multiplynumber} = ${
					firstnumber * multiplynumber
				}`
			);
		}
	}
};

//5

const convertir = (
	eleccion = "g",
	galones = NaN,
	litros = NaN
) => {
	eleccion = prompt("Escoge galones (g) o  litros (l)");
	if (eleccion == "g") {
		galones = Number(
			prompt(
				"Escoge el número de galeones a convertir en litros",
				1
			)
		);
		console.log(
			`El número de litros correspondiente es ${
				galones / 3.7
			}`
		);
	} else if (eleccion == "l") {
		litros = Number(
			prompt(
				"Escoge el número de litros a convertir en galeones",
				1
			)
		);
		console.log(
			`El número de galones correspondiente es ${
				litros * 3.7
			}`
		);
	} else {
		console.log(convertir());
	}
};

//6

const TablaTot = (
	firstnumber = 0,
	lastnumber = 10,
	multiplynumber = 0,
	FilaNum = []
) => {
	for (
		firstnumber;
		firstnumber <= lastnumber;
		firstnumber++
	) {
		FilaNum.push(firstnumber);
	}
	for (let numeros in FilaNum) {
		for (
			multiplynumber = 0;
			multiplynumber <= 10;
			multiplynumber++
		) {
			console.log(
				`${
					FilaNum[numeros]
				} x ${multiplynumber} = ${
					FilaNum[numeros] * multiplynumber
				}`
			);
		}
		console.log("+++++++++++++++++++++++++++++++++");
	}
};
