const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const app = express();
const port = 3000;

routerApi(app);

app.listenerCount(port, () => {
  console.log('Mi port' + port);
})
