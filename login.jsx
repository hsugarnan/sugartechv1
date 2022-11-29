import { useRef, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import {auth} from "./firebase/init.js"

import React from 'react';


const handleSubmit = async (e) => {
    e.preventDefault()//dont reload the page
    
}




function Login(){
    React.useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          console.log(user);
          if (user){
            setUser(user)
          }
        })
        },  []);
    
      function register(){
        console.log('register')
        createUserWithEmailAndPassword(auth, user, pwd)
         .then(({user})=> {
          console.log(user)
          setUser(user)
         })
         .catch((error) => {
          console.log(error)
         })
      }
    
    
      function logout(){
        signOut(auth)
        setUser({})
      }
      function login(){
        if (Auth === 2341){
          signInWithEmailAndPassword(auth, user, pwd)
          .then((user) => {
           console.log(user)
          })
          .catch((error) => {
           console.log(error)
          })
        }

      }

    const [user, setUser] = useState('')

    const [pwd, setPwd] = useState('')

    const [errMsg, setErrMsg] = useState('')
    const [Auth, setAuth]  = useState()

    const [success, setSuccess] = useState(false);
    return(
        <section> {/* ref={errRef} changes teh focus to the err message and aria-live akes it assertive on screenreaders */} 
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input 
                 type="text" 
                 id="username"
                 onChange = {(e)=> setUser(e.target.value)} 
                 value = {user}
                 required
                />
               
               
               
                <label htmlFor="password">Password:</label>
                <input 
                 type="password" 
                 id="password"

                 onChange = {(e)=> setPwd(e.target.value)} 
                 value = {pwd}
                 required
                />

                <label htmlFor="Auth"> Auth Code:</label>
                <input 
                 type="text" 
                 id="Auth"

                 onChange = {(e)=> setAuth(e.target.value)} 
                 value = {Auth}
                 required
                />
                <button onClick={register}>Register</button>
                <button onClick={login}>Sign In</button>
                <button onClick={logout}>Log Out</button>
                <p>{ user.email }</p>
            </form>


        </section>

    )




}

export default Login