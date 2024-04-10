import express from 'express';
import * as path from 'path';
import dotenv from "dotenv";

dotenv.config({
  path: path.join(__dirname,'..','..','gal-lib','.env'),
})

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.post('/auth', (req, res) => {
  res.send({ message: 'Welcome to gal-backend!' });
});

app.get('/ping', (req, res) => {
  res.send({ message: 'pong' });
});

app.use((req, res, next) => {
  res.status(404).send("Not found")
})

const port = process.env.API_PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/ping`);
});

server.on('error', console.error);
