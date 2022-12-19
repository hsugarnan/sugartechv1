import { useRef, useState, useEffect } from 'react';
import './nav.css'
import sugartech from './sugartech.jpeg'


function  Navsugar( {user} ){
    let PFP = user.charAt(0)

    return(
        <div className = "navbar">
         <div className="logo">
            <img src={ sugartech } alt="logo" />
        </div>
         <div className = "pfpWrapper">
         </div>
        </div>


    )
    


    

}


export default Navsugar