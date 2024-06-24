import React from 'react'
import "./Programs.css";
import homepageanimation from "../../Assets/program-section.png"
function Programs() {
  return (
    <div>
        <div className='program-section'>
            <h2>Take a look on our basic procedure</h2>
            <img src={homepageanimation} className='image-program'></img>
        </div>
    </div>
  )
}

export default Programs