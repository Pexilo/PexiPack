const express = require("express"); // Appel de la dépendance
const app = express(); // Initialisation de l'application
const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const redirectToHTTPS = require("express-http-to-https").redirectToHTTPS;

app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get("*", (req, res, next) => {
  switch (req.url) {
    case "/":
      res.sendFile(path.join(__dirname + "/public/html/accueil.html"));

      fs.readFile(
        path.join(__dirname, "public/data/visitorCount.json"),
        "utf8",
        function (err, data) {
          if (err) throw err;
          var json = JSON.parse(data);
          json.visitorCount = json.visitorCount + 1;
          var newJson = JSON.stringify(json);
          fs.writeFile(
            path.join(__dirname, "public/data/visitorCount.json"),
            newJson,
            "utf8",
            function (err) {
              if (err) throw err;
            }
          );
        }
      );

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

const optionSSL = {
  key: fs.readFileSync("cert/_.pexipack.com_private_key.key"),
  cert: fs.readFileSync("cert/pexipack.com_ssl_certificate.cer"),
};

https.createServer(optionSSL, app).listen(443, () => {
  console.log("PexiPack server listening on port 443");
});

http.createServer(app).listen(80, () => {
  console.log("PexiPack server listening on port 80");
});
