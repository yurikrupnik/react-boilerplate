import { renderToString } from 'react-dom/server';
// import { StaticRouter, matchPath } from 'react-router';
import { StaticRouter, matchPath } from 'react-router-dom';
import React from 'react';

const render = (App, routes) => (req, response, next) => {
    // const isMobile = false;
    const activeRoute = routes.routes
        .find(route => matchPath(req.url, route)) || {};
    const promise = activeRoute.fetch ?
        activeRoute.fetch() :
        Promise.resolve([]);

    return promise
        .then((res) => {
            let appData = {};
            if (res.length && Array.isArray(activeRoute.providers)) {
                appData = activeRoute.providers.reduce((acc, nextProvider, i) => {
                    acc[nextProvider] = Array.isArray(res[0]) ? res[i] : res;
                    return acc;
                }, appData);
            }
            const context = {
                data: appData
            };
            // const modules = {};
            const title = 'my title';
            const html = renderToString((
                <StaticRouter
                    location={req.url}
                    context={context}
                >
                    <App userAgent={req.headers['user-agent']} />
                </StaticRouter>
            ));
            console.log('html', html);
            console.log('appData', appData);
            const state = { title, html, appData };
            return context.url ? response.redirect(301, context.url) : response.render('index', state);
        })
        .catch(err => {
            console.log('err', err.stack); // eslint-disable-line no-console
            return next(err);
        });
};

export default render;
