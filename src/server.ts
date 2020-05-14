import 'reflect-metadata';
import './app/database';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { routes } from './app/routes/index';

const corsOptions = {
    origin: '*', //Change this to the URL of frontend
    optionsSuccessStatus: 200
}

const app = express();

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(routes);

const serverPort = process.env.PORT || 3000;

app.listen(serverPort, () => {
    console.log(`Server is listening on port ${serverPort}`)
});