import { Button, Checkbox, Col, Form, Input, Modal, Row, Select } from 'antd';
import { useEffect, useState } from 'react';

// const cx = classNames.bind(styles)
const { Option } = Select;
const CollectionCreateForm = ({ initialValues, onFormInstanceReady }) => {
    const [selectedFloor, setSelectedFloor] = useState();
    const [optionRoom, setOptionRoom] = useState([]);

    const handleFloorChange = (floor) => {
        setSelectedFloor(floor);
        generateRoom(floor);
    };

    const generateRoom = (floor) => {
        const startRoom = floor * 100 + 1;
        const endRoom = floor * 100 + 10;
        const opt = [];
        for (let i = startRoom; i <= endRoom; i++) {
            opt.push(
                <Option key={i} value={String(i)}>
                    {i}
                </Option>,
            );
        }
        setOptionRoom(opt);
    };

    const [form] = Form.useForm();
    useEffect(() => {
        onFormInstanceReady(form);
    }, []);
    return (
        <Form layout="vertical" form={form} name="form_in_modal">
            <Form.Item
                name="name"
                label="Mã số bác sĩ chỉ định"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng nhập mã số bác sĩ chỉ định',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="name"
                label="Chẩn đoán"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng nhập chẩn đoán',
                    },
                ]}
            >
                <Input.TextArea />
            </Form.Item>

            <Form.Item
                name="floor"
                label="Phương pháp"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng chọn phương pháp!',
                    },
                ]}
            >
                <Select id="floor" placeholder="Vui lòng chọn phương pháp" onChange={handleFloorChange}>
                    <Option value="1">Nội soi</Option>
                    <Option value="2">Siêu âm</Option>
                    <Option value="3">Khám Tổng Quát</Option>
                    <Option value="4">X-Ray</Option>
                    <Option value="5">CT Scan</Option>
                    <Option value="6">Xét Nghiệm</Option>
                    <Option value="7">Sinh thiết</Option>
                    <Option value="8">Đo điện tim</Option>
                    <Option value="9">Phẩu thuật</Option>
                </Select>
            </Form.Item>

            <Form.Item
                name="name"
                label="Mô tả chỉ định"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng nhập mô tả chỉ định',
                    },
                ]}
            >
                <Input.TextArea />
            </Form.Item>
        </Form>
    );
};
const CollectionCreateFormModal = ({ open, onCreate, onCancel, initialValues, callAPI, updateTotal }) => {
    const [formInstance, setFormInstance] = useState();
    return (
        <Modal
            open={open}
            title="Thêm hoạt động khám"
            okText="Xác nhận"
            cancelText="Hủy"
            okButtonProps={{
                autoFocus: true,
            }}
            onCancel={onCancel}
            destroyOnClose
            onOk={async () => {
                try {
                    const values = await formInstance?.validateFields();
                    formInstance?.resetFields();
                    onCreate(values);
                    callAPI(values);
                    updateTotal();
                } catch (error) {
                    console.log('Failed:', error);
                }
            }}
        >
            <CollectionCreateForm
                initialValues={initialValues}
                onFormInstanceReady={(instance) => {
                    setFormInstance(instance);
                }}
            />
        </Modal>
    );
};
const AddDoctorActivity = ({ callAPI, updateTotal }) => {
    const [formValues, setFormValues] = useState();
    const [open, setOpen] = useState(false);
    const onCreate = (values) => {
        console.log('Received values of form: ', values);
        setFormValues(values);
        setOpen(false);
    };
    return (
        <>
            <Button type="primary" onClick={() => setOpen(true)}>
                Thêm hoạt động khám
            </Button>
            <CollectionCreateFormModal
                open={open}
                onCreate={onCreate}
                onCancel={() => setOpen(false)}
                initialValues={{
                    modifier: 'public',
                }}
                callAPI={callAPI}
                updateTotal={updateTotal}
            />
        </>
    );
};
export default AddDoctorActivity;
