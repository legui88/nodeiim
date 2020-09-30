const express = require('express');
const path = require('path');
const app = express();
const port = 3000

require('./loaders')(app)


app.listen(port, function() {
  console.log('Server démarré sur http://localhost:${port}');
})