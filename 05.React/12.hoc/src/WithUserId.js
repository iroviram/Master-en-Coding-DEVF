// VAMOS A TRABAJAR TODA NUESTRA LOGICA
import axios from 'axios';
import React,{useState,useEffect} from 'react';

const WithUserId = ComponentUser => {
    const NewComponent = ({userId, ...props}) => {
        const[user,setUser] = useState(null);

        //* con useEffect podemos iniciar variables, llamadas a APIs
        useEffect(() => {
            axios.get(`http://jsonplaceholder.typicode.com/users/${userId}`)
            .then(resp=>{
                setUser(resp.data)
            })
        },[]) //escucha las dependencias para saber si hay cambios

        if(!user) return "Loading..."

        return <ComponentUser {...props} user={user} /> //* pasamos los props de nuestro usario
    }
    return NewComponent
}

export default WithUserId;