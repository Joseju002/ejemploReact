const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');

//Pasos a seguir:

//Comando para crear un proyecto de REACT en node:
//npx create-react-app client
//SE NOS CREARÁ LA CARPETA client

//En el package.json del cliente, encima de 'enlistconfig', ponemos:
//"proxy" : "http://localhost:3001",
// Con esto, hacemos que REACT PUEDA PEDIR COSAS AL SERVIDOR

//Si hacemos el 'npm start' desde NODE, se ejecuta en el 3001
//Si hacemos el 'npm start' desde REACT (carpeta client), se ejecuta en el 3000

//Borramos la carpeta .git de la carpeta 'client' (será una carpeta oculta)
//De esta forma podemos subir todo el proyecto en un conjunto (servidor y cliente)

//Añadimos en el package.json del SERVIDOR (en 'scripts'):
//"build" : "cd client && npm install && run build"
//De esta forma se compilará el REACT, así como generar HTML's por cada componente (como si no viniera de REACT)
//Para subirlo a GitHub, quitalo y en el build de render pones: "cd client && npm install && npm run build"

//Desde local, podemos compilar REACT también con este comando:
//npm run build
//HAZLO DESDE LA PÁGINA DEL CLIENTE

// Hacer que node sirva los archivos de nuestro app React
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Manejar las peticiones GET en la ruta /api
app.get("/api", (req, res) => {
  res.json({ message: "SOY YO" });
});

// Todas las peticiones GET que no hayamos manejado en las líneas anteriores retornaran nuestro app React
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

//Main
app.listen(PORT, () => {
    console.log('Puerto escuchando en el puerto ' + PORT);
});