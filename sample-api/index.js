'use strict';

const Hapi = require('hapi');
const Joi = require('joi');

const server = Hapi.server({
    host: 'localhost',
    port: 3001
});

//routes
server.route(require('./routes/getEarthquakeDetailsRoute'));

const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();