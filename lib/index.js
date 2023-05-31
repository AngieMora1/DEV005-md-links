const fs = require("fs");
const path = require("path");
const {validateExistsPath,validateAbsolutePath,getFiles,readAll} = require('./functionsPath')

const routes = process.argv[2];
const mdLinks = (path) => {
   return new Promise((resolve, reject) => {
    const validateRoute = validateExistsPath(path)
    if(validateRoute);{
        reject('Ruta invalida')
    }
    const fileMD = getFiles(validateRoute);
        readAll(fileMD).then((res) => {
            resolve(res);
        }).catch((err)=>{
            reject(err)
        })
    })
    
}; 
mdLinks(routes).then((res) =>{
    console.log('trae esto ' , res);
}).catch(err=>{
    console.log(err);
})

//     // new Promise((resolve, reject) => {
//     //     if()
        
// //     // })
// // if(validatePath(route)){
// //     const pegarrutas = path.join(route,getFiles(route))
// //     (console.log('resultados ' + pegarrutas))
// // }
// }
// console.log('esto sale ' + mdLinks('./dirPrueba/carpPrueba/archivo1'))

// // mdLinks('./dirPrueba/carpPrueba/carpPrueba2/archivo2.txt');
// mdLinks('./dirPrueba/carpPrueba');
// // mdLinks(__dirname);
// // mdLinks('./dirPrueba/carpPrueba/archivo1');
// // module.exports = () => {
// // }; 
/*Escribe un programa que invierta una cadena usando recursión. Dada la cadena "freeCodeCamp", el programa debería devolver "pmaCedoCeerf".*/
// const cadenaTexto = (texto) => {
//     if(texto === "pmaCedoCeerf"){
//         return "pmaCedoCeerf";
//     }else{
//     const divirPalabra = texto.split("");
//     const cadenaInvertido = divirPalabra.reverse()
//     return cadenaTexto(cadenaInvertido.join(""));
//     }

// }
// console.log(cadenaTexto("freeCodeCamp"))
// // Escribe un programa que devuelva el número de veces que aparece una letra en una cadena. Tu programa debería recibir una cadena y la letra.
// let programa = (cadena, letra) => {...}
// Después, debe devolver el número de veces que la letra aparece en la cadena. Dado el texto "JavaScript" y la letra  "a", su programa debe devolver 2.‌‌‌‌
// Pista: Intenta averiguar cuándo quieres que la función deje de llamarse a sí misma y cómo devolver una versión más pequeña del problema cada vez que la función se llama a sí misma.

//cadena --> JavaScript
// separar cada caracter de la cadena .split
// buscar cada caracte que coincida con la letra indicada
// contar cantidad de letras

// const contarCaracteres = (texto,l) => {
//     let palabraSeparada = String(texto).split(' ');
//     const filtrado = palabraSeparada.filter((texto) => texto.includes(l));
//     if(l === Number){ 
//     return l
//     }else{ 
//     return contarCaracteres(filtrado.length)
// }
// }
// contarCaracteres("JavaScript","a")
// function gggg(texto,l){
//     const palabraSeparada = texto.split("");
//     const filtrado = palabraSeparada.filter((texto) => texto.includes(l)).length;
//     console.log(filtrado);
// }
// gggg("rosasaaaaaa aaaa", "a")


// validar ruta ---> es valida -----> verificar si es absoluta o convertir a oabosluta -----> obtener archivos de las carpetas ----> archivos.md