import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
function Sidebar({ openSidebarToggle, OpenSidebar }) {
    const location = useLocation();

    return (
        <aside id="sidebar" className={openSidebarToggle ? 'sidebar-responsive' : ''}>
            <div className="sidebar-title">
                <div className="sidebar-brand">
                    <Logo className="icon_header" />
                </div>
                <h2 className='logo-name' >BKMEC</h2>
            </div>

            <ul className="sidebar-list">
                <Link to="/hospital-manage/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <li className="sidebar-list-item">
                        <div className={location.pathname === '/hospital-manage/dashboard' ? 'active' : ''}>
                            Trang chủ
                        </div>
                    </li>
                </Link>
                <Link to="/hospital-manage/doctor" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <li className="sidebar-list-item">
                        <div className={location.pathname === '/hospital-manage/doctor' ? 'active' : ''}>Bác sĩ</div>
                    </li>
                </Link>
                <Link to="/hospital-manage/nurse" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <li className="sidebar-list-item">
                        <div className={location.pathname === '/hospital-manage/nurse' ? 'active' : ''}>Y tá</div>
                    </li>
                </Link>
                <Link to="/hospital-manage/patient" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <li className="sidebar-list-item">
                        <div className={location.pathname === '/hospital-manage/patient' ? 'active' : ''}>
                            Bệnh nhân
                        </div>
                    </li>
                </Link>
                <Link to="/hospital-manage/medicine" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <li className="sidebar-list-item">
                        <div className={location.pathname === '/hospital-manage/medicine' ? 'active' : ''}>
                            Kiểm kê thuốc
                        </div>
                    </li>
                </Link>
                <li className="sidebar-list-item">
                    <div>Thống kê</div>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
