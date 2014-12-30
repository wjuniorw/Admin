var express = require('express')
  , routes = require('./routes'),
  bodyParser = require('body-parser');

var app = module.exports = express.createServer();

//Adiciona header que permite requests de outros dominios
var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
};
app.use(allowCrossDomain);
//
//Faz o parser do body para receber parâmetros dos POSTs
app.use(bodyParser());

//Adiciona a pasta public como local dos arquivos estáticos (html, css, js imagens ...)
app.use(express.static('public'));

//Carrega a url principal e envia um arquivo html
app.get('/', function (req, res) {
	res.sendfile(__dirname + '/public/index.html');
});

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

//app.get('/', routes.index);

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
