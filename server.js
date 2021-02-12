const express = require('express') // Appel de la dépendance
const app = express() // Initialisation de l'application

const port = process.env.PORT || 8080 // Choix du port


app.use(express.static(__dirname))


app.get('/', (req, res) => {
    res.render("./public/html/accueil");
});

app.get('/Download', (req, res) => {
    res.render("./public/html/download");
});

app.get('/Informations', (req, res) => {
    res.render("./public/html/information");
});


app.listen(port, function() {
    console.log(`app running`)
});