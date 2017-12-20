const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors({credentials: true, origin: true}));
app.use(express.static(__dirname + '/'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);

console.log("server started");