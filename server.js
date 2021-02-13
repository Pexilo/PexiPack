const express = require('express') // Appel de la dépendance
const app = express() // Initialisation de l'application

var port = process.env.PORT || 8080 // Choix du port
const path = require('path');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res, next) {

    switch (req.url) {

        case '/':
            res.sendFile(path.join(__dirname + '/public/html/accueil.html'));
            break;
        case '/MesFiches':
            res.sendFile(path.join(__dirname + '/public/html/download.html'));
            break;
        default:
            res.sendFile(path.join(__dirname + '/public/html/information.html'));
            break;
    }

});


app.listen(port, function() {
    console.log(`app running on ${port}`)
});