var express = require("express");
var path = require("path");

var app = express();

app.use("/", express.static(path.join(__dirname, "build")));
app.use("/static", express.static(path.join(__dirname, "build")));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(6082);
  console.log("Express started on port 6082");
}
