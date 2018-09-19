const port = Number(process.env.PORT) || 5000;
const ip = process.env.IP || '0.0.0.0' || 'localhost';
const host = process.env.WEBSITE_HOSTNAME || `http://${ip}:${port}`;
const devPort = port + 1;
const devHost = `http://${ip}:${devPort}`;
// const databaseUrl = 'mongodb://localhost/react-boilerplate';
const databaseUrl = 'mongodb://localhost/react-boilerplate';
// ? 'mongodb://localhost/react-boilerplate'
// : 'mongodb://db';

// console.log('process.env', process.env);
console.log('process.env.SHIT', process.env.SHIT); // eslint-disable-line no-console
console.log('process.env.PORT', process.env.PORT); // eslint-disable-line no-console
console.log('process.env.ip', ip); // eslint-disable-line no-console
console.log('host', host); // eslint-disable-line no-console
console.log('process.env.NODE_ENV', process.env.NODE_ENV); // eslint-disable-line no-console
module.exports = {
    port,
    host,
    devPort,
    devHost,
    databaseUrl
};
