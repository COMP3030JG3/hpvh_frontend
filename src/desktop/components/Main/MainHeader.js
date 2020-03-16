import React from "react";
import { Layout, Menu, Button, Dropdown } from 'antd';
//import { Row, Col } from 'antd'
import { Link } from "react-router-dom";
import { DownOutlined } from '@ant-design/icons';
const { Header } = Layout;

export default (props) => {

    const logoStyle = {
        float: 'left',
        overflow: 'hidden',
        fontSize: '35px',
        color: '#FFFFFF',
        margin: '0 20px',
    }

    const langMenu = (
        <Menu >
            <Menu.Item key="en">English</Menu.Item>
            <Menu.Item key="zh">中文</Menu.Item>
        </Menu>
    );

    return (
        <Header style={{ padding: '0 10px' }}>
            <div style={logoStyle} >Healing Paws</div>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[props.history.location.pathname]}
                style={{ float: 'left', lineHeight: '64px' }}
            >
                <Menu.Item key="/">
                    <Link to="/" className="item">Home</Link>
                </Menu.Item>
                <Menu.Item key="/about">
                    <Link to="/about" className="item">About</Link>
                </Menu.Item>
                <Menu.Item key="/help">
                    <Link to="/help" className="item">Help</Link>
                </Menu.Item>
            </Menu>

            <div style={{ float: 'right', overflow: 'hidden' }}>
                <Dropdown overlay={langMenu}>
                    <Button type="link" ghost>
                        Language <DownOutlined />
                    </Button>
                </Dropdown>
                <Link to="/login" className="item">
                    <Button type="link">Login</Button>
                </Link>
                <Link to="/signin" className="item">
                    <Button type="link">Sign In</Button>
                </Link>
            </div>
        </Header>
    );
};



