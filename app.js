var fs = require('fs'),
  http = require('http'),
  https = require('https'),
  privateKey = fs.readFileSync('./sslcert/artolanggeng.local.key', 'utf8'),
  certificate = fs.readFileSync('./sslcert/artolanggeng.local.crt', 'utf8'),
  credentials = { key: privateKey, cert: certificate },

  express = require('express'),
  exphbs = require('express-handlebars'),
  path = require('path'),
  app = express(),

  Def = require('./routes/default/home'),
  global = require('./routes/default/global'),
  detail = require('./routes/more/detail'),
  media = require('./routes/storage/media'),

  httpServer = http.createServer(app),
  httpsServer = https.createServer(credentials, app);

app.use(express.static(path.join(__dirname, 'public')));

// setup routes
app.use('/', Def);
app.use('/global', global);
app.use('/detail', detail);
app.use('/media', media);
app.set('Storyblok', 'views')

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  partialsDir: 'views/components/'
}))

app.set('view engine', '.hbs')
app.set('views', 'views')

// set the port
app.set('port', (process.env.PORT || 41017));

// start the server
app.listen(app.get('port'), function () {
  console.log('Server running on port ' + app.get('port'));
});

// your express configuration here
httpServer.listen(8080);
httpsServer.listen(8443);