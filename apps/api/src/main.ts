const express = require('express');
const cors = require('cors');
const router = require('./router');
const errorHandler = require('./middleware/error.middleware');
import { dbConnection } from './models/dbConnection';
// import { errorHandler } from "./middleware/error.middleware";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);

dbConnection().then(() => {
  const port = process.env.port || 3333;
  const server = app.listen(port, () => {
    console.log('Listening at http://localhost:' + port);
  });
  server.on('error', console.error);
}).catch((error) => {
  console.log("ERROR: ", error);
});


export { };
