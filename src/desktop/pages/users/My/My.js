import './less/my.less'
import React from "react";
import Profile from './Profile'
import { Row, Col, Card } from 'antd';
import ProfileEditor from "./ProfileEditor"
import Appointments from "./Appointments"
import NewAppointment from "./NewAppointment"
import Tracks from "./Tracks"
import QueueAnim from 'rc-queue-anim';



export default (props) => {

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

    return (
        <div className="my">
            <Row >
                <Col span={24}>
                    <QueueAnim
                        delay={100}
                        duration={1000}
                        type="top"
                    >
                        <div key="image">
                            <img width="350px" height="60px" src="/logo.svg" style={{ margin: "24px" }}></img>
                        </div>
                    </QueueAnim>
                </Col>
            </Row>

            <Row justify="space-between">
                <Col span={18} >
                    <QueueAnim
                        delay={100}
                        duration={1000}
                        type="left"
                    >
                        <Row key="content" justify="space-around" align="middle" >
                            <Col span={22} >

                                {switchContent(props.myContent)}

                            </Col>
                        </Row>
                    </QueueAnim>
                </Col>
                <Col span={6} >
                    <QueueAnim
                        delay={100}
                        duration={1000}
                        type="bottom"
                    >
                        <div key="content" >
                            <Profile />
                        </div>
                    </QueueAnim>
                </Col>
            </Row>

        </div >
    );
};