import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import AddMedicineForm from './AddMedicineForm';

function handleClick() {
  alert('You clicked me!');
}


function MedicineList({ medicines, onEdit, onDelete }) {

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


  return (
    <div>

      <div className='medicine-header'>
          <h1 style={{
              paddingRight: 20
              }}>Danh sách thuốc</h1>
          <div className="search-bar">
              <input
              className="search-input"
              type="text"
              placeholder="Tìm kiếm thuốc..."
              // value={searchTerm}
              // onChange={handleSearch}
              />
          </div>  
          {/* <button className="add-button"
              onClick={handleClick}>Thêm thuốc</button> */}

          <Button className="add-button" type="primary" 
            onClick={showModal}>
            Thêm thuốc
          </Button>
          {/* <button 
            onClick={handleClick}>Thêm bác sĩ</button> */}
          <Modal
            title="Add Medicine"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null} // To hide the default footer buttons
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
          {medicines.map((medicine, index) => (
            <tr key={index}>
              <td>{medicine.name}</td>
              <td>{medicine.type}</td>
              <td>{medicine.price}</td>
              <td>{medicine.quantity}</td>
              <td>{medicine.expiryDate}</td>
              <td>{medicine.supplier}</td>
              <td>
                {/* <button onClick={() => onEdit(index)}>Sửa</button>
                <button onClick={() => onDelete(index)}>Xoá</button> */}
                <button onClick={handleClick}>Sửa</button>
                <button onClick={handleClick}>Xoá</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MedicineList;
