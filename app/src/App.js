import './App.css';
import { BrowserRouter, Navigate,Route,Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<Navigate to="/" replace={true} /> } exact={true} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
