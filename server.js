var express = require('express'),
    http = require('http'),
    path = require('path');

var app = express();
var basedir = path.join(path.dirname(__dirname), 'connectSchool');

app.use('/bower_components', express.static(basedir + '/bower_components', {maxAge: ;'7d'})); // 10 sec.
app.use('/app/styles', express.static(basedir + '/app/styles', {maxAge: 1000*10})); // 10 sec.
app.use(express.static(basedir + '/app', {maxAge: 1000*10}));
app.use(express.static(basedir + '/dist', {maxAge: 1000*10}));

var httpServer = http.createServer(app);
httpServer.listen(80, function() {
    console.log('Listening http on port 80');
});
