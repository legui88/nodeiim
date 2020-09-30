const express = require('express');
const app = express();
const port = 3000

require('./loaders')(app)

app.listen(port, function() {
  console.log(`Server démarré sur http://localhost:${port}`);
})