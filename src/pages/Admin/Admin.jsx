import React from 'react'
import "./Admin.css"
import logo from "../../Assets/thanos.jpg"
import { Link } from 'react-router-dom'
function Admin() {
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
                    <li><Link to={'/review'}><i className="fa fa-user"></i> Review Staff</Link></li>
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
 
    </div>  )
}

export default Admin