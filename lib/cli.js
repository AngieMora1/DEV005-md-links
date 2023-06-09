const { mdLinks } = require("./index");
const { statsLinks } = require("./stats");

const pathUser = process.argv[2];
const positionArgv = process.argv;
const validateValue = positionArgv.includes("--validate");
const statsValue = positionArgv.includes("--stats");
const options = { validate: validateValue, stats: statsValue };

if (!options.validate && !options.stats) {
    mdLinks(pathUser, options).then((elements) => {
        console.log(elements);
    });
} else if (options.validate && !options.stats) {
    mdLinks(pathUser, options).then((elements) => {
        console.log(elements);
    });
} else if (options.stats && !options.validate) {
    mdLinks(pathUser, options).then((elements) => {
        const funcion = statsLinks(elements);
        console.log("Total:", funcion.Total);
        console.log("Unique:", funcion.Unique);
    });
} else if (options.stats && options.validate) {
    mdLinks(pathUser, options)
    .then((elements) => {
        const result = statsLinks(elements);
        console.log("Total:", result.Total);
        console.log("Unique:", result.Unique);
        console.log("Broken:", result.Broken);
    })
}
