//Ejercicio 5: Filtrar Usuarios por Edad
//- Red social.
// Dado un array de usuarios ([{ nombre: "Ana", edad: 25 }, ...]), crea una función
// filtrarUsuarios(usuarios, edadMinima) que retorne los usuarios que cumplen con la edad mínima, la
// cual será dada por el usuario, es decir, si el usuario escribe 18, debería decirle que personas de la lsita
const prompt = require('prompt-sync')();

const { filtrarUsuarios, contarPalabras } = require("./funciones-5-a-8");

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