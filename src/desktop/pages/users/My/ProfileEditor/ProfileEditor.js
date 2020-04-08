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
    'my.profileEditor.label.address': "Address"
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
            email: '${label} is not validate email!',
            number: '${label} is not a validate number!',
        },
    };


    const onFinish = values => {
        console.log(values);
    };

    return (
        <div>
            <Row>
                <Col span={12} offset={6}>

                    <Form {...layout} labelAlign="right" name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                        <Form.Item name={['user', 'name']} label={languages["my.profileEditor.label.userName"]} rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={['user', 'password']} label={languages["my.profileEditor.label.password"]} rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={['user', 'email']} label={languages["my.profileEditor.label.email"]} rules={[{ type: 'email' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={['user', 'number']} label={languages["my.profileEditor.label.phoneNumber"]} rules={[{ type: 'number' }]}>
                            <InputNumber />
                        </Form.Item>
                        <Form.Item name={['user', 'address']} label={languages["my.profileEditor.label.address"]}>
                            <Input />
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