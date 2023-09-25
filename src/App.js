import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import Foremployer from "./Foremployer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForRecruiter from "./ForRecruiter";
import Forjobseeker from "./Forjobseeker";
import FAQS from "./FAQS";
import Aboutus from './Aboutus';
import Login from './Login';
import Registration from "./Registration";
import Footer from "./Footer";
import Header from './Header';
import Sucess from "./Sucess";
import Asection from "./Asection";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Foremployer" element={<Foremployer  />} />
        <Route path="/ForRecruiter" element={< ForRecruiter />} />
        <Route path="/Forjobseeker" element={<Forjobseeker />} />
      <Route path ="/Aboutus" element={<Aboutus/>}/>
      <Route path ="/FAQS" element ={<FAQS />}/>
      <Route path ="/Login" element ={<Login/>}/>
      <Route path ="/Registration" element ={<Registration/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

function Home() {
  return (
    <div>
      <ul>
      <h2> Infosecure</h2>
      <li><a href="/Foremployer">For employer</a></li>
      <li><a href="/ForRecruiter" >For Recruiter</a></li>
      <li><a href="/Forjobseeker" >For jobseeker</a></li>
      <li><a href ="Aboutus">About us</a></li>
      <li><a href="/FAQS">FAQ's</a></li>
      <li><a href="/Login">Login</a></li>
      <li><a href ="Registration"> <Button>Registration</Button></a></li>
      </ul>
      <Header/>
      <Asection/><br/>
      <Sucess/><br/>
      <Footer/>
    </div>
    
  );
}

export default App;
