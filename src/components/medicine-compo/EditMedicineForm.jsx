import React, { useState, useEffect } from 'react';
import { Button, Form, Input, InputNumber, DatePicker } from 'antd';
import dayjs from 'dayjs';

const EditMedicineForm = ({ medicine, onSave }) => {
  const [form] = Form.useForm();
  const [editedMedicine, setEditedMedicine] = useState(medicine);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    form.setFieldsValue({
      name: editedMedicine.name,
      medType: editedMedicine.medType,
      price: editedMedicine.price,
      quantity: editedMedicine.quantity,
      expiryDate: dayjs(editedMedicine.expiryDate),
      supplier: editedMedicine.supplier,
    });
  }, [editedMedicine]);

  const onFinish = (values) => {
    // Convert expiryDate back to string in the required format
    const updatedMedicine = {
      ...editedMedicine,
      ...values,
      expiryDate: values.expiryDate.format('YYYY-MM-DD'),
    };
    onSave(updatedMedicine);
  };

  return (
    <Form form={form} onFinish={onFinish} >
      <Form.Item
        label="Tên thuốc"
        name="name"
        rules={[{ required: true, message: 'Please input the name of the medicine!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Loại thuốc"
        name="medType"
        rules={[{ required: true, message: 'Please input the type of the medicine!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Giá"
        name="price"
        rules={[{ required: true, message: 'Please input the price of the medicine!' }]}
      >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        label="Số lượng"
        name="quantity"
        rules={[{ required: true, message: 'Please input the quantity of the medicine!' }]}
      >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        label="Ngày hết hạn"
        name="expiryDate"
        rules={[{ required: true, message: 'Please select the expiry date of the medicine!' }]}
      >
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        label="Nhà cung cấp"
        name="supplier"
        rules={[{ required: true, message: 'Please input the supplier of the medicine!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Lưu
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditMedicineForm;
