    /* eslint-disable no-undef */
    const {
    statsLinks,
    statsUniqueLinks,
    statsBrokenLinks,
    } = require("../src/stats");

    const arrayLinks = [
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
    describe("validar funcion 'statsLinks'", () => {
    it("es una función", () => {
        expect(typeof statsUniqueLinks).toBe("function");
    });
    it("verificar links unicos", () => {
        expect(statsUniqueLinks(arrayLinks)).toBe(2);
    });
    });
    describe("validar funcion 'statsBrokenLinks'", () => {
    it("es una función", () => {
        expect(typeof statsBrokenLinks).toBe("function");
    });
    it("verificar links unicos", () => {
        expect(statsBrokenLinks(arrayLinks)).toBe(1);
    });
    });
    describe("validar funcion 'statsLinks'", () => {
    it("es una función", () => {
        expect(typeof statsLinks).toBe("function");
    });
    it("verificar links unicos", () => {
        const countLinks = 2;
        const uniqueLinks = 2;
        const brokenLinks = 1;
        const object = {
        Total: countLinks,
        Unique: uniqueLinks,
        Broken: brokenLinks,
        };
        expect(statsLinks(arrayLinks)).toEqual(object);
    });
    });
