import React from 'react';
import User from './User';
//import WithCurrentUser from './WithCurrentUser';
//import ListUser from './ListUser';
import WithUserId from './WithUserId';
import './App.css';

function App() {

  //? AQUI VAMOS A CREARE NUESTRO HIGHER ORDER COMPONENT (HOC)
                    //Logica        //disenio
  // const CurrentUser = WithCurrentUser(User) //teniamos al usuario con id: 1
  const SpecificUser = WithUserId(User)

  return (
    <>
      
      {/*<CurrentUser/>*/}
      <SpecificUser userId={1}/>
      <SpecificUser userId={2}/>
    </>
  );
}

export default App;
