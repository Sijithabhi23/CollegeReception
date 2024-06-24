import React from 'react'
import "./College.css"
import iit from "../../Assets/iitdelhi.jpg"
import iitb from "../../Assets/iitbomb.jpg"
import nit from "../../Assets/nit.jpg"
import icon from "../../Assets/clgicon.png"
function College() {
  return (
    <div>
        <div className='program-section'>
            <h2>Top Colleges where our system introduced</h2>
            <img src={iit} className='clg-sec'></img>
            <img src={iitb} className='clg-sec'></img>
            <img src={nit} className='clg-sec'></img>
        </div>
        <div className='caption'>
          <p id='p1'>IIT DELHI</p>
          <img src={icon} className='icon-logo1'></img>
          <p id='p2'>IIT BOMBAY</p>
          <img src={icon} className='icon-logo2'></img>
          <p id='p3'>NIT CALICUT</p>
          <img src={icon} className='icon-logo3'></img>
        </div>
    </div>
  )
}

export default College