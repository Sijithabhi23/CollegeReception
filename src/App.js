import React from 'react'
import Main from './Components/MainSection/Main'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import {Routes,Route} from 'react-router-dom'
import Login from './Components/Login/Login'
import Footer from './Components/Footer/Footer'
import Admin from "./pages/Admin/Admin"
import Contact from './Components/Contact/Contact'
import User from './pages/User/User'
import Sregister from './Components/Register/Sregister/Sregister'
import Uregister from './Components/Register/Uregister/Uregister'
import Staff from './pages/Staff/Staff'
import ReviewStaff from './pages/ReviewStaff/ReviewStaff'
import ViewStaffs from './pages/ViewStaffs/ViewStaffs'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/review' element={<ReviewStaff/>}/>
        <Route path='/sregister' element={<Sregister/>}/>
        <Route path='/uregister' element={<Uregister/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/Staff' element={<Staff/>}/> 
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/viewstaff' element={<ViewStaffs/>}/>
      </Routes>  
      <Footer/>
    </div>

  )
}

export default App