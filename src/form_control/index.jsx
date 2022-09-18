import React, { useState } from 'react';

import DynamicStyling from '../dynamic_styling';
import Show from './show';


function Form() {
    const [name,setName] = useState('');
    const [password,setPassword]= useState('')
    const [userInfo,setUserInfo]=useState({
      name: '',
      password:''

    });
    const handleName=(e)=>{
      setName(e.target.value);
      setUserInfo({...userInfo,name:e.target.value});
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value);
        setUserInfo({...userInfo,password:e.target.value});
     }
     const handleRegister=(e)=>{
        let user ={
            name: name,
            password: password
        }
        
        console.log("password Form FORM: " ,userInfo.password);
        // console.log("Form submitted",userInfo);
        e.preventDefault();
     }
     const transferChileData=(d)=>{
        console.log("Back from Child: ",d);
     }
    return (  
        
        <form action="" onSubmit={handleRegister}>

            <Show userInfo={userInfo.name}  childData={transferChileData}/>
           
            <div className='form-group'>
               <label htmlFor="name" >Name: </label>
               <input type="text" value={name} onChange={handleName} name="name"/>
            </div>
            <div className='form-group'>
               <label htmlFor="name" name="name">Password: </label>
               <input type="password" value={password} onChange={handlePassword} name="password" />
            </div>
            <div className='form-group'>
              <button  type='submit'>Register</button>
            </div>
            
            
        </form>
        
    );
}

export default Form;