'use strict';

const Hapi = require('hapi');
const Joi = require('joi');

const server = Hapi.server({
    host: 'localhost',
    port: 3000
});

//routes
server.route(require('./src/routes/getEarthquakeDetailsRoute'));
server.route(require('./src/routes/getEarthquakesRoute'));

const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();