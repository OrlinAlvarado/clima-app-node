const axios = require('axios');
const location = require('../data/location.json');

const getLugarLatLng = async ( dir ) => {
    const instance = axios.create({
        baseURL: `https://devru123-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ dir }`,
        headers: {
            'x-rapidapi-key': 'cf5d0e49f2mshee68fe5d839ee3ep19261bjsnfc4dd34a3d12',
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'useQueryString': true
        }
    });
    
    const resp = await instance.get();
    let data;
    if(!resp.data.Results || resp.data.Results.length === 0){
        data = location[0];
        //throw new Error(`No hay resultados para ${ direccion }`);
    }

    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    
    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}
