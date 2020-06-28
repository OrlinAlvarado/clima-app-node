// const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de las ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     });

// clima.getClima(argv.direccion)
//     .then( resp => {
//         console.log(resp);
//     })
//     .catch(err => {
//         console.log('Error!!!!', err);
//     })


const getInfo = async ( direccion ) => {
    

    try {
        const temp = await clima.getClima( direccion );
        return `El clima de ${ direccion } es de ${ temp } °C`;
            
    } catch (error) {
        throw new Error(`No se pudo determinar el clima para ${ direccion }`);
    }

}


getInfo( argv.direccion )
    .then( console.log )
    .catch( console.error );




