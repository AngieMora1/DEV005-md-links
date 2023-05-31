const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

const routes = process.argv[2];

// validar que la ruta sea valida(exista)
const validateExistsPath = (routes) => {
  if (fs.existsSync(routes)) {
    // console.log("Ruta valida");
    return routes;
  } else {
    console.log("Ruta invalida " + routes);
    return routes;
  }
};

// Validar que la ruta sea absoluta o convertir a obsoluta
const validateAbsolutePath = (routes) => {
  if (path.isAbsolute(routes)) {
    return routes;
  } else {
    const resolveAbsolute = path.resolve(routes);
    // console.log("Se convirtio en absoluta " + resolveAbsolute);
    return resolveAbsolute;
  }
};

// valida si es archivo y recursividad para obtener las rutas junto archivos de extencion .md
const getFiles = (routes) => {
  const stats = fs.statSync(routes);
  const existsPath = validateExistsPath(routes);
  const absolutePath = validateAbsolutePath(existsPath);
  let arrayRoutes = [];
  if (stats.isFile()) {
    arrayRoutes.push(absolutePath);
  } else {
    const elements = fs.readdirSync(absolutePath);
    elements.forEach((element) => {
      const routeChild = path.join(absolutePath, element);
      if (fs.statSync(routeChild).isDirectory()) {
        arrayRoutes = arrayRoutes.concat(getFiles(routeChild));
      } else {
        arrayRoutes.push(routeChild);
      }
    });
  }
  return arrayRoutes.filter((route) => path.extname(route) === ".md");
};

// leer contenido de un archivo
const readFileContent = (file) => {
 return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        // console.log(err);
        reject(err);
      } else {
          // const expressionRegular = /(\[[-a-zA-Z-0-9\s.:;()`áéíóú]+])|((https?|file):\/\/|(www|ftp)\.)[-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/gi;
          // const infoRegular = data.match(expressionRegular);
          // const expressionText = infoRegular.split(0,2);
        const expressionHref = /\b((https?|file):\/\/|(www|ftp)\.)[-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/gi;
        const expressionText = /(\[[-a-zA-Z-0-9\s.:;()`áéíóú]+])/gi;
        let links = [];
        const href = data.match(expressionHref);
        const text = data.match(expressionText);
        links.push({ href, text, file });
        // console.log(data)
        // console.log(href)
        // console.log(text)
        console.log(links)
        resolve(links);
      }
    });
  });
};
const readAll = (route)=> {
    const validate = getFiles(route)
    const arrayLinks = validate.map( element => readFileContent(element))
    // console.log(arrayLinks)
    return Promise.all(arrayLinks)
}
readAll(routes);
// readFileContent(routes);
//consumo de la primesa ejemplo
// readFileContent(rutas);
// buscar links y almacenarlos 
// const getLinks = (file,data)=>{
//     const expresiones = /\b((https?|ftp|file):\/\/|(www|ftp)\.)[-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/ig;
//     const validarlinks = String(data).match(expresiones);
//     console.log(file)
//     console.log(validarlinks)
// }
// console.log(getLinks( "C:/Users/angie/OneDrive/Escritorio/Proyectos/DEV005/DEV005-md-links/dirPrueba/carpPrueba/archivo1.md"))
// extraer links
// const link = (linkFiles) => {
//   const expresiones = /\b((https?|ftp|file):\/\/|(www|ftp)\.)[-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/ig;
//   const validarlinks = readFileContent(linkFiles).match(expresiones);
//   console.log(validarlinks)
// };
// .then((file) => {
//       console.log("vamos haber si funciona: " + data)
//     }).catch((err) => {
//         console.log(err);
//     });
// const expresionregular={
//     expresionesurl: https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&/=]*)
// }

// extraer links del archivo
// exprecion regular

// console.log(getFiles('./dirPrueba/carpPrueba/carpPrueba2/archivo6.md'));
// console.log(getFiles(__dirname));
// console.log(getFiles('C:/Users/angie/OneDrive/Escritorio/Proyectos/DEV005/DEV005-md-links/dirPrueba/carpPrueba/carpPrueba2/archivo2.txt'));
// console.log(getFiles('./dirPrueba/carpPrueba'));
// console.log(getFiles('C:/Users/angie/OneDrive/Escritorio/Proyectos/DEV005/DEV005-md-links/dirPrueba/carpPrueba/carpPrueba2/archivo6.md'));
// console.log(getFiles('C:/Users/angie/OneDrive/Escritorio/Proyectos/DEV005/DEV005-md-links/dirPrueba/carpPrueba/carpPrueba2'));
// validatePath('./dirPrueba/carpPrueba/carpPrueba2/archivo2.txt');
// validatePath('./dirPrueba/carpPrueba');
// validatePath(__dirname);
// validatePath('./dirPrueba/carpPrueba/archivo1');
// validatePath('C:/Users/angie/OneDrive/Escritorio/Proyectos/DEV005/DEV005-md-links/dirPrueba/carpPrueba/carpPrueba2/archivo6.md')

//Validar si es un archivo o directorio y si es un archivo verificarla extencios
// const validateFile= (route) => {
//     const stats = (fs.statSync(route));
//     if(stats.isFile()){
//     console.log('es un archivo ' + stats.isFile());
//     console.log(path.win32.extname(route));
//     }else{
//     console.log('es archivo '+ stats.isFile())
//     }
// }
// validateFile('./dirPrueba/carpPrueba/carpPrueba2/archivo2.txt');
// validateFile('./dirPrueba/carpPrueba');
// validateFile(__dirname);

// const url = "https://jsonplaceholder.typicode.com/todos/1";

// fetch(url)
//   .then((response) => response.json())
//   .then((jsonData) => console.log(jsonData));

// console.log(fetch);
module.exports = { validateExistsPath, validateAbsolutePath, getFiles };
