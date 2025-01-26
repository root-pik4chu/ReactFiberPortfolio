import React from 'react'
import { Outlet } from 'react-router-dom'
import Contact from './pages/OtherPages/Contact'
import Projects from './pages/OtherPages/Projects'
import NavBar from './pages/OtherPages/NavBar'
const Layout = () => {
  return (
    <div className='min-h-screen '>
      <NavBar />
      <div className="main">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
