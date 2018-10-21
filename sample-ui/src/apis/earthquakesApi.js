import axios from 'axios';
import config from '../config';

const a = axios.create({
    baseURL: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson',//TODO: swap out for our api//config.earthQuakesApi,
    headers: {
        'content-type': 'application/json'
    }
});
const api = {
    getEarthquakes:()=>{
        return new Promise((resolve,reject)=>{
            a.get().then((resp)=>{
            //a.get('/earthquakes').then((resp)=>{ //TODO: use for our api
                //resolve(resp.data);
                resolve(resp.data.features);
            }).catch((err)=>{
                console.log('An error occurred trying to read earthquakes!');
                reject();
            })
        });
    }
};
export default api;