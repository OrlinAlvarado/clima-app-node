const axios = require('axios');

const getClima = async ( dir ) => {
    
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=ef2b7d3d5da183dc809c184a5fa66ed8&units=metric&q=${ dir }`);

    if(resp.data)
    return resp.data.main.temp;

}

module.exports = {
    getClima
}