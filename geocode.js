const request = require('request');



const geocode = (address, callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoicmFuaml0aDA5MyIsImEiOiJjanZsN255Y3Ywd2x4M3pzMnZydjQzcG5qIn0.1aGkNX1XEQ7ITfNtOhlPfw&limit=1'
    request({url: url, json:true}, (error, { body } )=>{
        if(error){
            callback("Unable to connect to services", undefined);
        }else if(body.features.length === 0){
            callback("Unable to find location, try another search", undefined)
        }
        else{
            callback(undefined, {
                longitude : body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
            
        }
    })  

}


module.exports = geocode