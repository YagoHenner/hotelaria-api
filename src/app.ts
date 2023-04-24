import express, { Application } from 'express';
import bodyParser from 'body-parser';
import config from './config';
import mainRouter from './routes';
import cors from "cors";

const app: Application = express();

app.use(cors({
origin: "*",
optionsSuccessStatus: 200
}))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', mainRouter);

app.listen(config.port, () => {
  console.log(`Servidor iniciado na porta ${config.port}`);
});