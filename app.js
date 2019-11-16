var express = require("express"),
  path = require("path"),
  app = express();

app.set("port", 3000);

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

var server = app.listen(app.get("port"), function() {
  console.log("The server is running on http://localhost:" + app.get("port"));
});
