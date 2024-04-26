import React from 'react'
import { Link } from 'react-router-dom';
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Content() {

  return (
    <main className='dashboard-main-container'>
        
        {/* <div className='main-cards'> */}
            {/* <Link to="/hospital-manage/doctor" style={{ textDecoration: 'none', color: 'inherit' }}> */}
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Bác sĩ hiện có</h3>
                        <BsPeopleFill className='card_icon'/>
                    </div>
                    {/* BACKEND GET Infor to DB - number of doctors */}
                    <h1>300</h1>
                </div>
            {/* </Link> */}
            <div className='card'>
                <div className='card-inner'>
                    <h3>Y tá hiện có</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                {/* BACKEND GET Infor to DB - number of nurses */}
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Bệnh nhân</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                {/* BACKEND GET Infor to DB - number of patients */}
                <h1>33</h1>
            </div>
            
        {/* </div> */}

        
    </main>
  )
}

export default Content