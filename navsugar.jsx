import { useRef, useState, useEffect } from 'react';
import './nav.css'
import sugartech from './sugartech.jpeg'


function  Navsugar( {user} ){
    let PFP = user.charAt(0)

    return(
        <div className = "navbar">
         <img src={ sugartech } alt="logo" />
         <div className = "pfpWrapper">
            {PFP}
         </div>
        </div>


    )
    


    

}


export default Navsugar