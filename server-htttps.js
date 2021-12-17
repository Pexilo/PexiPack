let express = require("express"); // Appel de la dépendance
let app = express(); // Initialisation de l'application
let https = require("https");
let fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

let port = process.env.PORT || 8080; // Choix du port

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get("*", function (req, res, next) {
  switch (req.url) {
    case "/":
      res.sendFile(path.join(__dirname + "/public/html/accueil.html"));
      break;
    case "/Download":
      res.sendFile(path.join(__dirname + "/public/html/download.html"));
      break;
    case "/Information":
      res.sendFile(path.join(__dirname + "/public/html/information.html"));
      break;
    default:
      res.sendFile(path.join(__dirname + "/public/html/accueil.html"));
      break;
  }
});

https
  .createServer(
    {
      key: fs.readFileSync("cert/server.key"),
      cert: fs.readFileSync("cert/server.cer"),
    },
    app
  )
  .listen(port, function () {
    console.log(`Pexipack running on port ${port}`);
  });
