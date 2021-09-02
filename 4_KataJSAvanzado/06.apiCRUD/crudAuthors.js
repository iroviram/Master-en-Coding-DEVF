//? GOOD READS API
//* DOCUMENTACION: https://goodreads-devf-aaron.herokuapp.com/docs/
//? URI DE LA API: https://goodreads-devf-aaron.herokuapp.com/api/v1/

//* Traigo a Request para poder comenzar a hacer peticiones
const request = require('request');

const URI ='https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';

//? Lista a Todos los Authors
const listAuthors = () =>{
    request.get(URI, (error,response,body)=> {
        if(response.statusCode === 200){
            const authors = JSON.parse(body);
            console.log(authors);
        } else {
            console.log(response.statusCode,response.statusMessage);
            // Ejemplo: 404 Not Found
        }
    })
}

//listAuthors();

//? Listar un Author

const getAuthor = (id) =>{
    request.get(URI+id+'/', (error,response,body)=> {
        if(response.statusCode === 200){
            const author = JSON.parse(body);
            console.log(author);
        } else {
            console.log(response.statusCode,response.statusMessage);
            // Ejemplo: 404 Not Found
        }
    })
}

//getAuthor(14462);

//? Crear un Author
//* Necesito crear un objeto con mmi info a crear

const jsonSend = {
    name: "Rin",
    last_name: "Okumura",
    nacionalidad: "MX",
    biography: "Demonic Exorcist",
    gender: "M",
    age: 16,
    is_alive: true
};

const createAuthor = (jsonData) =>{

    const objConfig = {
        url: URI,
        form: jsonData
    };

    request.post(objConfig, (error,response,body)=> {
        if(response.statusCode === 201){
            const author = JSON.parse(body);
            console.log(author);
        } else {
            console.log(response.statusCode,response.statusMessage);
            // Ejemplo: 404 Not Found
        }
    })
}

//createAuthor(jsonSend);

//? PATCH a un Author

const updatedData = {
    name: "Yukio",
    age: 15
};

const patchAuthor = (id,jsonData) =>{

    const objConfig = {
        url: URI+id+'/',
        form: jsonData
    };

    request.patch(objConfig, (error,response,body)=> {
        if(response.statusCode === 200){
            const author = JSON.parse(body);
            console.log(author);
        } else {
            console.log(response.statusCode,response.statusMessage);
            // Ejemplo: 404 Not Found
        }
    })
}

//patchAuthor(14462,updatedData);

//? DELETE a un Author

const deleteAuthor = (id) =>{
    request.del(URI+id+'/', (error,response,body)=> {
        if(response.statusCode === 204){
            const author = JSON.parse(body);
            console.log("El Author ha sido eliminado exitosamente");
        } else {
            console.log(response.statusCode,response.statusMessage);
            // Ejemplo: 404 Not Found
        }
    })
}

//deleteAuthor(14462);

module.exports = {
    listAuthors,
    getAuthor,
    createAuthor,
    patchAuthor,
    deleteAuthor
};