//* https://swapi.dev/
//? ENDPOINT
//* https://swapi.dev/api/people/1/

//* Paso #1 Necesito llamar a la biblioteca Request

const request = require("request");

// El metodo request.get tiene dos parametros: el endPoint(URL) y el Callback
/* request.get('https://swapi.dev/api/people/1/', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Trae la informacion en formato JSON
    const bodyEnFormatoJSON = JSON.parse(body); //Parse convierte un objeto JSON en un objeto Javascript
    console.log(bodyEnFormatoJSON);
}); */

//* Convirtiendo lo anterior en funcion

function getPeopleById(id1,id2){
    request.get(`https://swapi.dev/api/${id1}/${id2}/`, function (error, response, body) {
        // Si peticion es exitosa, devuelveme la data
        if(response.statusCode === 200){
            const bodyEnFormatoJSON = JSON.parse(body);
            console.log(bodyEnFormatoJSON);
        } else {
            // Si el codigo de estado es cualquier otro, muestrame el mensaje de error
            // console.log("Ocurrio un error:",error)
            console.log(`Ocurrio un error: ${response.statusCode} ${response.statusMessage}`);
        }
    });
}

getPeopleById("people",1);
getPeopleById("people",2);