import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import AddDoctorForm from './AddDoctorForm';
import EditDoctorForm from './EditDoctorForm';

// Dữ liệu danh sách các bác sĩ
const initialDoctors = [
  { id: 1, name: 'Bác sĩ 1', specialty: 'Nội trú' },
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
  { id: 12, name: 'Bác sĩ 2', specialty: 'Phẫu thuật' },
  // Thêm các bác sĩ khác nếu cần
];


const DoctorGrid = () => {
  const [searchVal, setSearchVal] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [doctors, setDoctors] = useState(initialDoctors);
  const [visible, setVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [editMode, setEditMode] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const itemsPerPage = 9;

    // const [query, setQuery] = useState('');
    // const [filteredItems, setFilteredItems] = useState([]);

 
    // useEffect(() => {
    //     const filtered = initialDoctors.filter(item =>
    //         item.name.toLowerCase().includes(query.toLowerCase())
    //     );
    //     setFilteredItems(filtered);
    // }, [query]);

  const handleChange = event => {
    setSearchVal(event.target.value);
  };
  useEffect(() => {
    const results = initialDoctors.filter(doctor =>
      doctor.name.toLowerCase().includes(searchVal.toLowerCase()));
      setSearchResults(results);
      setDoctors(results); // tự thêm
  }, [searchVal]);


  const handleAddDoctor = (values) => {
    // Generate a new ID for the new medicine
    const newDoctor = { 
      id: values.id,
      name: values.name,
      specialty: values.specialty
    };
    // Add the new medicine to the list of medicines
    setDoctors([...doctors, newDoctor]);
    // Close the modal
    setVisible(false);
  };

  // function handleSearchClick() {
  //   if (searchVal === "") {
  //     setDoctors(initialDoctors);
  //     return;
  //   }
  //   const filterBySearch = initialDoctors.filter((doctor) => {
  //     if (doctor.name.toLowerCase().includes(searchVal.toLowerCase())) {
  //       return doctor;
  //     }
  //   });
  //   setDoctors(filterBySearch);
  // }

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
    const confirmed = window.confirm(`Bạn có chắc chắn muốn xóa không?`);
    if (confirmed) {
      // Xoá thuốc với id tương ứng khỏi danh sách hiện tại
      const updatedDoctors = doctors.filter((doctor) => doctor.id !== id);
      setDoctors(updatedDoctors);

      // Xoá thuốc với id tương ứng khỏi danh sách ban đầu
      // const updatedInitialDoctors = initialDoctors.filter((doctor) => doctor.id !== id);
      // initialDoctors(updatedInitialDoctors);
    }
  };

  const handleEdit = (doctor) => {
    setSelectedDoctor(doctor);
    setEditMode(true);
  };
  const handleUpdateDoctor = (updatedDoctor) => {
    const updatedDoctors = doctors.map((doctor) =>
      doctor.id === updatedDoctor.id ? updatedDoctor : doctor
    );
    setDoctors(updatedDoctors);
    setEditMode(false);
    setSelectedDoctor(null);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setSelectedDoctor(null);
    handleOk();
    handleCancel();
  };

  const handleSave = (editedDoctor) => {
    // console.log("kayy00");
    const updatedDoctors = doctors.map(doctor =>
      doctor.id === editedDoctor.id ? editedDoctor : doctor
    );
    setDoctors(updatedDoctors);
    setVisible(false);
    setEditMode(false); // important update
    handleOk();
    handleCancel();
  };


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = doctors.slice(indexOfFirstItem, indexOfLastItem);

  const renderDoctorRows = currentItems.map((doctor, id) => (
      <div key={doctor.id} className="doctor-card">
        <h2>{doctor.name}</h2>
        <p>Chuyên khoa: {doctor.specialty}</p>
        <div>
          <button onClick={() => handleEdit(doctor)}>Sửa</button>
          {/* <button onClick={handleClick}>Sửa</button> */}
          <button onClick={() => handleDelete(doctor.id)}>Xoá</button>
        </div>
      </div>
  ));

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(doctors.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }


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
                // value={query}
                // onChange={(e) => setQuery(e.target.value)}
                value={searchVal}
                onChange={handleChange}
                // onChange={e => { setSearchVal(e.target.value); handleSearchClick(); }}
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
              <AddDoctorForm onAddDoctor={handleAddDoctor} />
            </Modal>

            {editMode && selectedDoctor && (
              <Modal
                title="Edit Doctor"
                visible={editMode}
                onCancel={handleCancelEdit}
                footer={null}
                // onSave={handleSave}
              >
                <EditDoctorForm
                  doctor={selectedDoctor}
                  // onUpdateDoctor={handleUpdateDoctor}
                  onSave={handleSave}
                  onCancel={() => setVisible(false)} 
                />
              </Modal>
            )}

        </div>
        <div className="doctor-grid">
          {/* <div> */}
            {renderDoctorRows}
          {/* </div> */}
            {/* {doctors.map(doctor => (
                <div key={doctor.id} className="doctor-card">
                  <h2>{doctor.name}</h2>
                  <p>Chuyên khoa: {doctor.specialty}</p>
                  <div>
                    <button onClick={handleClick}>Sửa</button>
                    <button onClick={() => handleDelete(doctor.id)}>Xoá</button>
                  </div>
                </div>
            ))} */}
        </div>
        <div className="page-number" style={{textAlign: 'center', bottom: 0}}>
          {pageNumbers.map(number => (
            <button key={number} onClick={() => setCurrentPage(number)}>
              {number}
            </button>
          ))}
        </div>
    </div>
  );
};

export default DoctorGrid;
