const goodReadsCrud = require('./crudAuthors');

/* const goodReadsCrud = {
    listAuthors,
    getAuthor,
    createAuthor,
    patchAuthor,
    deleteAuthor
}; */

// Listo mis Authors
//goodReadsCrud.listAuthors();
//goodReadsCrud.getAuthor(14330);

//Crear un Author
const jsonSend = {
    name: "Rin",
    last_name: "Okumura",
    nacionalidad: "MX",
    biography: "Demonic Exorcist",
    gender: "M",
    age: 16,
    is_alive: true
};
goodReadsCrud.createAuthor(jsonSend);