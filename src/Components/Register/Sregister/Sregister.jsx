import React from 'react'
import { useState } from 'react'
import "./Sregister.css"
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
function Sregister() {

    const[staffid,setStaffid]=useState('');
    const[name,setName]=useState('');
    const[department,setDepartment]=useState('');
    const[contact,setContact]=useState('');
    const[password,setPassword]=useState('');
    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
      e.preventDefault();
  try{
      const userData={staffid,name,password,department,contact}
    

    const response =await axios.post("http://localhost:8000/Review",userData)

    if(response.status===200){
      console.log("ubgtgn");
    }else{
      console.error("error inserting")
    }
  }catch(error){
       console.error("error inserting")
    }
   
  }
  return (
    <div>
        <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <input type="text" name='staffid' placeholder="StaffId" required onChange={(e)=>setStaffid(e.target.value)} />
          <input type="text" name='name'  placeholder='Name' required onChange={(e)=>setName(e.target.value)}/>
          <input type='text' name='department' placeholder='Department' required onChange={(e)=>setDepartment(e.target.value)}/> 
          <input type="text" name='contact' placeholder='Contact' required onChange={(e)=>setContact(e.target.value)}/>
          <input type="password" name='password' placeholder="Password" required onChange={(e)=>setPassword(e.target.value)} />
          <button type="submit" >Sign Up</button><br /><br/>
          <Link to={'/login'} className="ahac">Already have an account ?</Link>
        </form>
      </div>
    </div>
  )
}

export default Sregister