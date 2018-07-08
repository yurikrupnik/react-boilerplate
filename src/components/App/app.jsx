import React from 'react';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Providers from './providers';
import { Provider } from '../contexts/themes';
import apiProviders from '../../api/providers';
import Layout from './layout';

const Router = global.window ? BrowserRouter : StaticRouter;

const App = ({ routes }) => {
    return (
        <Providers providers={apiProviders.concat(Provider)}>
            <Router>
                <Layout routes={routes} />
            </Router>
        </Providers>
    );
};

App.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default App;
