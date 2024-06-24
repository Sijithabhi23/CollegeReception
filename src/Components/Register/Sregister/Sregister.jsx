import React from 'react'
import "./Sregister.css"
import { Link } from 'react-router-dom'
function Sregister() {
  return (
    <div>
        <div className="signup-container">
        <form className="signup-form">
          <h2>Sign Up</h2>
          <input type="text"  placeholder="StaffId" required  />
          <input type="text"  placeholder='Name' required/>
          <input type='text' placeholder='Department' required/> 
          <input type="text" placeholder='Contact' required/>
          <input type="password" placeholder="Password" required  />
          <button type="submit" >Sign Up</button><br /><br/>
          <Link to={'/login'} className="ahac">Already have an account ?</Link>
        </form>
      </div>

    </div>
  )
}

export default Sregister