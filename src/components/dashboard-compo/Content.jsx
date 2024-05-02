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
    <div className='card-wrapper'>
        
        {/* <div className='main-cards'> */}
            {/* <Link to="/hospital-manage/doctor" style={{ textDecoration: 'none', color: 'inherit' }}> */}
                <div className='card'>
                    <h3 className='card-title' >Bác sĩ hiện có</h3>
                    <div className='card-body'>
                        <div className='card-icon' >
                        <img src="src/assets/doctor.png" ></img>
                        </div>
                        <div className='card-quantity'>
                            <p className='card-quantity-title' >Tổng</p>
                            <span className='card-quantity-sum' >300</span>
                        </div>
                    </div>
                    {/* BACKEND GET Infor to DB - number of doctors */}
                </div>
            {/* </Link> */}
            <div className='card'>
                    <h3 className='card-title' >Y tá hiện có</h3>
                    <div className='card-body'>
                        <div className='card-icon' >
                        <img src="src/assets/nurse.png" ></img>
                        </div>
                        <div className='card-quantity'>
                            <p className='card-quantity-title' >Tổng</p>
                            <span className='card-quantity-sum' >400</span>
                        </div>
                    </div>
                    {/* BACKEND GET Infor to DB - number of doctors */}
                </div>
                <div className='card'>
                    <h3 className='card-title' >Bệnh nhân nội trú</h3>
                    <div className='card-body'>
                        <div className='card-icon' >
                        <img src="src/assets/patient.png" ></img>
                        </div>
                        <div className='card-quantity'>
                            <p className='card-quantity-title' >Tổng</p>
                            <span className='card-quantity-sum' >1200</span>
                        </div>
                    </div>
                    {/* BACKEND GET Infor to DB - number of doctors */}
                </div>
            
        {/* </div> */}

        
    </div>
  )
}

export default Content