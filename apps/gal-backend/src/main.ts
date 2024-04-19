import express from 'express';
import * as path from 'path';
import dotenv from "dotenv";
import cors from 'cors';
import { authUser, registerUser } from './db';

dotenv.config({
  path: path.join(__dirname,'..','..','gal-lib','.env'),
})

const app = express();
app.use(cors())
app.use(express.json())

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.post('/api/auth', (req, res) => {
  res.send({ message: 'Welcome to gal-backend!' });
});

app.post('/api/auth/register', async(req, res) => {
  const {email, password} = req.body;
  const result = await registerUser(email, password);
  res.send({result});
});

app.post('/api/auth/login', async (req, res) => {
  const {email, password} = req.body;
  const token = await authUser(email, password);
  res.send({token});
});

app.get('/api/ping', (req, res) => {
  res.send({ message: 'pong' });
});

app.use((req, res, next) => {
  res.status(404).send("Not found")
})

const port = process.env.API_PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api/ping`);
});

server.on('error', console.error);
