const Joi = require('joi');
const usgsRepo = require('../repositories/usgsRepository');

const getEarthQuakeDetailsRoute = {
    method: 'GET',
    path: '/earthquakes/{id}',
    options:{
        validate:{
            params:{
                id: Joi.string().required()
            }
        }
    },
    handler: async function (request, h) {
        try{
            const res = await usgsRepo.getEarthquakeDetails(request.params.id)
            return h.response(res).code(200);
        }
        catch(err){
            return h.response(`An error occured: ${JSON.stringify(err)}`).code(500);
        };
    }
};
module.exports = getEarthQuakeDetailsRoute;