const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.static(__dirname + '/'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);

console.log("server started");