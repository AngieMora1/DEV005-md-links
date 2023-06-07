const fs = require("fs");
const path = require("path");

// const pathUser = process.argv[2];

// <-- validar que la ruta sea valida(exista) y absoluta -->
const validateExistsPath = (route) => {
  if (fs.existsSync(route)) {
    // console.log("Ruta valida y absoluta funcion");
    const pathAbsolute = path.resolve(route);
    return pathAbsolute;
  } else {
    // console.log("Ruta invalida funcion ", pathUser);
    return "Ruta Invalida";
  }
};
// console.log(validateExistsPath(pathUser)); //COMENTARIOS: FUNCION 'validateExistsPath' ESTA PROBADA Y FUNCIONA

// <--validar si es archivo y recursividad para obtener las rutas junto archivos de extencion .md -->
const getFiles = (routes) => {
  const stats = fs.statSync(routes);
  const existsPath = validateExistsPath(routes);
  let arrayFiles = [];
  if (stats.isFile()) {
    arrayFiles.push(existsPath);
  } else {
    const elements = fs.readdirSync(existsPath);
    elements.map((element) => {
      const routeChild = path.join(existsPath, element);
      if (fs.statSync(routeChild).isDirectory()) {
        arrayFiles = arrayFiles.concat(getFiles(routeChild));
      } else {
        arrayFiles.push(routeChild);
      }
    });
  }
  return arrayFiles.filter((route) => path.extname(route) === ".md");
};
// console.log(getFiles(pathUser)) // COMENTARIOS: FUNCION 'getFiles' ESTA PROBADA Y FUNCIONA, esta con la juncion de validar ruta y covertir en absoluta, ttraer un array donde esta la ruta con cada archivo que  encuentre econ el .md
// <--leer contenido de un archivo, y extrae los links, texto y ruta de archivo-->
const readFileContent = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        console.log("no se encontro links", err);
        reject(err);
      } else {
        const expressionHref = /\[(.+)\]\(([^ ]+)( "(.+)")?\)/gim;
        const linkMatch = data.match(expressionHref);
        const arrayLinks = linkMatch.map((link) => {
          const separateText = link.split("](");
          const href = separateText[1].replace(")", "");
          const text = separateText[0].replace("[", "");
          return { href, text, file };
        });
        resolve(arrayLinks);
      }
    });
  });
};
//<-- lee las funciones getFiles y readFileContent: devuelve un array de objetos (href,text y file), de cada Link -->
const readAll = (arrLinks) => {
  const validate = getFiles(arrLinks);
  const arrayLink = validate.map((element) => readFileContent(element));
  return Promise.all(arrayLink).then((res) => {
    return res.flat();
  });
};
// <-- estadisticas de los links, contar los links-->

module.exports = { validateExistsPath, readFileContent, readAll, getFiles }; //validateAbsolutePath,readFileContent,readAll,getFiles

// <-- Validar que la ruta sea absoluta o convertir a obsoluta -->
// const validateAbsolutePath = (pathUser) => {
//   if (path.win32.isAbsolute(pathUser)) {
//   // console.log('ruta absoluta ', pathUser)
//     return pathUser;
//   } else {
//     const resolveAbsolute = path.win32.resolve(pathUser);
//     //  console.log("Se convirtio en absoluta ", resolveAbsolute);
//     return resolveAbsolute;
//   }
// };
// readAll(pathUser);
// console.log(readAll(pathUser));
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
// validateAbsolutePath('./dirPrueba/carpPrueba/carpPrueba2/archivo2.txt');
// validateAbsolutePath('./dirPrueba/carpPrueba');
// validateAbsolutePath(__dirname);
// validateAbsolutePath('./dirPrueba/carpPrueba/archivo1.md');
// validateAbsolutePath('C:/Users/angie/OneDrive/Escritorio/Proyectos/DEV005/DEV005-md-links/dirPrueba/carpPrueba/carpPrueba2/archivo6.md');

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

// const url = 'https://github.com/AngieMora1/DEV005-data-lovers';
// fetch(url).then(res => {
//     console.log(res );
//     console.log("Test: "+ res.status);
//     // console.log('que trae'+ res.json());
// });

// console.log(fetch);
// console.log(validateAbsolutePath(pathUser)); //COMENTARIOS: FUNCION 'validateAbsolutePath' ESTA PROBADA: OK--> CONVIERTE LAS RUTAS EN RELATIVAS
// console.log(validateAbsolutePath(validateExistsPath(pathUser)));
// // validateAbsolutePath(__dirname);
// // validateAbsolutePath('./dirPrueba/carpPrueba/archivo');
// // validateAbsolutePath('C:/Users/angie/OneDrive/Escritorio/Proyectos/DEV005/DEV005-md-links/dirPrueba/carpPrueba/carpPrueba2/archivo6.md');
