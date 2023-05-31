// const fs = require("fs");
// const path = require("path");
// const {validatePath} = require('./functionsPath')
// // valida si es archivo y recursiva para obtener las rutas con archivos de extencion .md
// const getFiles = (route) => {
//   const stats = fs.statSync(route);
//   const absolutePath = validatePath(route);
//   let arrayRoutes = [];
//   if (stats.isFile()) {
//      arrayRoutes.push(absolutePath);
    
//   } else {
//     const elements = fs.readdirSync(absolutePath)
//     elements.forEach((element) => {
//       const routeChild = path.join(absolutePath, element)
//       if(fs.statSync(routeChild).isDirectory()){
//         arrayRoutes = arrayRoutes.concat(getFiles(routeChild));
//       }else{
//         arrayRoutes.push(routeChild);
//       }
//     })
    
//   }
//   return arrayRoutes.filter((route) => path.extname(route) === '.md');
// };
// // console.log(getFiles('./dirPrueba/carpPrueba'));

// console.log(getFiles('./dirPrueba/carpPrueba/carpPrueba2/archivo6.md'));
// // console.log(getFiles('./dirPrueba/carpPrueba'));
// // console.log(getFiles(__dirname));
// // getFiles(validatePath('C:/Users/angie/OneDrive/Escritorio/Proyectos/DEV005/DEV005-md-links/dirPrueba/carpPrueba/carpPrueba2/archivo2.txt'))
// //console.log(getFiles('C:/Users/angie/OneDrive/Escritorio/Proyectos/DEV005/DEV005-md-links/dirPrueba/carpPrueba/carpPrueba2/archivo2.txt'));
// // console.log(getFiles('./dirPrueba/carpPrueba'));
// // console.log(getFiles(validatePath('C:/Users/angie/OneDrive/Escritorio/Proyectos/DEV005/DEV005-md-links/dirPrueba/carpPrueba/carpPrueba2/archivo6.md')));
// // console.log(getFiles('C:/Users/angie/OneDrive/Escritorio/Proyectos/DEV005/DEV005-md-links/dirPrueba/carpPrueba/carpPrueba2'));
// module.exports = {getFiles}; 