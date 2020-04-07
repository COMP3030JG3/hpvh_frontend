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
    'my.profileEditor.label.fullName': "Full Name"
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
        number: {
            range: '${label} must be between ${min} and ${max}',
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
                        <Form.Item name={['user', 'name']} label={languages["my.profileEditor.label.fullName"]} rules={[{ required: true }]}>
                            <Input />
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