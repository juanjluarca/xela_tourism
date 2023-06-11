import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./pages/principal";
import Gallery from './pages/gallery';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Principal />} />
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/principal" element={<Principal />}></Route>
        {/* <Route path="*" element={<Navigate to="/" replace={true} />} exact={true} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
