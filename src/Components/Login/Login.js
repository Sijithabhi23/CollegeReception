import React, { useState} from 'react'
import "./Login.css"
import axios from 'axios'
import {useNavigate} from "react-router-dom";
function Login() {

const [username,setUser]=useState("");
const [password,setPass]=useState("");
const navigate=useNavigate()
 const handlesubmit =async(e)=>{
  e.preventDefault();
  try{
  const response = await axios.post('http://localhost:8000/adminpage',{username,password});
  console.log(response.data);
    if(response.data.user['type']=='admin'){
      
      navigate('/admin')
    }
    else if(response.data.user['type']=='Staff'){
      navigate('/Staff')
    }
    else{
      navigate('/user')
    }                   
  }
  catch(error){
    console.log('Login Failed');
  }
 }
  return (
    <div className='login'>
     <div className="container-login">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handlesubmit}>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" value={username} onChange={(e)=>setUser(e.target.value)}required/>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e)=>setPass(e.target.value)}  required/>
          <button type="submit"> Login</button>
        </form>
      </div>
    </div>
    </div>    
)}
 export default Login