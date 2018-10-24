import React from 'react';
import { render, hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './routes/App';
import './styles/_index.scss';

const renderMethod = module.hot ? render : hydrate;

renderMethod(
    <BrowserRouter>
        <App userAgent={global.navigator.userAgent} />
    </BrowserRouter>, global.document.getElementById('root')
);
