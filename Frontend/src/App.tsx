import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return ( 

    <BrowserRouter> 
    <Routes>
      <Route path ="/" element= {<Register />} />
      <Route path ="/login" element = {<Login />} />
   </Routes>
   </BrowserRouter>

);
}
export default App;