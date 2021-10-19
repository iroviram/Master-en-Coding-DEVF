import React from 'react';
import ReactDOM from 'react-dom';
/*Importar BrowserRouter, que dota mi App de poder manejar rutas
Debe estar en un componente superior (App.js o index.js), para que este disponible e toda
mi aplicacion */
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
