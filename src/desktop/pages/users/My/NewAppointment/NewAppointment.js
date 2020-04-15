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
    'my.NewAppointment.label.petName': "Pet Name",
    'my.NewAppointment.label.meetingAddress': "Meenting Address",
    'my.NewAppointment.label.petBreed': "Pet Breed",
    'my.NewAppointment.label.petGender': "Pet Gender",
    'my.NewAppointment.label.petStateDiscription': "Pet State Discription",
    'my.NewAppointment.label.petPhoto': "Pet Photo",
    'my.NewAppointment.label.emergencyContact': "Emergency Contact",
    'my.NewAppointment.label.appointmentDate': "Appointment Date",
    'my.NewAppointment.label.submit': "Submit"
};

export default (props) => {
    
    const languages = messages;


    const layout = {
        labelCol: { span: 8, },
        wrapperCol: { span: 16 },
    };


    // const prop = {
    //     name: 'file',
    //     action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    //     headers: {
    //       authorization: 'authorization-text',
    //     },
    //     onChange(info) {
    //         if (info.file.status !== 'uploading') {
    //             console.log(info.file, info.fileList);
    //         }
    //         if (info.file.status === 'done') {
    //             message.success(`${info.file.name} file uploaded successfully`);
    //         } 
    //         else if (info.file.status === 'error') {
    //             message.error(`${info.file.name} file upload failed.`);
    //         }
    //     },
    // };


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
                        <Form.Item name="petName" label={languages["my.NewAppointment.label.petName"]} rules={[{ required: true, message: 'Pet name is required!' }]}>
                            <Input />
                        </Form.Item>


                        <Form.Item name="petGreed" label={languages["my.NewAppointment.label.petBreed"]} rules={[{ required: true, message: 'Please select pet kind!' }]}>
                            <Radio.Group>
                                <Radio value="dog">Dog</Radio>
                                <Radio value="cat">Cat</Radio>
                            </Radio.Group>
                        </Form.Item>


                        <Form.Item name="petGender" label={languages["my.NewAppointment.label.petGender"]} rules={[{ required: true, message: 'Please select pet Gender!' }]}>
                            <Radio.Group>
                                <Radio value="male">Male</Radio>
                                <Radio value="female">Female</Radio>
                            </Radio.Group>
                        </Form.Item>
                        


                        <Form.Item name="meetingAddress" label={languages["my.NewAppointment.label.meetingAddress"]} rules={[{ required: true, message: 'Please select address!' }]}>
                            <Select placeholder="Select Place">
                                <Option value="beijing">BeiJing</Option>
                                <Option value="shanghai">ShangHai</Option>
                                <Option value="chengdu">ChengDu</Option>
                            </Select>
                        </Form.Item>

                        
                        <Form.Item name="petStateDiscription" label={languages["my.NewAppointment.label.petStateDiscription"]}>
                            <Input.TextArea />
                        </Form.Item>


                        {/* <Form.Item name="petPhoto" label={languages["my.NewAppointment.label.petPhoto"]}>
                            <Upload {...prop}>
                                <Button>
                                    <UploadOutlined /> Click to Upload
                                </Button>
                            </Upload>
                        </Form.Item> */}

                        

                        <Form.Item name="emergencyContact" label={languages["my.NewAppointment.label.emergencyContact"]} rules={[{ required: true, message: 'Please input your emergency contact number!' }]}>
                            <Input />
                        </Form.Item>


                        
                        <Form.Item name="appointmentDate" label={languages["my.NewAppointment.label.appointmentDate"]} rules={[{ required: true, message: 'Please Select your appointment date!' }]}>
                            <DatePicker showTime onChange={onChange} onOk={onOk} />
                        </Form.Item>


               
                        
                        <Button type="primary" style={{display:"block", margin:"0 auto"}}   htmlType="submit">
                            {languages["my.NewAppointment.label.submit"]}
                        </Button>
                        
                    </Form>
                </Col>
            </Row>
        </div>
    );
};