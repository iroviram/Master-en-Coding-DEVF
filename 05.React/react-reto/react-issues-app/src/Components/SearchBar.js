import React from 'react';

class SearchBar extends React.Component{

    state={
        search:""
    }

    render(){
        return(
            <div className="search-bar">
                <input type="text" 
                    className="search-input"
                    placeholder="Search..."
                    name="search"
                    onChange={(event)=>
                        this.setState({search: event.target.value})
                    }
                />
                <button className="search-button" onClick={()=>this.props.emitSearch(this.state.search)}>
                        Search
                </button>
            </div>
        )
    }
}

export default SearchBar