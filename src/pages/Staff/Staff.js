import React from 'react'
import "./Staff.css"
import { Link } from 'react-router-dom'
import logo from "../../Assets/thanos.jpg"  
function Staff() {
  return (


    <div className='main-section'>
      <div className="container-section">
        <aside className="sidebar">
            <div className="profile">
                <img src={logo} alt="Admin Avatar" className="profile-image"/>
                <p className="admin-name">I'm ADMIN</p>
            </div>
            <nav className="navigation">
                <ul>
                    <li><Link to={''}><i className="fa fa-home"></i> Home</Link></li>
                    <li><Link to={''}><i className="fa fa-user"></i> Profile</Link></li>
                    <li><Link to={''}><i className="fa fa-calendar"></i> Appointments</Link></li>
                    <li><Link to={''}><i className="fa fa-bell"></i> Notifications</Link></li>
                    <li><Link to={'/login'}><i className="fa fa-sign-out"></i> Log Out</Link></li>
                </ul>
            </nav>
        </aside>
        <main className="main-c">
            <header className="header">
                <h1>Welcome back ,user😎</h1>
                <p className="time">Time</p>
            </header>
            <section className="stats">
                <div className="card">
                    <div className="card-content">
                        <h2>Products</h2>
                        <p>5</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <h2>Users</h2>
                        <p>5</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <h2>Orders</h2>
                        <p>5</p>
                    </div>
                </div>
            </section>
        </main>
    </div>
 
    </div>

)
}

export default Staff