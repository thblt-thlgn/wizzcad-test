import * as express from 'express';
import { SERVER_PORT } from './environment';
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Success' });
});

app.listen(SERVER_PORT, function () {
  console.log(`Server running on ${SERVER_PORT}!`);
});
