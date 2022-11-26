const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);


const port = process.env.port || 3333;

const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port);
});
server.on('error', console.error);

export { }