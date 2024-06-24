import React from 'react'
import "./Main.css"
import Programs from '../Programs/Programs'
import College from '../College/College'
import Navbar from '../Navbar/Navbar'
function Main() {
  return (
    <div>
      <Navbar/>
    <div className='main'>
        <div className='main-content'>
        <h1>“The time for action is now. <br/> Its never too late to do something.”</h1>
        <p>Remember, being punctual is a valuable trait that contributes to success and reliability. <br/> 
        Whether it’s arriving on time for appointments, meetings, or work, punctuality <br/> demonstrates respect
         for others’ time and commitment to responsibilities</p>
         <button className='btn-main'>Explore more</button>
        </div>
        </div>
        <Programs/>
        <College/>
        </div>
  )
}

export default Main