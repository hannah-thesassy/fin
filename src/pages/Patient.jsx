import { useState } from 'react'
import React from 'react';
import '../App.css'
// import Header from './Header'
// import Sidebar from './Sidebar'
import Content from '../components/patient-compo/Content';

function Patient() {
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

export default Patient