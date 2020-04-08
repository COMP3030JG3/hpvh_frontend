import React from "react";
import {
    Row,
    Col,
    Form,
    Input,
    InputNumber,
    Button,
    Select,
    Radio,
    Upload, 
    message
} from "antd";
import { UploadOutlined } from '@ant-design/icons';


const messages = {
    'my.NewAppointment.label.PetName': "Pet Name",
    'my.NewAppointment.label.Address': "Address",
    'my.NewAppointment.label.PetBreed': "Pet Breed",
    'my.NewAppointment.label.PetGender': "Pet Gender",
    'my.NewAppointment.label.PetStateDiscription': "Pet State Discription"
};

export default (props) => {
    
    const languages = messages;


    const layout = {
        labelCol: { span: 8, },
        wrapperCol: { span: 16 },
    };

    const onFinish = values => {
        console.log(values);
    };

    const { Option } = Select;

    return (
        <div>
            <Row>
                <Col span={12} offset={6}>

                    <Form {...layout} labelAlign="right" name="nest-messages" onFinish={onFinish}>
                        <Form.Item name="PetName" label={languages["my.NewAppointment.label.PetName"]} rules={[{ required: true, message: 'Pet name is required' }]}>
                            <Input />
                        </Form.Item>


                        <Form.Item name="PetGreed" label={languages["my.NewAppointment.label.PetBreed"]} rules={[{ required: true, message: 'Please select pet kind' }]}>
                            <Radio.Group>
                                <Radio value="dog">Dog</Radio>
                                <Radio value="cat">Cat</Radio>
                            </Radio.Group>
                        </Form.Item>


                        <Form.Item name="PetGender" label={languages["my.NewAppointment.label.PetGender"]} rules={[{ required: true, message: 'Please select pet Gender' }]}>
                            <Radio.Group>
                                <Radio value="male">Male</Radio>
                                <Radio value="female">Female</Radio>
                            </Radio.Group>
                        </Form.Item>
                        


                        <Form.Item name="Address" label={languages["my.NewAppointment.label.Address"]} rules={[{ required: true, message: 'Please select address' }]}>
                            <Select placeholder="Select Place">
                                <Option value="beijing">BeiJing</Option>
                                <Option value="shanghai">ShangHai</Option>
                                <Option value="chengdu">ChengDu</Option>
                            </Select>
                        </Form.Item>

                        
                        <Form.Item name="PetStateDiscription" label={languages["my.NewAppointment.label.PetStateDiscription"]}>
                            <Input.TextArea />
                        </Form.Item>


                        <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                            <Input />
                        </Form.Item>


                        <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
                            <InputNumber />
                        </Form.Item>


                        <Form.Item name={['user', 'website']} label="Website">
                            <Input />
                        </Form.Item>


                        <Form.Item name={['user', 'introduction']} label="Introduction">
                            <Input.TextArea />
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