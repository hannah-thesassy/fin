import React, {useState} from 'react';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  TreeSelect,
} from 'antd';
const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
}


const AddMedicineForm = ({ onAddMedicine }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // Call the onAddMedicine function with the form values
    onAddMedicine(values);
    // Reset form fields by setting form values to an empty object
    form.resetFields();
  };

  return (
    <Form 
      {...formItemLayout}
      variant="filled"
      style={{
        maxWidth: 600,
      }}
      form={form} 
      onFinish={onFinish}
    >
      <Form.Item
        label="ID"
        name="id"
        rules={[
          {
            required: true,
            message: 'Please input!',
          },
        ]}
      >
        <InputNumber
          name="id"
          style={{
            width: '100%',
          }}
          
        />
      </Form.Item>

      <Form.Item
        label="Tên thuốc"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input!',
          },
        ]}
      >
        <Input 
          name="name"
        />
      </Form.Item>

      <Form.Item
        label="Loại thuốc"
        name="type"
        rules={[
          {
            required: true,
            message: 'Please input!',
          },
        ]}
      >
        <Input 
          name="type"
        />
      </Form.Item>

      <Form.Item
        label="Giá"
        name="price"
        rules={[
          {
            required: true,
            message: 'Please input!',
          },
        ]}
      >
        <InputNumber
          name="price"
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        label="Số lượng"
        name="quantity"
        rules={[
          {
            required: true,
            message: 'Please input!',
          },
        ]}
      >
        <InputNumber
          name="quantity"
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        label="Ngày hết hạn"
        name="expiryDate"
        rules={[
          {
            required: true,
            message: 'Please input!',
          },
        ]}
      >
        <DatePicker 
          name="expiryDate"
        />
      </Form.Item>

      <Form.Item
        label="Nhà cung cấp"
        name="supplier"
        rules={[
          {
            required: true,
            message: 'Please input!',
          },
        ]}
      >
        <Input 
          name="supplier"
        />
      </Form.Item>
      
  {/* 
      <Form.Item
        label="TextArea"
        name="TextArea"
        rules={[
          {
            required: true,
            message: 'Please input!',
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Mentions"
        name="Mentions"
        rules={[
          {
            required: true,
            message: 'Please input!',
          },
        ]}
      >
        <Mentions />
      </Form.Item>

      <Form.Item
        label="Select"
        name="Select"
        rules={[
          {
            required: true,
            message: 'Please input!',
          },
        ]}
      >
        <Select />
      </Form.Item>

      <Form.Item
        label="Cascader"
        name="Cascader"
        rules={[
          {
            required: true,
            message: 'Please input!',
          },
        ]}
      >
        <Cascader />
      </Form.Item>

      <Form.Item
        label="TreeSelect"
        name="TreeSelect"
        rules={[
          {
            required: true,
            message: 'Please input!',
          },
        ]}
      >
        <TreeSelect />
      </Form.Item> */}

      

      {/* <Form.Item
        label="RangePicker"
        name="RangePicker"
        rules={[
          {
            required: true,
            message: 'Please input!',
          },
        ]}
      >
        <RangePicker />
      </Form.Item> */}

      <Form.Item
        wrapperCol={{
          offset: 6,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit"
          onClick={onFinish}
          // onClick={() => form.resetFields({})}
        >
          Lưu
        </Button>
      </Form.Item>
    </Form>
  );
};
export default AddMedicineForm;