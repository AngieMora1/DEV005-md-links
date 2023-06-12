# Markdown Links
## Índice

- [Markdown Links](#markdown-links)
  - [1. Preámbulo](#1-preámbulo)
  - [2. Instalación](#2-instalación)
  - [3. Modo de uso](#3-modo-de-uso)
  - [4. Diagrama de flujo](#4-diagrama-de-flujo)
  
 
***
## 1. Preámbulo

Markdown es un lenguaje de marcado ligero. Es usado en muchísimas plataformas que manejan texto plano y es muy común encontrar varios archivos en ese formato en cualquier tipo de repositorio un ejemplo de estos archivos es el README.md.

Estos archivos Markdown normalmente contienen links que muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de la información que se quiere compartir. Por lo cual se desarrolló esta librería que junto con la línea de comando (CLI) permite buscar y analizar enlaces en archivos `Markdown` (.md). Esta herramienta está desarrollada en Node.js y para realizar solicitudes __HTTP__ se utilizó la API de Fetch, el cual nos mostrara los links y sus estados, ademas de la totalidad de links, cuantos son unicos y cuantos estan rotos, adicional para garantizar la calidad del código se realizaron pruebas unitarias con `Jest`.

## 2. Instalación 

Para instalar se debe ejecutar el siguiente comando en la terminal: 
```sh
npm install AngieMora1/DEV005-md-links
```

## 3. Modo de uso

Desde la terminal se puede ejecutar de la siguiente manera 
```sh
md-links <path-to-file-or-directory>
```
* `md-links`, es la palabra para iniciar el funcionamiento.
* `<path-to-file-or-directory>`, representa la ruta del archivo o directorio.

Los valores que se encontraran al ejecutar son:

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link.
* `file`: Ruta del archivo donde se encontró el link.

Ejemplo:
***
![md-links validate: {False}](./Img/Validate(False).png)
***
Se puedes agregar opciones como `--validate` y/o `--stats` para obtener mas informacion.

Para ejecutar `--validate` desde la terminal se debe agregar de la siguiente manera:

```sh
md-links <path-to-file-or-directory> --validate
```
Los valores que se encontraran al ejecutar son:

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link.
* `file`: Ruta del archivo donde se encontró el link.
* `status`: Código de respuesta HTTP.
* `message`: Mensaje `FAIL` en caso de fallo u `OK` en caso de éxito.

Ejemplo:
***
![md-links validate: {True}](./Img/validate(True).png)
***
Si se pasa la opción `--stats` el output será estadísticas básicas sobre los links, las cuales son el total de links encontrados (Total) y la cantidad de links unicos (Unique).

Para ejecutar `--stats` desde la terminal se debe agregar de la siguiente manera:
```sh
md-links <path-to-file-or-directory> --stats
```
Los valores que se encontraran al ejecutar son:
```sh
Total: 2
Unique: 1
```
Ejemplo:
***
![md-links validate: {false} && stats](./Img/Validate(False)%26%26stats.png)
***
También se puede combinar `--stats` y `--validate` para obtener estadísticas que necesiten de los resultados de la validación, las cuales incluyen la catidad de links totales y unicos ademas de los links rotos(Broken).

Para ejecutar `--stats` y `--validate` desde la terminal se debe agregar de la siguiente manera:
```sh
md-links <path-to-file-or-directory> --stats --validate o
md-links <path-to-file-or-directory> --validate --stats 
```
Los valores que se encontraran al ejecutar son:
```sh
Total: 2
Unique: 2
Broken: 1
```
Ejemplo:
***
![md-links validate: {true} && stats](./Img/validate(True)%26%26stats.png)
***
#### CONSIDERACIONES
 * Si se ejecuta md-links en la 'powershell' se debe de agregar '.cmd' al final (md-links.cdm) de lo contrario si se ejecuta en el 'bash' basta con solo escribir md-links.
_________________________________________________________

## 4. Diagrama de flujo
Aqui puedes encontrar el diagrama de flujo de este proyecto
![Diagrama-de-flujo](./Img/Diagrama%20de%20flujo%20CL.png)

