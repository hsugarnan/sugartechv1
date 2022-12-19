import logo from './logo.svg';
import React from 'react';
import './App.css';
import Login from './login.jsx'
import Navsugar from './navsugar.jsx'
import Footer from './footer';
import sugartech from './sugartech.jpeg'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import ExcelIntegration from './xlsx.jsx'
import {auth} from "./firebase/init.js"

function App() {

  
  return (
    <div className="App">
      <Navsugar user = "email" />
      <div className = "mainHolder"><Login/></div>
      <Footer/>

      {/* <ExcelIntegration/>  */}




    </div>
  );
}

export default App;
