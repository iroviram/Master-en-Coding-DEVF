import React from 'react';
import SearchBar from './Components/SearchBar';
import IssueItem from './Components/IssueItem';
import axios from 'axios';
import './App.css';

class App extends React.Component{
  state={
    results:[]
  }

  sendSearch=(search)=>{
    const apiURI = 'https://api.github.com/repos/facebook/react/issues';
    axios.get(apiURI)
      .then((response)=>{
        console.log(response.data)
        this.setState({results:response.data}) //debe tener el objeto
      })
      .catch((err)=>{console.log(err);
      })
  }

  componentWillMount(){
    console.log('1. ANTES DE QUE SE EJECUTE EL RENDER')
  }

  componentDidMount(){
    console.log('3. Despues del Render')
  }

  render(){
    console.log('2. Se ejecuta al realizar el render')

    return(
      <div className="App">
        <SearchBar emitSearch={this.sendSearch}/>
        <div className="item-lines">
          {
            this.state.results.map(item =>(<IssueItem title={item.title} url={item.html_url} labels={item.label.data.name}/>))
          }
        </div>
      </div>
    )
  }
}

export default App
