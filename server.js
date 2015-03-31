var express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app); 


app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.get('/', function(req, res,next) {
  var rand = Math.random();
  console.log(rand);
  res.send("random: " +rand);
});


server.listen(3001, function() {
  console.log("Node server running on http://localhost:3001");
});