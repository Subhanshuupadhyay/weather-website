// const request = require('request')


// const geoCode = (address,callback) =>{
    
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Delhi.json?access_token=pk.eyJ1IjoidHBqMTAiLCJhIjoiY2s4c243NWRyMDE4MjNsb203dHdxaml6cSJ9.BWfaFmYgHJnmBSLkN3w-7Q&limit=1'

//     request({url : url, json : true},(error,response)=>{
//         if(error) {
//             callback('Unable to connet to API',undefined)
//         } else if (response.body.features.length == 0)
//         {
//             callback('Unable to find location',undefined)
//         } else {
//             callback(undefined,{
//                 latitude : response.body.features[0].center[0],
//                 longitude: response.body.features[0].center[1],
//                 location: response.body.features[0].place_name
//             })
//         }
//         debugger

//     })
// }

// geoCode('Delhi',(error,data)=>{
//     console.log('Error '+ error)
//     console.log('Data '+ data)
// })

// //module.exports = geoCode

const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidHBqMTAiLCJhIjoiY2s4c243NWRyMDE4MjNsb203dHdxaml6cSJ9.BWfaFmYgHJnmBSLkN3w-7Q&limit=1'

    request({  url, json: true }, (error, {body}={}) => {
        if (error) {
            callback('Unable to connect to services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            //console.log(response.body.features[0].center[0])
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    })
}


module.exports = geocode