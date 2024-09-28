import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" /> 
    </div>
  );
};

export default App;
