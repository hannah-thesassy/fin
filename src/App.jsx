import { useState } from 'react';
import './App.css';
import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Outlet, Redirect, Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';

import Header from './components/commons/Header';
import Sidebar from './components/commons/Sidebar';
import Dashboard from './pages/Dashboard';
import Content from './components/dashboard-compo/Content';
import Doctor from './pages/Doctor';
// import Doctor from './pages/Doctor';
// import NursePage from './NursePage';
import Medicine from './pages/Medicine';
import Patient from './pages/Patient';
import Login from './pages/Login';
import Nurse from './pages/Nurse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import PatientDetail from './components/PatientDetail';
import PatientSchedule from './components/PatientSchedule';

function App() {
    const isAuthenticated = true;
    return (
        <Router>
            <Routes>
                <Route path="/hospital-manage/login" index element={<Login isLogged={isAuthenticated} />} />
                {/* <Navigate to="/hospital-manage/login" /> */}
                <Route path="/hospital-manage" element={<Navigate to="/hospital-manage/login" />} />
                {isAuthenticated ? (
                    <Route
                        path="/hospital-manage"
                        element={
                            <div className="whole-container">
                                <div className="sidebar-wrapper">
                                    <Sidebar />
                                </div>
                                <div className="whole-wrapper">
                                    <Outlet />
                                </div>
                                <div className="copy-right">
                                    <div className="copy-right-icon">
                                        <FontAwesomeIcon icon={faCopyright} />
                                    </div>
                                    <p className="copy-right-content">
                                        Copyright 2024 BKMEC. Dịch vụ y tế hàng đầu Việt Nam
                                    </p>
                                </div>
                            </div>
                        }
                    >
                        <Route path="/hospital-manage/dashboard" index element={<Dashboard />} />
                        <Route path="/hospital-manage/doctor" index element={<Doctor />} />
                        <Route path="/hospital-manage/nurse" index element={<Nurse />} />
                        <Route path="/hospital-manage/medicine" index element={<Medicine />} />
                        <Route path="/hospital-manage/patient" index element={<Patient />} />
                        <Route path="/hospital-manage/patient-detail" element={<PatientDetail />} />
                        <Route path="/hospital-manage/patient-schedule" element={<PatientSchedule />} />

                    </Route>
                ) : (
                    <Route path="/hospital-manage" element={<Navigate to="/hospital-manage/login" />} />
                )}
            </Routes>
        </Router>
    );
}

export default App;
