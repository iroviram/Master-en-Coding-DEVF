import React from 'react';

function Starships(ships){
    const array = () =>{
        return (ships.map((ship,index)=><p key={index}>{ship.name}</p>)
        )}

    console.log(array);

    return(
        <div>
            {array()}
        </div>
    )
}

export default Starships;