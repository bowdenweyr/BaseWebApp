var express = require('express');
var app = express();
const Firebird = require('node-firebird');
const { response } = require('express');
var options = {
host : 'EliteBook840G2',
//port : 3050,
database : '\\Ostendo/Database/IndustrialAir/OSTENDO.FDB',
user : 'SYSDBA',
password : 'masterkey',
lowercase_keys : false,
role : null,
pageSize : 4096
};



app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));

// views is directory for all template files
app.set('views', __dirname + '/html');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/ostendo', function (request, response) {
    response.render('pages/ostendo');
});

app.get('/hubSpot', function (request, response) {
    response.render('pages/hubSpot');
});



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});




// This file is what handles incoming requests and
// serves files to the browser, or executes server-side code
