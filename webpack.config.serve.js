const convert = require('koa-connect');
const proxy = require('http-proxy-middleware');
const history = require('connect-history-api-fallback');
const cors = require('cors');
const { host, port } = require('./src/config');

module.exports = require('./webpack.config.client');

module.exports.serve = {
    content: [__dirname],
    open: false,
    port: port + 1,
    add: (app) => { // app, middleware, options
        app.use(convert(cors()));
        app.use(convert(proxy('/api', { target: host })));
        app.use(convert(history({ index: '/index.ejs' })));
    }
};
