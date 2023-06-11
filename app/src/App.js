import { BrowserRouter, Navigate,Route,Routes } from "react-router-dom";
import Principal from "./pages/Principal";
import Gastronomia_Quetzalteca from "./pages/Gastronomia_Quetzalteca";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Principal/>}/>
      <Route path='/gastronomia_Quetzalteca' element={<Gastronomia_Quetzalteca/>}/>
      <Route path="*" element={<Navigate to="/" replace={true} /> } exact={true} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
