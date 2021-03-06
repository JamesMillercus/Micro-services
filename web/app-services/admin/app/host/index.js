//** SET UP ALL VARIABLES **//
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);


//** SERVE PUG FILES **//
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

//** SERVE ASSETS **//
app.use(express.static(__dirname + '/../client/build'));

//** SETUP SERVICES **//
require('./services/sockets')(io);

//** SET ACCOUNT ROUTE **//
require('./routes/adminRoutes')(app);

http.listen(process.env.PORT || 3000);