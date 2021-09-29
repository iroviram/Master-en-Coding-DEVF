import React from 'react';

class SearchBar extends React.Component{

    state = {
        search: "", //el estado inicial de mi component es vacio, aun no hemos buscado nada
    }

    render(){
        return(
            <div className="search-bar" style={{margin:40}}>
                <input
                    className="search-input"
                    placeholder="Que deseas buscar?"
                    name="search" 
                    //Event
                    onChange={(event)=>
                        //Se va a ejecutar cada vez que el usuario modifica algo en el input
                        //onChange recibe un callback con el evento y asi saber el valor
                        this.setState({search: event.target.value})
                    }
                    
                />
                <button className="search-button" 

                onClick={()=> this.props.emitSearch(this.state.search)}>
                    Buscar
                </button>
            </div>
        )
    }
}

export default SearchBar