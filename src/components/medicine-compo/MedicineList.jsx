import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import AddMedicineForm from './AddMedicineForm';

function MedicineList({ medicines, onEdit, onDelete }) {
  const [visible, setVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = medicines.slice(indexOfFirstItem, indexOfLastItem);

  const renderMedicineRows = currentItems.map((medicine, id) => (
    <tr key={id}>
      <td>{medicine.name}</td>
      <td>{medicine.type}</td>
      <td>{medicine.price}</td>
      <td>{medicine.quantity}</td>
      <td>{medicine.expiryDate}</td>
      <td>{medicine.supplier}</td>
      <td>
        <button onClick={handleClick}>Sửa</button>
        <button onClick={handleClick}>Xoá</button>
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
          />
        </div>
        <Button className="add-button" type="primary" onClick={showModal}>
          Thêm thuốc
        </Button>
        <Modal
          title="Add Medicine"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <AddMedicineForm />
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

      <div style={{textAlign: 'center'}}>
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
