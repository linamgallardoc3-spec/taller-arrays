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

