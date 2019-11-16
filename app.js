var express = require("express"),
  path = require("path"),
  app = express();

var port = process.env.PORT || 3000;

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

var server = app.listen(port, function() {
  console.log("The server is running on http://localhost:" + port);
});
