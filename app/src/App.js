import { BrowserRouter, Navigate,Route,Routes } from "react-router-dom";
import Principal from "./pages/Principal";
import Gastronomia_Quetzalteca from "./pages/Gastronomia_Quetzalteca";
import Sobre_nosotros from "./pages/Sobre_nosotros";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Principal/>}/>
      <Route path='/gastronomia_Quetzalteca' element={<Gastronomia_Quetzalteca/>}/>
      <Route path='/sobre_nosotros' element={<Sobre_nosotros/>}/>
      <Route path="*" element={<Navigate to="/" replace={true} /> } exact={true} />
    </Routes>
    </BrowserRouter>
  );
  }
export default App;
