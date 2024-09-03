import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../Pages/Login.jsx"
import Registro from "../Pages/Registro.jsx"
import Home from "../Pages/Home.jsx"
import Contact from "../Pages/Contact.jsx"


const Routing = () => {
  return (
    <Router>
     <Routes>
       <Route path="/Login" element={<Login />} />
       <Route path="/Registro" element={<Registro />} />
       <Route path="/Home" element={<Home />} />
       <Route path="/Contact" element={<Contact />} />
     </Routes>
    </Router>
   );
};
export default Routing;



