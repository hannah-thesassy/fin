import React from 'react'
import MedicineList from './MedicineList'; // Import component danh sách thuốc
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

 function Content() {
 
// Khai báo danh sách thuốc
const medicines = [
    {
      name: 'Paracetamol',
      type: 'Thuốc hoạt động trên hệ thống thần kinh',
      price: 5000,
      quantity: 50,
      expiryDate: '2024-12-31',
      supplier: 'Nhà thuốc XYZ',
    },
    {
      name: 'Amoxicillin',
      type: 'Thuốc kháng sinh',
      price: 10000,
      quantity: 30,
      expiryDate: '2023-06-30',
      supplier: 'Nhà thuốc ABC',
    },
    {
      name: 'Aspirin',
      type: 'Thuốc chống viêm',
      price: 7000,
      quantity: 20,
      expiryDate: '2025-08-15',
      supplier: 'Nhà thuốc DEF',
    },
    {
      name: 'Paracetamol',
      type: 'Thuốc hoạt động trên hệ thống thần kinh',
      price: 5000,
      quantity: 50,
      expiryDate: '2024-12-31',
      supplier: 'Nhà thuốc XYZ',
    },
    {
      name: 'Amoxicillin',
      type: 'Thuốc kháng sinh',
      price: 10000,
      quantity: 30,
      expiryDate: '2023-06-30',
      supplier: 'Nhà thuốc ABC',
    },
    {
      name: 'Aspirin',
      type: 'Thuốc chống viêm',
      price: 7000,
      quantity: 20,
      expiryDate: '2025-08-15',
      supplier: 'Nhà thuốc DEF',
    },
    {
      name: 'Paracetamol',
      type: 'Thuốc hoạt động trên hệ thống thần kinh',
      price: 5000,
      quantity: 50,
      expiryDate: '2024-12-31',
      supplier: 'Nhà thuốc XYZ',
    },
    {
      name: 'Amoxicillin',
      type: 'Thuốc kháng sinh',
      price: 10000,
      quantity: 30,
      expiryDate: '2023-06-30',
      supplier: 'Nhà thuốc ABC',
    },
    {
      name: 'Aspirin',
      type: 'Thuốc chống viêm',
      price: 7000,
      quantity: 20,
      expiryDate: '2025-08-15',
      supplier: 'Nhà thuốc DEF',
    },
    // Thêm các thuốc khác vào đây
  ];

    // function handleClick() {
    //     alert('You clicked me!');
    // }


    return (
        <main className='medicine-main-container'>
            <div>
                
                <MedicineList medicines={medicines} />
            </div>
        </main>
        
    );
  }

export default Content