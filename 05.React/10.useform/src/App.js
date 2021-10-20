import React,{useEffect,useState} from 'react';
import useForm from './Hook/useForm';
import './App.css';

function App() {

  //! ESTO ES UNA MALA PRACTICA:
  // const [nombre, setNombre] = useState['']
  // const [apellido, setApellido] = useState['']
  // const [edad, setEdad] = useState['']
  // const [correo, setCorreo] = useState['']

  const [datos, setDatos] = useState({});

  useEffect(()=>{ //useEffect va a simluar una llamada a la API
    setTimeout(()=>{ 
      const info = {
        //JSON que  manda el backend
        "nombre": "Iro",
        "apellidos": "Vi",
        "edad": "31",
        "genero": "F",
        "email": "ram.villarr@gmail.com",
        "password": "123abcd"
      }
      setDatos(info)
    },1000)
  },[]) //son nuestras dependencias, escuchan si hay cambios en el estado o en los props

  console.log("Este es el valor de la API", datos)

  const sendData = (data) =>{ //aca simulamos que mandamos la info a la API
    console.log("Esta es mi data final: ", data)
  };

  const {input, handleInputChange, handleSubmit} = useForm(sendData,datos) //custom Hooks, podemos compartir logica entre componentes

  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}> {/* onSubmit se usa el evento cuando mandamos la info del formularo */}
        <input 
          type="text"
          name="nombre"
          onChange={handleInputChange}
          value={input.nombre}
          placeholder="tu nombre"
        />

        <input 
          type="text"
          name="apellidos"
          onChange={handleInputChange}
          value={input.apellidos}
          placeholder="tu apellido"
        />

        <input 
          type="email"
          name="email"
          onChange={handleInputChange}
          value={input.email}
          placeholder="tu email"
        />

        <input 
          type="password"
          name="password"
          onChange={handleInputChange}
          value={input.password}
          placeholder="tu password"
        />

        <select 
          name="genero" 
          onChange={handleInputChange}
          value={input.genero}>
            <option value=""> Elige un genero </option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
        </select>

        <input 
          type="number"
          name="edad"
          onChange={handleInputChange}
          value={input.edad}
          placeholder="tu edad"
        />

        <button type="submit"> Enviar </button>

      </form>
    </div>
  );
}

export default App;
