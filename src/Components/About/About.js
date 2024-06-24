import React from 'react'
import "./About.css";
import iit from "../../Assets/iitdelhi.jpg"
import iitb from "../../Assets/iitbomb.jpg"
import nit from "../../Assets/nit.jpg"
import Navbar from '../Navbar/Navbar';
function About() {
  return (
    <div className='About'>
        <Navbar/>
        <div className='about-section'>
        
        <h3>What is CRMS ?</h3>
      <p id='para1'>The College Reception Management System is designed to streamline<br/>
      and digitize the reception process in a college environment and  the <br/>
      system will replace manual process and make it easier for receptionists <br/>
      to manage visitors , appointments and overall receptional activities <br/>efficintly .
      </p>
      <img id='about-lgo' alt='gf' src='https://www.freepnglogos.com/uploads/thinking-png/thinking-png-student-reading-transparent-student-reading-21.png'></img>
      <button className='btn-learns'>Read more</button>
      <div className='clg-section'>
        <h2>Top Colleges Where Our System Follows </h2>
        <img id='clg1' alt='3e' src={iit}></img>
        
        <img id='clg2' alt='3e' src={iitb}></img>
        <img id='clg3' alt='3e' src={nit}></img>

      </div>

      <div className='team-section'>
        <h2 id='h12'>Our Team Leads </h2>
        <img id='clg1' alt='3e' src='https://images.moneycontrol.com/static-mcnews/2023/04/Mark-Zuckerberg-1.jpg?impolicy=website&width=1600&height=900'></img>
        <img id='clg2' alt='3e' src='https://akm-img-a-in.tosshub.com/businesstoday/images/story/202310/sundar-pichai-reuters_660_121615122055-sixteen_nine.jpg?size=948:533'></img>
        <img id='clg3' alt='3e' src='https://images.indianexpress.com/2020/01/time-cook-bloomberg-759.jpg'></img>

      </div>

    </div>
    </div>
  )
}

export default About