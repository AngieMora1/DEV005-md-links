// const fs = require("fs");
// const path = require("path");
const {
validateExistsPath,
readAll,
} = require("./functions");

const pathUser = process.argv[2];

const mdLinks = (pathUser, options) => {
return new Promise((resolve, reject) => {
    const validatePath = validateExistsPath(pathUser);
    if (!validatePath) {
        reject("Ruta invalida mdlinks");
    }
    readAll(validatePath)
    .then((links) => {
        if (!options.validate) {
            resolve(links);
        }else{
            const linksFetch = links.map((link) =>
            fetch(link.href).then((infoStatus) => {
                const validate = {
                    Link: link.href,
                    Text: link.text,
                    File: link.file,
                    Status: infoStatus.status,
                    Menssage: infoStatus.status<= 399 ? 'OK' : 'FAIL',
                };
                return validate
            })
            );
                Promise.all(linksFetch)
                .then((res) => {
                    resolve (res)
                })
                .catch((err) => {
                    reject(err)
                    })
        }
    })
    .catch((err) => {
    reject('error despues del validate', err)
    });
});
};
mdLinks(pathUser, { validate: true })
.then((res) => {
    console.log("trae esto mdlinks ", res);
})
.catch((err) => {
    console.log(err.path);
    console.log("trae esto en el error de mdlinks", err);
});

// const routes = process.argv[2];
// const mdLinks = (path) => {
//    return new Promise((resolve, reject) => {
//     const validateRoute = validateExistsPath(path)
//     if(!validateRoute);{
//         reject('Ruta invalida')
//     }
//     const fileMD = getFiles(validateRoute);
//         readAll(fileMD).then((res) => {
//             resolve(res);

//         }).catch((err)=>{
//             reject(err)
//         })
//     })

// };
// mdLinks(routes).then((res) =>{
//     console.log('trae esto ' , res);
// }).catch(err=>{
//     console.log(err);
// })

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
