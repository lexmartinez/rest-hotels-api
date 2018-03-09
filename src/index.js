import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import routes from './routes';
import logger from 'morgan';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(logger('dev'));
app.use(express.static('public'));
app.use('/v1', routes);
app.use(favicon('public/favicon.ico'));

app.listen(port, () => {
  console.log(`REST Hotels API running on http://localhost:${port}`);
});