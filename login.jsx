import { useRef, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import {auth} from "./firebase/init.js"
import './Login.css'

import React from 'react';


const handleSubmit = async (e) => {
    e.preventDefault()//dont reload the page
    
}




function Login(){
    React.useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          // console.log(user);
          if (user){
            setUser(user)
          }
        })
        },  (""));
    
    function register(){
        createUserWithEmailAndPassword(auth, user, pwd)//creates user with certain parameters that have to passed to the user
         .then((user)=> {
          console.log(user)//shows me that the user has been created
          setUser(user)//uses react hooks to set the user to  a hook so it can be used later in the hook 
          console.log('register')//shows me someone has registers
         })
         .catch((error) => {
          console.log('error')// catches the function if an error has occured with firebase.
         })
      }
    
    
    function logout(){ //setUser to nothing and signs out user using firebase funcitons
        signOut(auth)
        setUser()
      }
    function login(){
        if (Auth === '2341'){//implementing AUTH CODE
          signInWithEmailAndPassword(auth, user, pwd)//using google functionality
          .then((user) => {
            alert("Logged In")//alert so user can see (this will be replaced after more of the code has been developed)
          })
          .catch((error) => {
           alert("Error")// Error to show the auth
          })
        }
        else{
          alert('Invalidated Auth')// no error with google but error with user therefore the error is the AUTH code
        }

      }

    const [user, setUser] = useState('')

    const [pwd, setPwd] = useState('')


    const [Auth, setAuth]  = useState('')

    return(
        <section> 
            <h1>Sign In</h1>
           <div className="formWrapper">
            <form onSubmit = {handleSubmit}>
              {/* handle submit stops the page from reloading */}
              <div className="labelWrapper">
                {/* labelWrapper used for css */}
                <label htmlFor="username">Username:</label>
                <input 
                 type="username" 
                 id="username" 
                 className="typein__box"
                 //for css
                 onChange = {(e)=> setUser(e.target.value)} //uses hook to set whatever is in the box to the hook user 
                 value = {user}// so it can be used later
                 required//the user cannot press sign in without being their.
                />
               
               
               
                <label htmlFor="password">Password:</label>
                <input
                 className="typein__box"
                 type="password" 
                 id="password"

                 onChange = {(e)=> setPwd(e.target.value)} 
                 value = {pwd}
                 required
                />

                <label htmlFor="Auth"> Auth Code:</label>
                <input 
                 className="typein__box"
                 type="text" 
                 id="Auth"

                 onChange = {(e)=> setAuth(e.target.value)} 
                 value = {Auth}
                 required
                />
            
                <button  className="button-10" onClick={register}>Register</button>
                <button className="button-10" onClick={login}>Sign In</button>
                <button  className="button-10" onClick={logout}>Log Out</button>
              </div>
                {/* <p>{ user.email }</p> */}
            </form>
           </div>


        </section>

    )




}

export default Login