import './less/my.less'
import React, { useState } from "react";
import Profile from './Profile'
import { Row, Col, Button, Card, Affix, Avatar, Menu } from 'antd';
import ProfileEditor from "./ProfileEditor"
import Appointments from "./Appointments"
import NewAppointment from "./NewAppointment"
import Tracks from "./Tracks"
import QueueAnim from 'rc-queue-anim';
import { Link } from 'react-router-dom';
import { CommentOutlined, MenuOutlined } from '@ant-design/icons'

const { SubMenu } = Menu;
export default (props) => {
    const { SubMenu } = Menu;
    const [collapsed, setCollapsed] = useState(true)

    const switchContent = (key) => {
        const AnimeContent = (props) => {
            return (
                <QueueAnim
                    delay={100}
                    duration={1000}
                    type="left"
                >
                    <div key={props.children.key}>
                        <Card bordered={false} className="antCard" hoverable={true} style={{ cursor: 'default' }}>
                            {props.children}
                        </Card>
                    </div>

                </QueueAnim>
            )
        }
        switch (key) {
            case 'profileeditor':
                return <AnimeContent><ProfileEditor key="ProfileEditor" /></AnimeContent>;
            case 'appointments':
                return <AnimeContent><Appointments key="appointments" /></AnimeContent>;
            case 'newappointment':
                return <AnimeContent><NewAppointment key="newappointment" /></AnimeContent>;
            case 'tracks':
                return <AnimeContent><Tracks key="tracks" /></AnimeContent>;
            default:
                return "";
        }
    }
    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    };
    return (
        <div className="my" style={{ padding: "0 0px" }}>
            <Row>
                <Col>
                    <Button size="large" type="link" onClick={toggleCollapsed} style={{ float: "left" }} ghost >
                        <MenuOutlined />
                    </Button>
                </Col>
            </Row>

            <Row>
                <Col style={{ width: "100%" }}>
                    <QueueAnim
                        delay={100}
                        duration={400}
                        type="top"

                    >
                        {collapsed ? <></> : <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            key="menu"


                        >
                            <Menu.Item key="1" >
                                Option 1
                            </Menu.Item>
                            <Menu.Item key="2" >
                                Option 2
                            </Menu.Item>
                            <Menu.Item key="3" >
                                Option 3
                            </Menu.Item>
                            <SubMenu key="sub1" title="Navigation One">
                                <Menu.Item key="5">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title="Navigation Two">
                                <Menu.Item key="9">Option 9</Menu.Item>
                                <Menu.Item key="10">Option 10</Menu.Item>
                                <SubMenu key="sub3" title="Submenu">
                                    <Menu.Item key="11">Option 11</Menu.Item>
                                    <Menu.Item key="12">Option 12</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                        </Menu>}
                    </QueueAnim>
                </Col>
            </Row>

            <Row justify="space-between">
                <Col span={24} >
                    <QueueAnim
                        delay={100}
                        duration={1000}
                        type="left"
                    >
                        <Row key="content" justify="space-around" align="middle" >
                            <Col span={24} >

                                {switchContent("newappointment")}

                            </Col>
                        </Row>
                    </QueueAnim>
                </Col>

            </Row>

        </div >
    );
};