//Ejercicio 5: Filtrar Usuarios por Edad
//- Red social.
// Dado un array de usuarios ([{ nombre: "Ana", edad: 25 }, ...]), crea una función
// filtrarUsuarios(usuarios, edadMinima) que retorne los usuarios que cumplen con la edad mínima, la
// cual será dada por el usuario, es decir, si el usuario escribe 18, debería decirle que personas de la lsita
const prompt = require('prompt-sync')();

const { filtrarUsuarios, contarPalabras, retirarDinero, convertirMoneda } = require("./funciones-5-a-8");

// cumplen con tener más de 18 
let usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 18 },
  { nombre: "Carlos", edad: 30 },
  { nombre: "Sofia", edad: 15 },
  { nombre: "Lore", edad: 10 },
  { nombre: "Valeria", edad: 25 }

];

let edadMinima = 18;

filtrarUsuarios(usuarios, edadMinima);

// Ejercicio 6: 

let palabra = prompt("ingrese una texto breve: ");
contarPalabras(palabra);

//ejercicio 7

let saldoActual = 400000;
console.log(`Su saldo es: ${saldoActual}`)
let saldoRetirar = prompt(`"Ingrese el monto a retirar: `);
retirarDinero(saldoActual, saldoRetirar);

//Ejercicio 8
let saldo = parseInt(prompt("ingrese un monto para cambio de moneda: "));
let opcion = parseInt(prompt(`Opciones: \n 1.Dolares \n 2.Euros \n Digite el numero de la opcion de cambio: `));
convertirMoneda(saldo, opcion);