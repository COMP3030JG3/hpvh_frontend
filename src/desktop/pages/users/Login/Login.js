import React from 'react';

import { Form, Input, Button, Checkbox, Card, Radio } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import "./less/loginForm.less"


export default (props) => {

    const languages = props.messages;

    return (
        <div>
            <Card className="login-form">
                <Form
                    name="normal_login"
                    layout="vertical"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={props.onFormFinish}
                >
                    <Form.Item
                        name="username"
                        label={languages["login.username"]}
                        rules={[
                            {
                                required: true,
                                message: languages["login.requsername"],
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />}
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label={languages["login.password"]}
                        rules={[
                            {
                                required: true,
                                message: languages["login.reqpassword"],
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"

                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>{languages["login.remember"]}</Checkbox>
                        </Form.Item>

                        <Link className="login-form-right" to="">
                            {languages["login.forgot"]}
                        </Link>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            {languages["login.loginbutton"]}
                        </Button>
                        {languages["login.or"]}
                        <Button type="dash" className="login-form-button">
                            <Link to="/signup">
                                {languages["login.signup"]}
                            </Link>
                        </Button>
                    </Form.Item>

                    <Radio.Group onChange={props.onLangChange} className="login-form-right" defaultValue={props.lang} size="small" buttonStyle="solid">
                        <Radio.Button value="en">English</Radio.Button>
                        <Radio.Button value="zh">中文</Radio.Button>
                    </Radio.Group>
                </Form>
            </Card>
        </div>
    );
};

