    const { validateExistsPath, readAll } = require("./functions");

    const mdLinks = (path, options) => {
    return new Promise((resolve, reject) => {
        const validatePath = validateExistsPath(path);
        if (!validatePath) {
        resolve("Ruta invalida");
        }
        readAll(validatePath)
        .then((links) => {
            if (!options.validate) {
            resolve(links);
            } else {
            const linksFetch = links.map((link) =>
                fetch(link.Href).then((infoStatus) => {
                const validate = {
                    Href: link.Href,
                    Text: link.Text,
                    File: link.File,
                    Status: infoStatus.status,
                    Menssage: infoStatus.status <= 399 ? "OK" : "FAIL",
                };
                return validate;
                })
            );
            Promise.all(linksFetch).then((res) => {
                resolve(res);
            });
            }
        })
        .catch((err) => {
            reject(err);
        });
    });
    };

    module.exports = {mdLinks};
