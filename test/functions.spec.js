/* eslint-disable no-undef */
const {
    validateExistsPath,
    getFiles,
    readFileContent,
    readAll,
} = require("../lib/functions");
// const path = require("path");

const pathUser = "C:\\Users\\angie\\OneDrive\\Escritorio\\Proyectos\\DEV005\\DEV005-md-links\\dirPrueba\\carpPrueba\\carpPrueba2\\archivo6.md";
const arrayDirectoryExtMD = [
    "C:\\Users\\angie\\OneDrive\\Escritorio\\Proyectos\\DEV005\\DEV005-md-links\\dirPrueba\\carpPrueba\\carpPrueba2\\archivo6.md",
    "C:\\Users\\angie\\OneDrive\\Escritorio\\Proyectos\\DEV005\\DEV005-md-links\\dirPrueba\\carpPrueba\\carpPrueba2\\carpPrueba3\\archivo4.md",
    "C:\\Users\\angie\\OneDrive\\Escritorio\\Proyectos\\DEV005\\DEV005-md-links\\dirPrueba\\carpPrueba\\carpPrueba2\\carpPrueba3\\archivo5.md",
];
const arrayFileExtMD = [
    "C:\\Users\\angie\\OneDrive\\Escritorio\\Proyectos\\DEV005\\DEV005-md-links\\dirPrueba\\carpPrueba\\carpPrueba2\\archivo6.md",
];
const objectReadFile = [
    {
    Href: "https://github.com/AngieMora1?tab=repositories",
    Text: "repo",
    File: "C:\\Users\\angie\\OneDrive\\Escritorio\\Proyectos\\DEV005\\DEV005-md-links\\dirPrueba\\carpPrueba\\carpPrueba2\\archivo6.md",
    },
    {
    Href: "https://drama.fandom.com/es/wiki/WikiDrama/jajajajaj",
    Text: "link roto",
    File: "C:\\Users\\angie\\OneDrive\\Escritorio\\Proyectos\\DEV005\\DEV005-md-links\\dirPrueba\\carpPrueba\\carpPrueba2\\archivo6.md",
    },
];
describe('testeo funcion "validateExistsPath"', () => {
    it("es una función", () => {
    expect(typeof validateExistsPath).toBe("function");
    });
    it("validar ruta --> Ruta Valida y absoluta", () => {
    expect(validateExistsPath("./dirPrueba/carpPrueba/carpPrueba2/archivo6.md")
    ).toBe(pathUser);
    });
});
describe('testeo funcion "getFiles"', () => {
    it("Es un directorio --> trae un array de archivos con extencion .md", () => {
    expect(getFiles('C:\\Users\\angie\\OneDrive\\Escritorio\\Proyectos\\DEV005\\DEV005-md-links\\dirPrueba\\carpPrueba\\carpPrueba2')).toStrictEqual(arrayDirectoryExtMD);
    });
    it("Es un archivo --> trae un array de archivos con extencion .md", () => {
    expect(getFiles(pathUser)).toStrictEqual(arrayFileExtMD);
    });
});
describe('testeo funcion "readFileContent"', () => {
    it("Se resuelve promesa y trae el resolve con un array de objetos con los elementos { href, text, file }, extraidos del archivo", () => {
    return expect(readFileContent(pathUser)).resolves.toStrictEqual(objectReadFile);
    });
});
describe('testeo funcion "readAll"', () => {
    it("Se resuelve promesa y trae el resolve con un array de objetos con los elementos { href, text, file }, extraidos del archivo", () => {
    return expect(readAll(pathUser)).resolves.toStrictEqual(objectReadFile);
    });
});
