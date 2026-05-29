/*
    Ejercicio 1: Calculadora de Propinas
    - Una app para calcular propinas en restaurantes.
    Crea una función calcularPropina(total, porcentaje) que reciba el total de la cuenta y el porcentaje de
    propina, y retorne el monto final a pagar (total + propina)
*/
const prompt = require('prompt-sync')();

function calcularPropina(total, porcentaje){
    let propina = total *(porcentaje /100);
    return total + propina;
}

//solicitar al usuario el total de la cuenta
let totalCuenta = parseInt(prompt("Ingrese el total de la cuenta a pagar: "));
let porcentajePropina = parseInt(prompt("Ingrese el valor del porcenjare de propina: "));

let toatalPago = calcularPropina(totalCuenta, porcentajePropina);
console.log(`
    El total es: ${totalCuenta}
    El porcentaje de propina es: ${porcentajePropina}
    El total a pagar es: ${toatalPago}
    `);

/* Ejercicio 2: Validar Contraseña
    - Formulario de registro.
    Crea una función validarContraseña(contraseña) que retorne true si:
    - Tiene al menos 8 caracteres.
    - Incluye un número.
    - Incluye una mayúscula.
*/

function validarContraseña(contraseña){
    let valido = false;
    //console.log(contraseña.length);
    if(contraseña.length >=8 && /\d/.test(contraseña) && /[A-Z]/.test(contraseña)){
        valido = true;
    }
    return valido
}
let contraseña = prompt(" Ingrese su contraseña (Debe contener almenos 8 caracteres, mayusculas, números): ")

if (validarContraseña(contraseña)){
    console.log("La contraseña es valida");
}else{
    console.log(`
        La contraseña no es valida 
        tenga en cuenta lo siguiente: 
        * Debe contener almenos 8 caracteres
        * mayusculas
        * números`);
}

/*
Ejercicio 3: Buscar Producto en Inventario
- Sistema de gestión de inventario.
Crea una función buscarProducto(nombre, inventario) que retorne el producto si existe, o null si no. El
inventario debería estar PREDEFINIDO
ejemplo:
const inventario = [
{ nombre: "Camisa", precio: 20 },
{ nombre: "Zapatos", precio: 50 }
];*/

const invetario = [
    {nombre:"Camisa", precio:10000},
    {nombre:"Zapatos", precio:30000},
    {nombre:"Sombrero", precio:50000},
    {nombre:"Corbata", precio:10000}
]
function buscarProducto(nombre, inventario){
    let producto = null;
    for (const elemento of inventario) {
        let encontrado = false;
        if (elemento.nombre.toLowerCase().includes(nombre.toLowerCase())){
            encontrado = true;
        }
        if (encontrado){
            producto = elemento
        }
    }
    return producto;
}

let consulta = prompt("Ingrese el producto que quiere buscar: ");
console.log(buscarProducto(consulta, invetario));

/*
Ejercicio 4: Calcular Promedio de Notas
- Plataforma educativa.
Crea una función calcularPromedio(notas) que reciba un array de notas dado por el usuario
(separadas por comas) y retorne el promedio (redondeado a 2 decimales).
*/
let notas = []
function calcularPromedio(notas){
    let suma = 0;
    for (const nota of notas) {
        suma = suma + nota;
    }
    return (suma/notas.length).toFixed(2);
}
let index = 0;
let cantidad = prompt("Ingrese la cantidad de notas: ");
while (index<cantidad) {
    notas.push(parseInt(prompt("Ingrese una nota: ")));
    index++;
}
console.log("El promedio de sus notas es: ",calcularPromedio(notas));