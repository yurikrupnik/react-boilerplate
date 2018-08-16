import path from 'path';
import express from 'express';
import morgan from 'morgan';
import { port, databaseUrl } from './config';
import api from './api';
import render from './services/render';
import db from './services/db';
import server from './services/socket/server';
import App from './components/App';
import routes from './components/routes';

const app = express();

app.use(express.static(path.resolve(__dirname, 'assets')));
app.use(morgan('dev'));
app.use(express.json(), express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'assets')); // todo handle productio and start:server paths

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
