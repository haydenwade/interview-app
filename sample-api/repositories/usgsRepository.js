const rp = require('request-promise');
const config = require('../config');

const USGSRepository = {
    getEarthquakeDetails:(earthQuakeId)=>{
        //TODO: update config with usgs base url and uncomment below code
        // const options = {
        //     uri:config.usgsPublicApi + `/details/${earthQuakeId}`,
        //     method:'GET'
        // };
        // return rp(options);
        return new Promise((resolve,reject)=>{resolve('earthquake id requested was: '+ earthQuakeId)});
    }
};
module.exports = USGSRepository;