import React,{useState,useEffect} from 'react'
import axios from 'axios';
import "./ReviewStaff.css"
function ReviewStaff() {

    
    const[data,setData]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await axios.get("http://localhost:8000/Review")
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
  
  <h2>Review Staff Table</h2>
      <table className='table-data'>
        <thead>
          <tr>
            <th>StaffId</th>
            <th>Name</th>
            <th>Department</th>
            <th>Contact</th>
            <th>Action1</th>
            <th>Action2</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.StaffId}</td>  
              <td>{item.Name}</td>
              <td>{item.Department}</td>
              <td>{item.Contact}</td>
              <td><button className='btn-accept'>Accept</button></td>
              <td><button className='btn-reject'>Reject</button></td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default ReviewStaff