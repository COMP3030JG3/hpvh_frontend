import React from "react";
import {
    Form,
    Input,
    InputNumber,
    Button,
    Row,
    Col
} from "antd"

const messages = {
    'my.profileEditor.label.userName': "User Name",
    'my.profileEditor.label.password': "Password",
    'my.profileEditor.label.email': "Email",
    'my.profileEditor.label.phoneNumber': "Phone Number",
    'my.profileEditor.label.address': "Address",
    'my.profileEditor.button.submit': "Submit"
};

export default (props) => {

    const languages = messages;

    const layout = {
        labelCol: { span: 8, },
        wrapperCol: { span: 16 },
    };

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not validate email!'
        },
    };


    const onFinish = values => {
        console.log(values);
    };

    return (
        <div>
            <Row>
                <Col span={12} offset={5}>

                    <Form {...layout} labelAlign="right" name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                        <Form.Item name={'name'} label={languages["my.profileEditor.label.userName"]} rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={'password'} label={languages["my.profileEditor.label.password"]} rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={'email'} label={languages["my.profileEditor.label.email"]} rules={[{ type: 'email' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={'number'} label={languages["my.profileEditor.label.phoneNumber"]} >
                            <Input />
                        </Form.Item>
                        <Form.Item name={'address'} label={languages["my.profileEditor.label.address"]}>
                            <Input />
                        </Form.Item>
                        <Button type="primary" htmlType="submit" style={{display:"block",margin:"0 auto"}}>
                            {languages["my.profileEditor.button.submit"]}
                        </Button>
                    </Form>

                </Col>
            </Row>
        </div>
    );
};