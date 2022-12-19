import { read, utils } from 'xlsx';//for sheet.JS
import { useRef, useState, useEffect } from 'react';// for hooks and mount loading
import React from 'react';// for react
import * as XLSX from 'xlsx'

const handleSubmit = async (e) => {
    e.preventDefault()//dont reload the page
    
}


function ExcelIntegration(){
    const [Name,setName] = useState('') // using hooks so they can be used in the form 
    const [Money,setMoney] = useState('')
    const [Owed,setOwed] = useState('')

    


    
    
    
    
    
    
    
    function convertJSON({Name , Money, Owed}){//using props
        let arr = [{"Name": "John Smith", "Money": 2, "Owed":0}, {"Name": "John Doe", "Money": 3, "Owed":0}];//setting an dummy array of objects so they can be added to the xlsx file
        const JSONstring = '{"Name":'+ '"' + Name + '"' +', "Money":'+Money +', "Owed":'+ Owed+'}'//concatenate strings so they can be turned into json format
        const obj = JSON.parse(JSONstring);//json.parse to turned concantenated string to JSON 
        arr.unshift(obj);//adding obj to beginning of the array
        console.log(obj)//console logging see that it works
        console.log(arr)//console logging array to see if it works
        var wb = XLSX.utils.book_new()//new worksheet
        var ws = XLSX.utils.json_to_sheet(arr); 
        XLSX.utils.book_append_sheet(wb, ws, "MySheet1")//appends a sheet with data
        XLSX.writeFile(wb, "MyExcel.xlsx");//writes to the file
    }

    

    return(
        <form onSubmit={handleSubmit} >
              <div className="labelWrapper">
                <label htmlFor="name">Name:</label>
                <input 
                 type="text" 
                 id="name"
                 className="typein__box"
                 onChange = {(e)=> setName(e.target.value)} 
                //  using a imaginary variable to setName when changed
                 value = {Name}
                 required
                />
               
               
               
                <label htmlFor="Money">Money:</label>
                <input
                 className="typein__box"
                 type="Money" 
                 id="Money"

                 onChange = {(e)=> setMoney(e.target.value)} 
                 value = {Money}
                 required
                />

                <label htmlFor="Owed"> Owed:</label>
                <input 
                 className="typein__box"
                 type="text" 
                 id="Owed"

                 onChange = {(e)=> setOwed(e.target.value)} 
                 value = {Owed}


                />
                <button onClick={() => convertJSON({Name, Money, Owed})} >Submit</button>
              </div>

            </form>
    )


}


export default ExcelIntegration