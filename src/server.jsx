import path from 'path';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { port, databaseUrl } from './config';
import api from './api';
import render from './services/middlewares/render';
import db from './services/db';
import server from './services/socket/server';
import App from './components/App';
import routes from './components/routes';

const app = express();
const assets = path.resolve(__dirname, 'assets');
app.use(express.static(assets));
app.use(morgan('dev'));
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'assets'));

app.use(db(databaseUrl));

app.use(api);

app.use(render(App, routes));

server(app).listen(port, (err) => {
    if (err) {
        console.log('err', err); // eslint-disable-line no-console
    } else {
        console.log(`running at port: ${port}`); // eslint-disable-line no-console
    }
});
