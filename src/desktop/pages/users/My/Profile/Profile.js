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
                        <Tooltip placement="top" title={language["my.profile.iconTip.language"]}>
                            <Dropdown trigger="click" overlay={menu}><TranslationOutlined key="language" /></Dropdown>
                        </Tooltip>,

                        <Tooltip placement="top" title={language["my.profile.iconTip.edit"]}>
                            <EditOutlined onClick={props.onEditClick} key="edit" />
                        </Tooltip>,
                        <Tooltip placement="top" title={language["my.profile.iconTip.logOut"]}>
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
                        <Menu.Item key="appointments">{language["my.profile.menu.appointments"]}</Menu.Item>
                        <Menu.Item key="tracks">{language["my.profile.menu.tracks"]}</Menu.Item>
                        <Menu.Item key="newappointment">{language["my.profile.menu.newAppointment"]}</Menu.Item>
                    </Menu>

                </Card>
            </Card>
        </div>
    );
};