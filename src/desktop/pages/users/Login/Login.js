import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./Login.css"

export default (props) => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
      <div className='loginform'>
          Login
    <Form
      name="normal_login"
      className="login-form"
      layout = "vertical"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
        <hr/>
      <Form.Item
        name="username"
        label="User Name:"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password:"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <br/>
        <a className="login-form-forgot" href="">
          Forgot password?
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
    </div>
  );
};
