import React, { useState } from 'react';
import { Form, Input, Select, Row, Col, Checkbox, Button, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import "./less/signupForm.less"

const { Option } = Select;
const formItemLayout = {
    labelCol: {
        xs: {
            span: 10,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 26,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 5,
        },
    },
};
export default (props) => {

    const languages = props.messages;

    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );
    const [autoCompleteResult, setAutoCompleteResult] = useState([]);

    const onWebsiteChange = value => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${value}${domain}`));
        }
    };

    const websiteOptions = autoCompleteResult.map(website => ({
        label: website,
        value: website,
    }));

    return (
        <div>
            <Card className="signup-form">
                <Form
                    className='SingInForm'
                    layout='vertical'
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    initialValues={{
                        residence: ['zhejiang', 'hangzhou', 'xihu'],
                        prefix: '86',
                    }}
                    scrollToFirstError
                >


                    <Form.Item
                        name="username"
                        label="User Name:"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                        name="email"
                        label="E-mail:"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                        name="password"
                        label="Password:"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>


                    <Form.Item
                        name="confirm"
                        label="Confirm Password:"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject('The two passwords that you entered do not match!');
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="fullname"
                        label="Full Name:"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your full name!',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                        name="address"
                        label="Address:"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your address!',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>



                    {/* <Form.Item
        name="residence"
        label="Habitual Residence"
        rules={[
          {
            type: 'array',
            required: true,
            message: 'Please select your habitual residence!',
          },
        ]}
      > */}
                    {/* <Cascader options={residences} />
      </Form.Item> */}

                    <Form.Item
                        name="phone"
                        label="Phone Number:"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!',
                            },
                        ]}
                    >
                        <Input
                            addonBefore={prefixSelector}
                            style={{
                                width: '100%',
                            }}
                        />
                    </Form.Item>




                    <Form.Item
                        name="code"
                        rules={[
                            {
                                required: true,
                                message: languages["login.code"],
                            },
                        ]}
                    >
                        <Input style={{ width: "50%" }} /> <span style={{ float: "right" }}><img src="" alt="code" /></span>
                    </Form.Item>


                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" className="signup-form-button">
                            Register
        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};