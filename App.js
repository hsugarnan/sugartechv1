import logo from './logo.svg';
import React from 'react';
import './App.css';
import Login from './login.jsx'
import Navsugar from './navsugar.jsx'
import sugartech from './sugartech.jpeg'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

import {auth} from "./firebase/init.js"

function App() {

  
  return (
    <div className="App">
      <Navsugar user = "email" />
      <Login/>

    </div>
  );
}

export default App;
