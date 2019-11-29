const express = require('express');
const path = require('path')
const app = express();

const PORT = 5000;

app.use("/", express.static(path.join(__dirname, "public")))
app.use('/static/css/*', express.static(path.join(__dirname, 'public'), {
    setHeaders: function(res, path) {
      res.type("text/css");
    }
  }));
  app.use('/static/js/*', express.static(path.join(__dirname, 'public'), {
    setHeaders: function(res, path) {
      res.type("text/javascript");
    }
  }));
  app.use('/static/media', express.static(path.join(__dirname, 'public'), {
    setHeaders: function(res, path) {
      res.type("jpg");
      res.type("png");
      res.type("svg");
    }
  }));

app.get("*", (req,res)=> res.sendFile(path.join(__dirname, "./public", "index.html")));

app.listen(PORT);