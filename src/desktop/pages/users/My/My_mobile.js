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
    const languages = props.messages;
    const switchContent = (key) => {
        const AnimeContent = (props) => {
            return (
                <QueueAnim
                    delay={100}
                    duration={1000}
                    type="left"
                >
                    <div key={props.children.key}>
                        <Card bordered={false} bodyStyle={{ padding: "0" }} style={{ cursor: 'default' }}>
                            {props.children}
                        </Card>
                    </div>

                </QueueAnim>
            )
        }
        switch (key) {
            case 'profileeditor':
                return <AnimeContent><ProfileEditor isMobile={props.isMobile} key="ProfileEditor" /></AnimeContent>;
            case 'appointments':
                return <AnimeContent><Appointments isMobile={props.isMobile} key="appointments" /></AnimeContent>;
            case 'newappointment':
                return <AnimeContent><NewAppointment isMobile={props.isMobile} key="newappointment" /></AnimeContent>;
            case 'tracks':
                return <AnimeContent><Tracks isMobile={props.isMobile} key="tracks" /></AnimeContent>;
            default:
                return "";
        }
    }




    return (
        <div className="my" style={{ padding: "0 0px" }}>


            <Row>
                <Col style={{ width: "100%" }}>
                    <QueueAnim
                        delay={100}
                        duration={400}
                        type="top"

                    >
                        <Menu onClick={props.onMenuClick} mode="horizontal">

                            <SubMenu icon={<MenuOutlined />} style={{ float: "right" }}>
                                <Menu.ItemGroup title={props.fullname}>
                                </Menu.ItemGroup>
                                <SubMenu key="language" title={languages["my.profile.iconTip.language"]}>
                                    <Menu.Item key="zh">中文</Menu.Item>
                                    <Menu.Item key="en">English</Menu.Item>
                                </SubMenu>
                                <SubMenu key="app" title={languages["my.profile.menu.appointment"]}>
                                    <Menu.Item key="appointments">{languages["my.profile.menu.appointments"]}</Menu.Item>
                                    <Menu.Item key="tracks">{languages["my.profile.menu.tracks"]}</Menu.Item>
                                    <Menu.Item key="newappointment">{languages["my.profile.menu.newAppointment"]}</Menu.Item>
                                </SubMenu>
                                <Menu.Item key="profileeditor">{languages["my.profile.iconTip.edit"]}</Menu.Item>
                                <Menu.Item key="discus1sion">
                                    <Link to="/discussion" onClick={() => { props.onLinkClick('user') }}>{languages["my.profile.menu.discussion"]}</Link>

                                </Menu.Item>
                                <Menu.Item key="logout">{languages["my.profile.iconTip.logOut"]}</Menu.Item>
                            </SubMenu>

                        </Menu>
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

                                {switchContent(props.myContent)}

                            </Col>
                        </Row>
                    </QueueAnim>
                </Col>

            </Row>

        </div >
    );
};