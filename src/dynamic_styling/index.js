import React, { Component, useEffect, useState } from 'react';

function DynamicStyling() {
    const error = false;
    const [name,setName]=useState("")
    const [validInput,setValidInput]=useState(false)
    useEffect(() => {
       if (name.length>2) {
           setValidInput(true)
       }
       else{
        setValidInput(false)
       } 
    }, [name]);
    console.log(validInput);
    const handleChange=(e)=>{
       setName(e.target.value)
    }
    //console.log(userInfo.name);
    return ( 
        <>
       <h1 style={{ color: error ? 'red' : 'green'
       }} >Dynamic coloring</h1>
       <input className='input' type="text" style={{
        backgroundColor: validInput ? 'green' : 'orangered'
       }} value={name} onChange={handleChange}/>
   <br/>
       <input className={`${validInput ? "valid" : "nonValid"}`} type="text" value={name} onChange={handleChange}/>
        </>
     );
}

export default DynamicStyling;