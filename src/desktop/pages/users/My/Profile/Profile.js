import React from "react";
import { Card, Avatar, Button, Menu, Dropdown } from 'antd';
import { EditOutlined, ExportOutlined, TranslationOutlined, MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
const { Meta } = Card;
const { SubMenu } = Menu;

export default (props) => {
    const { data } = props
    const handleClick = (e) => {
        console.log('click', e);
    }

    const menu = (
        <Menu onClick={props.onLangChange} >
            <Menu.Item key="en">English</Menu.Item>
            <Menu.Item key="zh">中文</Menu.Item>
        </Menu>
    );

    return (
        <div>
            <Card

                actions={[
                    <Dropdown overlay={menu}><TranslationOutlined key="language" /></Dropdown>,
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <ExportOutlined key="logout" />,
                ]}
            >
                <Meta
                    avatar={<Avatar size="large" src={data.avatar} alt={data.name} />}
                    title={data.name}
                    description={data.description}
                />
            </Card>
            <Card

            >


                <Menu
                    onClick={handleClick}
                    style={{ width: "100%", border: 0 }}
                    defaultOpenKeys={['appointments']}
                    mode="inline"
                >
                    <Menu.Item key="appointments">My Appointment</Menu.Item>
                    <Menu.Item key="healingpets">Healing Pets</Menu.Item>
                    <Menu.Item key="newappointment">Make New Appointment</Menu.Item>
                </Menu>

            </Card>
        </div>
    );
};