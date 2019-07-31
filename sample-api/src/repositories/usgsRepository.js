const rp = require('request-promise');
const config = require('../../config');

const USGSRepository = {
    getEarthquakeDetails:async(earthQuakeId)=>{
        //TODO: figure out this route
        // const options = {
        //     uri:config.usgsPublicApi + `/details/${earthQuakeId}`,
        //     method:'GET'
        // };
        // const result = await rp.get(options.uri,options);
        // return result;
        let result = await new Promise((resolve,reject)=>{resolve('earthquake id requested was: '+ earthQuakeId)});
        return result;
    },
    getEarthquakes:async()=>{
        const options = {
            uri:config.usgsPublicApi,
            method:'GET',
            json:true
        };
        const result = await rp.get(options.uri,options);
        return result;
    }
};
module.exports = USGSRepository;