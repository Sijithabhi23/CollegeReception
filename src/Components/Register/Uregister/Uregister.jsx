import React from 'react'
import "./Uregister.css"
import { Link } from 'react-router-dom'
function Uregister() {
  return (
    <div>
        <div className="signup-container">
        <form className="signup-form">
          <h2>Sign Up</h2>
          <input type="text"  placeholder="Full Name" required />
          <input type="password" placeholder="Password" required />
          <input type='text' placeholder='Add more' />
          <button type="submit" >Sign Up</button><br /><br/>
          <Link to={'/login'} className="ahac">Already have an account ?</Link>
        </form>
      </div>

    </div>
  )
}

export default Uregister