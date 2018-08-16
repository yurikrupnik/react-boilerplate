import path from 'path';
import mongoose from 'mongoose';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { port, databaseUrl } from './config';
import api from './api';
// import db from './services/db';
import server from './services/socket/server';
import App from './components/App';
import routes from './components/routes';


mongoose.connect(databaseUrl);
const db = mongoose.connection;
mongoose.Promise = global.Promise;
db.on('error', console.error.bind(console, 'connection error:')); // eslint-disable-line no-console
db.on('connected', () => {
    console.log('connected:');
});
db.on('open', () => {
    // we're connected!
    console.log('open');
});
db.once('open', () => {
    // we're connected!
    // console.log('connected to b');
    console.log('open once ');
});
db.once('disconnected', () => {
    // we're connected!
    console.log('disconnected');
    // console.log('disconnected');
});

const app = express();
const assets = path.resolve(__dirname, 'assets');
app.use(express.static(assets));
app.use(morgan('dev'));
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'assets'));

// app.use(db(databaseUrl));
app.use(api);

app.use((req, res) => {
    const context = {};
    const { url } = context;
    const title = 'my title';
    const html = renderToString(
        <StaticRouter context={context}>
            <App routes={routes} />
        </StaticRouter>
    );
    const state = { title, html };
    return url ? res.redirect(301, url) : res.render('index', state);
});

server(app).listen(port, (err) => {
    if (err) {
        console.log('err', err); // eslint-disable-line no-console
    } else {
        console.log(`running at port: ${port}`); // eslint-disable-line no-console
    }
});
