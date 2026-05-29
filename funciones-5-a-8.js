//Ejercicio 5: Filtrar Usuarios por Edad
//- Red social.
// Dado un array de usuarios ([{ nombre: "Ana", edad: 25 }, ...]), crea una función
// filtrarUsuarios(usuarios, edadMinima) que retorne los usuarios que cumplen con la edad mínima, la
// cual será dada por el usuario, es decir, si el usuario escribe 18, debería decirle que personas de la lsita
// cumplen con tener más de 18 
export function filtrarUsuarios (usuarios, edadMinima){
    for(let i = 0; i < usuarios.length; i++ ){
        if (usuarios[i].edad >= edadMinima) {
            console.log(`Los usuarios mayores de 18 son: ${usuarios[i].nombre}`)
        }
    }
}

// Ejercicio 6: Contador de Palabras
// -Editor de texto.
// Crea una función contarPalabras(texto) que retorne el número de palabras en un string (separadas por
// espacios).
export function contarPalabras(texto){
    let contador = 1;
    for(let i = 0; i < texto.length; i++){
        if(texto[i] == " " && texto[i + 1] != " " ){
            contador++;
        };
    }
    return console.log(`El texto "${texto}" contiene: ${contador} palabras`);

};