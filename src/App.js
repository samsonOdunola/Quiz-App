import Home from "./home";
import Login from "./Login";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Admin from "./Admin";
function App() {
  return <>
  <Navbar/>
  <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/admin/*" element={<Admin/>}/>
  </Routes>  
  </>
  
  
    

}

export default App;
