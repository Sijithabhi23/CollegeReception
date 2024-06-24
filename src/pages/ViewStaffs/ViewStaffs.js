import React from 'react'
import "./ViewStaffs.css"
import { useState,useEffect } from 'react'
import axios from 'axios'
function ViewStaffs() {


    
    const[data,setData]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await axios.get("http://localhost:8000/Staffs")
                setData(response.data)
            }
            catch(error){
                console.log('errorrr',error)
            }
        }
        fetchData();
    },[])



  return (
    <div className='table-fetch-data'>
  
  <h2>Staffs Available</h2>
      <table className='table-data'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Contact</th>
            <th>Action</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.Name}</td>
              <td>{item.Department}</td>
              <td>{item.Contact}</td>
              <td><button className='btn-accept'>GET APPOINTMENT</button></td>
              {/* Add more data cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default ViewStaffs