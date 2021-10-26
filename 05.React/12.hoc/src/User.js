import React from 'react'

//MI COMPONENTE USER

const User = ({user}) => { //user es un prop, es un objeto
    return (
        <div>
            {/* CON ESTE RENDER VAMOS A RENDERIZAR UN USUARIO EN ESPECIFICO */}
            <h1>
                {user.name}<br/>
                {user.username}<br/>
                {user.address.street}<br/>
                {user.phone}<br/>
                {user.website}
            </h1>

            <span>
            {user.email}
            </span>

            {/* HASTA EL MOMENTO NO HEMOS USADO HOC (HIGHER ORDER COMPONENT) */}

        </div>
    )
}

export default User
