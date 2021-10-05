import React from 'react';

function ListaContactos({lista}){ // Recibe un Arreglo de Contactos [id,nombre,apellido]
    /* Logia */
    const renderContactos = () => {
        return (lista.map((contacto,index)=><p key={index}>{contacto.nombre} {contacto.apellido}</p>)
        )
    }

    /* Vista / Output */
    return(
        <div>
            <h1>Esta es mi lista de contactos:</h1>
            {renderContactos()}
        </div>
    )
}

export default ListaContactos;