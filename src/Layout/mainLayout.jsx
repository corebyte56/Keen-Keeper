import React from 'react'
import Navbar from '../Compnents/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Compnents/Footer/Footer'

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
