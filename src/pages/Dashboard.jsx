import { useState } from 'react'
import React from 'react';
import '../App.css'
// import Header from '../components/commons/Header'
// import Sidebar from '../components/commons/Sidebar'
import Content from '../components/dashboard-compo/Content'

function Dashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      {/* <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> */}
      <Content />
    </div>
  )
}

export default Dashboard