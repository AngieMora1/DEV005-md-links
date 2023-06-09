const fs = require("fs");
const path = require("path");

// <--- validar que la ruta sea valida(exista) y absoluta --->
const validateExistsPath = (route) => {
  if (fs.existsSync(route)) {
    // console.log("Ruta valida y absoluta funcion");
    const pathAbsolute = path.resolve(route);
    return pathAbsolute;
}
}

// <--- validar si es archivo y recursividad (recorrer directorio y extraer los archivos .md) --->
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

// <-- -lectura del contenido del archivo para extraer href,text y file --->
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
          return { Href:href, Text:text, File:file };
        });
        resolve(arrayLinks);
      }
    });
  });
};

//<-- Devuelve un array de objetos (href,text y file), de cada Link -->
const readAll = (arrLinks) => {
  const validate = getFiles(arrLinks);
  const arrayLink = validate.map((element) => readFileContent(element));
  return Promise.all(arrayLink).then((res) => {
    return res.flat();
  });
};

module.exports = { validateExistsPath, readFileContent, readAll, getFiles };
