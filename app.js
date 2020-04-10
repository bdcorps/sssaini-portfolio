var express = require("express"),
  path = require("path"),
  app = express(),
  bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

var server = app.listen(PORT, HOST, function() {
  console.log("The server is running on http://localhost:" + PORT);
});
