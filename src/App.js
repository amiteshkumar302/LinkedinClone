import React from 'react';
import './App.css';
import Home from './Pages/Home'
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes,
} from "react-router-dom";
import ForgotPassword from './Components/ForgotPassword';
import Job from './Pages/Job';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="SignIn" element={<SignIn/>}></Route>
        <Route path="SignUp" element={<SignUp/>}></Route>
        <Route path="ForgotPassword" element={<ForgotPassword/>}></Route>
      </Routes>
    </Router>
      
    
  
    
    
       
    
  );
}

export default App;
