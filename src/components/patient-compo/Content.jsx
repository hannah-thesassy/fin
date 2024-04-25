import React from 'react'
import PatientGrid from './PatientGrid';
// import PatientForm from './PatientForm';
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Content() {



  return (
    
    <main className='doctor-main-container'>
        
        <div className="app">
            
            
            <PatientGrid />
        </div>

        
    </main>
  )
}

export default Content