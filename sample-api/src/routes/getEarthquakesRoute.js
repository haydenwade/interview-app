const usgsRepo = require('../repositories/usgsRepository');

const getEarthquakesRoute = {
    method: 'GET',
    path: '/earthquakes',
    handler: async function (request, h) {
        try{
            const res = await usgsRepo.getEarthquakes()
            return h.response(res.features).code(200);
        }
        catch(err){
            return h.response(`An error occured: ${JSON.stringify(err)}`).code(500);
        }
    }
};
module.exports = getEarthquakesRoute;