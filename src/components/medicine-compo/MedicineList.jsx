import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import AddMedicineForm from './AddMedicineForm';

// Khai báo danh sách thuốc
const initialMedicines = [
  {
    id: 1,
    name: 'Paracetamol',
    medType: 'Thuốc hoạt động trên hệ thống thần kinh',
    price: 5000,
    quantity: 50,
    expiryDate: '2025-12-31',
    supplier: 'Nhà thuốc XYZ',
  },
  {
    id: 2,
    name: 'Amoxicillin',
    medType: 'Thuốc kháng sinh',
    price: 10000,
    quantity: 30,
    expiryDate: '2027-06-30',
    supplier: 'Nhà thuốc ABC',
  },
  {
    id: 3,
    name: 'Aspirin',
    medType: 'Thuốc chống viêm',
    price: 7000,
    quantity: 20,
    expiryDate: '2026-08-15',
    supplier: 'Nhà thuốc DEF',
  },
  {
    id: 4,
    name: 'Paracetamol',
    medType: 'Thuốc hoạt động trên hệ thống thần kinh',
    price: 5000,
    quantity: 50,
    expiryDate: '2024-12-31',
    supplier: 'Nhà thuốc XYZ',
  },
  {
    id: 5,
    name: 'Amoxicillin',
    medType: 'Thuốc kháng sinh',
    price: 10000,
    quantity: 30,
    expiryDate: '2028-06-30',
    supplier: 'Nhà thuốc ABC',
  },
  {
    id: 6,
    name: 'Aspirin',
    medType: 'Thuốc chống viêm',
    price: 7000,
    quantity: 20,
    expiryDate: '2025-08-15',
    supplier: 'Nhà thuốc DEF',
  },
  {
    id: 7,
    name: 'Paracetamol',
    medType: 'Thuốc hoạt động trên hệ thống thần kinh',
    price: 5000,
    quantity: 50,
    expiryDate: '2026-12-31',
    supplier: 'Nhà thuốc XYZ',
  },
  {
    id: 8,
    name: 'Amoxicillin',
    medType: 'Thuốc kháng sinh',
    price: 10000,
    quantity: 30,
    expiryDate: '2027-06-30',
    supplier: 'Nhà thuốc ABC',
  },
  {
    id: 9,
    name: 'Aspirin',
    medType: 'Thuốc chống viêm',
    price: 7000,
    quantity: 20,
    expiryDate: '2027-08-15',
    supplier: 'Nhà thuốc DEF',
  },
  // Thêm các thuốc khác vào đây
];

// function MedicineList({ medicines, onEdit, onDelete }) {
const MedicineList = () => {
  const [searchVal, setSearchVal] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [medicines, setMedicines] = useState(initialMedicines);
  const [visible, setVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleChange = event => {
    setSearchVal(event.target.value);
  };
  useEffect(() => {
    const results = initialMedicines.filter(medicine =>
      medicine.name.toLowerCase().includes(searchVal.toLowerCase()));
      setSearchResults(results);
      setMedicines(results); // tự thêm
  }, [searchVal]);


  const handleAddMedicine = (values) => {
    // Generate a new ID for the new medicine
    const newMedicine = { 
      id: values.id,
      name: values.name,
      medType: values.medType,
      price: values.price,
      quantity: values.quantity,
      expiryDate: values["expiryDate"].format("YYYY-MM-DD"),
      supplier: values.supplier
    };
    // Add the new medicine to the list of medicines
    setMedicines([...medicines, newMedicine]);
    // Close the modal
    setVisible(false);
    // {renderMedicineRows}
  };

  // function handleSearchClick() {
  //   if (searchVal === "") {
  //     setMedicines(initialMedicines);
  //     return;
  //   }
  //   const filterBySearch = initialMedicines.filter((medicine) => {
  //     if (medicine.name.toLowerCase().includes(searchVal.toLowerCase())) {
  //       return medicine;
  //     }
  //   });
  //   setMedicines(filterBySearch);
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
    // Xoá thuốc với id tương ứng khỏi danh sách hiện tại
    const updatedMedicines = medicines.filter((medicine) => medicine.id !== id);
    setMedicines(updatedMedicines);

    // Xoá thuốc với id tương ứng khỏi danh sách ban đầu
    // const updatedInitialMedicines = initialMedicines.filter((medicine) => medicine.id !== id);
    // initialMedicines(updatedInitialMedicines);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = medicines.slice(indexOfFirstItem, indexOfLastItem);

  const renderMedicineRows = currentItems.map((medicine, id) => (
    <tr key={medicine.id}>
      <td>{medicine.name}</td>
      <td>{medicine.medType}</td>
      <td>{medicine.price}</td>
      <td>{medicine.quantity}</td>
      <td>{medicine.expiryDate}</td>
      <td>{medicine.supplier}</td>
      <td>
        <button onClick={handleClick}>Sửa</button>
        <button onClick={() => handleDelete(medicine.id)}>Xoá</button>
      </td>
    </tr>
  ));

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(medicines.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className='medicine-header'>
        <h1 style={{ paddingRight: 20 }}>Danh sách thuốc</h1>
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Tìm kiếm thuốc..."
            value={searchVal}
            onChange={handleChange}
            // onChange={e => { setSearchVal(e.target.value); handleSearchClick(); }}
          />
        </div>
        <Button className="add-button" type="primary" 
          onClick={showModal}>
          Thêm thuốc
        </Button>
        <Modal
          title="Add Medicine"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <AddMedicineForm onAddMedicine={handleAddMedicine} />
        </Modal>
      </div>

      <table className="medicine-table">
        <thead>
          <tr>
            <th>Tên</th>
            <th>Loại</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Ngày hết hạn</th>
            <th>Nhà cung cấp</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {renderMedicineRows}
        </tbody>
      </table>

      <div className="page-number" style={{textAlign: 'center'}}>
        {pageNumbers.map(number => (
          <button key={number} onClick={() => setCurrentPage(number)}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MedicineList;
