import './App.css';
import { BrowserRouter, Navigate,Route,Routes } from "react-router-dom";
import Principal from './page/Principal';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/principal" element={<Principal/>} />
      <Route path="*" element={<Navigate to="/" replace={true} /> } exact={true} />
    </Routes>
    </BrowserRouter>
  );
  }
export default App;
