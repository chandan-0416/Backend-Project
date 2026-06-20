import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";
import Home from "./pages/Home.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile.tsx";

function App() {
  return ( 

    <BrowserRouter> 
    <Routes>
      <Route path ="/" element= {<Home /> } />
      <Route path ="/Register" element= {<Register />} />
      <Route path ="/login" element = {<Login />} />
      <Route path="/profile" element ={<Profile />}   /> 
   </Routes>
   </BrowserRouter>

)
}
export default App;