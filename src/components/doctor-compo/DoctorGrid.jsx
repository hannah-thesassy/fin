import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import AddDoctorForm from './AddDoctorForm';

// Dữ liệu danh sách các bác sĩ
const initialDoctors = [
  { id: 1, name: 'Bác sĩ A', specialty: 'Nội trú' },
  { id: 2, name: 'Bác sĩ B', specialty: 'Nhi' },
  { id: 3, name: 'Bác sĩ C', specialty: 'Da liễu' },
  { id: 4, name: 'Bác sĩ D', specialty: 'Phẫu thuật' },
  { id: 5, name: 'Bác sĩ A', specialty: 'Nội trú' },
  { id: 6, name: 'Bác sĩ B', specialty: 'Nhi' },
  { id: 7, name: 'Bác sĩ C', specialty: 'Da liễu' },
  { id: 8, name: 'Bác sĩ D', specialty: 'Phẫu thuật' },
  { id: 9, name: 'Bác sĩ A', specialty: 'Nội trú' },
  { id: 10, name: 'Bác sĩ B', specialty: 'Nhi' },
  { id: 11, name: 'Bác sĩ C', specialty: 'Da liễu' },
  { id: 12, name: 'Bác sĩ D', specialty: 'Phẫu thuật' },
  // Thêm các bác sĩ khác nếu cần
];


const DoctorGrid = () => {

  const [doctors, setDoctors] = useState(initialDoctors);

  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  function handleClick() {
    alert('You clicked me!');
  }

  const handleDelete = (id) => {
    // Xoá thuốc với id tương ứng khỏi danh sách hiện tại
    const updatedDoctors = doctors.filter((doctor) => doctor.id !== id);
    setDoctors(updatedDoctors);

    // Xoá thuốc với id tương ứng khỏi danh sách ban đầu
    const updatedInitialDoctors = initialDoctors.filter((doctor) => doctor.id !== id);
    initialDoctors(updatedInitialDoctors);
  };


  return (
    <div>
        <div className="doctor-header">
            <h1 className='doctor-total'>Bác sĩ hiện có</h1>
            <div className="total-doctors">{doctors.length}</div>
            <div className="search-bar">
                <input
                className="search-input"
                type="text"
                placeholder="Tìm kiếm bác sĩ..."
                // value={searchTerm}
                // onChange={handleSearch}
                />
            </div>
            <Button className="add-button" type="primary" 
              onClick={showModal}>
              Thêm bác sĩ
            </Button>
            {/* <button 
              onClick={handleClick}>Thêm bác sĩ</button> */}
            <Modal
              title="Add Doctor"
              visible={visible}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={null} // To hide the default footer buttons
            >
              <AddDoctorForm />
            </Modal>
        </div>
        <div className="doctor-grid">
            {doctors.map(doctor => (
                <div key={doctor.id} className="doctor-card">
                  <h2>{doctor.name}</h2>
                  <p>Chuyên khoa: {doctor.specialty}</p>
                  <div>
                    <button onClick={handleClick}>Sửa</button>
                    <button onClick={() => handleDelete(doctor.id)}>Xoá</button>
                  </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default DoctorGrid;
