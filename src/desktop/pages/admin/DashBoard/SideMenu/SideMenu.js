import React from "react";
import { Card, Avatar, Menu, Dropdown, Tooltip } from 'antd';
import { EditOutlined, ExportOutlined, TranslationOutlined } from '@ant-design/icons';
const { Meta } = Card;

const messages = {


}


export default (props) => {
    const { data } = props;
    const language = props.messages;

    const menu = (
        <Menu onClick={props.onLangChange} >
            <Menu.Item key="en">English</Menu.Item>
            <Menu.Item key="zh">中文</Menu.Item>
        </Menu>

    );

    return (
        <div  >
            <Card className="antCard" hoverable={true} style={{ cursor: 'default' }} bordered={false} bodyStyle={{ padding: '0px' }}>
                <Card
                    bordered={false}
                    actions={[
                        <Tooltip placement="top" title={language["dashBoard.sideMenu.iconTip.language"]}>
                            <Dropdown trigger="click" overlay={menu}><TranslationOutlined key="language" /></Dropdown>
                        </Tooltip>,
                        <Tooltip placement="top" title={language["dashBoard.sideMenu.iconTip.logOut"]}>
                            <ExportOutlined key="logout" />
                        </Tooltip>,

                    ]}
                >
                    <Meta
                        avatar={<Avatar size="large" src={data.avatar} alt={data.name} />}
                        title={data.name}
                        description={data.description}
                    />
                </Card>
                <Card
                    bordered={false}
                    bodyStyle={{ padding: '0px' }}
                >
                    <Menu
                        onClick={props.onMenuClick}
                        style={{ width: "100%", border: 0 }}

                        selectedKeys={[props.menuKey]}
                        mode="inline"
                    >
                        <Menu.Item key="appointments">{language["dashBoard.sideMenu.menu.appointments"] || "appointments"}</Menu.Item>
                        <Menu.Item key="operations">{language["dashBoard.sideMenu.menu.operations"] || "operations"}</Menu.Item>
                        <Menu.Item key="employees">{language["dashBoard.sideMenu.menu.employees"] || "employees"}</Menu.Item>
                    </Menu>

                </Card>
            </Card>
        </div>
    );
};