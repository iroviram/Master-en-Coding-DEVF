import './App.css';
import {useState,useEffect} from 'react';
import Starships from './components/Staships';


function App() {

  const [apiData, setApiData] = useState({}); //Guardar la respuesta de la API

  const test = process.env.REACT_APP_TEST;
  console.log(test);

  const apiUrl = `https://swapi.dev/api/starships/`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res)=>res.json())
      .then((data)=>setApiData(data.results))
  },[apiUrl]);

console.log(apiData)


  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="container">
        <div className="shipCard">
            <div className="shipItem">
                <img src="" alt="" className="shipImage" />
                <div className="shipInfo">
                    <Starships ships={apiData} />
                    <h3 className="shipName"></h3>
                    <span className="shipModel"></span>
                    <span className="shipManufacturer"></span>
                    <span className="shipClass"></span>
                    <ul className="shipTags">
                        <li className="tagMGLT"></li>
                        <li className="tagCrew"></li>
                        <li className="tagHyperdrive_rating"></li>
                    </ul>
                </div>
            </div>
            <div className="votes">
                <button></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App;
