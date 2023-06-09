/* eslint-disable no-undef */
const { mdLinks } = require("../lib/index");
const validatePath = require("../lib/functions");

const path =
  "C:\\Users\\angie\\OneDrive\\Escritorio\\Proyectos\\DEV005\\DEV005-md-links\\dirPrueba\\carpPrueba\\carpPrueba2\\archivo6.md";
const optionValidateTrue = [
  {
    Href: "https://github.com/AngieMora1?tab=repositories",
    Text: "repo",
    File: "C:\\Users\\angie\\OneDrive\\Escritorio\\Proyectos\\DEV005\\DEV005-md-links\\dirPrueba\\carpPrueba\\carpPrueba2\\archivo6.md",
    Status: 200,
    Menssage: "OK",
  },
  {
    Href: "https://drama.fandom.com/es/wiki/WikiDrama/jajajajaj",
    Text: "link roto",
    File: "C:\\Users\\angie\\OneDrive\\Escritorio\\Proyectos\\DEV005\\DEV005-md-links\\dirPrueba\\carpPrueba\\carpPrueba2\\archivo6.md",
    Status: 404,
    Menssage: "FAIL",
  },
];
const optionValidateFalse = [
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
describe("mdLinks", () => {
    it("validar funcion mdlinkscuando validate es true", () => {
        return expect(mdLinks(path, { validate: true })).resolves.toStrictEqual(optionValidateTrue);
    });
    it("validar funcion mdlinkscuando validate es false", () => {
        return expect(mdLinks(path, { validate: false })).resolves.toStrictEqual(optionValidateFalse);
    });
    it("validar cuando se ingresa una ruta invalida", () => {
        jest.spyOn(validatePath,'validateExistsPath').mockReturnValue(false)
        return expect(mdLinks('../dirPrueba/carPrueba/archivo1', { validate: true })).resolves.toBe('Ruta invalida');
    });

});
