const express = require('express') // Appel de la dépendance
const app = express() // Initialisation de l'application
const hostname = '127.0.0.1';
const port = 3000 // Choix du port
const path = require('path');

const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/accueil.html'))
    app.use(express.static(__dirname + '/public'))
});

app.get('/Download', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/download.html'))
    app.use(express.static(__dirname + '/public'))
});

app.get('/Informations', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/information.html'))
    app.use(express.static(__dirname + '/public'))
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});