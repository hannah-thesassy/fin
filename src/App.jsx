import { useState } from 'react'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Header from './components/commons/Header';
import Sidebar from './components/commons/Sidebar';
import Dashboard from './pages/Dashboard';
import Content from './components/dashboard-compo/Content'
import Doctor from './pages/Doctor';
// import Doctor from './pages/Doctor';
// import NursePage from './NursePage';
import Medicine from './pages/Medicine';
import Patient from './pages/Patient';

function App() {
  return (
    // <Router>
    //       <Routes>
    //         <Route
    //         path='/'
    //           element={
    //             <div className='whole-container'>

    //             <Sidebar/>
    //             <Header/>

    //             <Outlet />
    //             </div>

    //           }

    //         </Route>
    //       </Routes>
    // </Router>

    <Router>
      <Routes>
        <Route path="/hospital-manage/" element={<div className='whole-container'>

          <Sidebar />
          <Header />

          <Outlet />
        </div>}>
          <Route index element={<Dashboard />} />
          <Route path="/hospital-manage/doctor" index element={<Doctor />}/>
          <Route path="/hospital-manage/medicine" index element={<Medicine />}/>
          <Route path="/hospital-manage/patient" index element={<Patient />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
