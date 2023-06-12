import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Gallery from './pages/gallery';
import Principal from "./page/Principal";
import MenuPrincipal from "./pages/principal";
import Gastronomia_Quetzalteca from "./pages/Gastronomia_Quetzalteca";
import Sobre_nosotros from "./pages/Sobre_nosotros";
import Direcciones from './pages/Direcciones';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Principal />} />
        <Route path='/menuPrincipal' element={<MenuPrincipal></MenuPrincipal>} />
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/principal" element={<Principal />}></Route>
        <Route path="/address" element={<Direcciones></Direcciones>} />
        <Route path='/gastronomia_Quetzalteca' element={<Gastronomia_Quetzalteca/>}/>
        <Route path='/sobre_nosotros' element={<Sobre_nosotros/>}/>
        <Route path="*" element={<Navigate to="/" replace={true} /> } exact={true} />
      </Routes>
    </BrowserRouter>
  );
  }
export default App;
