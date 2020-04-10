import React from "react";
import {
    Row,
    Col,
    Form,
    Input,
    Button,
    Select,
    Radio,
    Upload, 
    message,
    DatePicker
} from "antd";
import { UploadOutlined } from '@ant-design/icons';


const messages = {
    'my.NewAppointment.label.PetName': "Pet Name",
    'my.NewAppointment.label.Address': "Address",
    'my.NewAppointment.label.PetBreed': "Pet Breed",
    'my.NewAppointment.label.PetGender': "Pet Gender",
    'my.NewAppointment.label.PetStateDiscription': "Pet State Discription",
    'my.NewAppointment.label.PetPhoto': "Pet Photo",
    'my.NewAppointment.label.EmergencyContact': "Emergency Contact",
    'my.NewAppointment.label.AppointmentDate': "Appointment Date"
};

export default (props) => {
    
    const languages = messages;


    const layout = {
        labelCol: { span: 8, },
        wrapperCol: { span: 16 },
    };


    const prop = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } 
            else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };


    const onFinish = values => {
        console.log(values);
    };

    const { Option } = Select;

    function onChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    }

    function onOk(value) {
        console.log('onOk: ', value);
    }

    return (
        <div>
            <Row>
                <Col span={12} offset={6}>

                    <Form {...layout} labelAlign="right" name="nest-messages" onFinish={onFinish}>
                        <Form.Item name="PetName" label={languages["my.NewAppointment.label.PetName"]} rules={[{ required: true, message: 'Pet name is required!' }]}>
                            <Input />
                        </Form.Item>


                        <Form.Item name="PetGreed" label={languages["my.NewAppointment.label.PetBreed"]} rules={[{ required: true, message: 'Please select pet kind!' }]}>
                            <Radio.Group>
                                <Radio value="dog">Dog</Radio>
                                <Radio value="cat">Cat</Radio>
                            </Radio.Group>
                        </Form.Item>


                        <Form.Item name="PetGender" label={languages["my.NewAppointment.label.PetGender"]} rules={[{ required: true, message: 'Please select pet Gender!' }]}>
                            <Radio.Group>
                                <Radio value="male">Male</Radio>
                                <Radio value="female">Female</Radio>
                            </Radio.Group>
                        </Form.Item>
                        


                        <Form.Item name="Address" label={languages["my.NewAppointment.label.Address"]} rules={[{ required: true, message: 'Please select address!' }]}>
                            <Select placeholder="Select Place">
                                <Option value="beijing">BeiJing</Option>
                                <Option value="shanghai">ShangHai</Option>
                                <Option value="chengdu">ChengDu</Option>
                            </Select>
                        </Form.Item>

                        
                        <Form.Item name="PetStateDiscription" label={languages["my.NewAppointment.label.PetStateDiscription"]}>
                            <Input.TextArea />
                        </Form.Item>


                        <Form.Item name="PetPhoto" label={languages["my.NewAppointment.label.PetPhoto"]}>
                            <Upload {...prop}>
                                <Button>
                                    <UploadOutlined /> Click to Upload
                                </Button>
                            </Upload>
                        </Form.Item>

                        

                        <Form.Item name="EmergencyContact" label={languages["my.NewAppointment.label.EmergencyContact"]} rules={[{ required: true, message: 'Please input your emergency contact number!' }]}>
                            <Input />
                        </Form.Item>


                        
                        <Form.Item name="AppointmentDate" label={languages["my.NewAppointment.label.AppointmentDate"]} rules={[{ required: true, message: 'Please Select your appointment date!' }]}>
                            <DatePicker showTime onChange={onChange} onOk={onOk} />
                        </Form.Item>


               
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};