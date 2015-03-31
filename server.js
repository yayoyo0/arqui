var express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app); 


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app.configure(function () {
  app.use(allowCrossDomain);
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.get('/random', function(req, res,next) {
  var rand = Math.random();
  console.log(rand.toString());
  res.send(rand.toString());
});


server.listen(3001, function() {
  console.log("Node server running on http://localhost:3001");
});