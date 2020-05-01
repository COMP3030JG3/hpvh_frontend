import './less/dashBoard.less'
import React from "react";
import SideMenu from './SideMenu'
import { Row, Col, Card } from 'antd';
import Appointments from './Appointments';
import Operations from './Operations';
import QueueAnim from 'rc-queue-anim';



export default (props) => {

    const switchContent = (key) => {
        const AnimeContent = (props) => {
            return (
                <QueueAnim
                    delay={100}
                    duration={1000}
                    type="right"
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
            case 'appointments':
                return <AnimeContent><Appointments key="appointments" /></AnimeContent>;
            case 'operations':
                return <AnimeContent><Operations key="operations" /></AnimeContent>;
            default:
                return <AnimeContent>test</AnimeContent>;
        }
    }

    return (
        <div className="dashBoard">
            <Row >
                <Col span={24}>
                    <QueueAnim
                        delay={100}
                        duration={1000}
                        type="top"
                    >
                        <div key="image">
                            <img width="350px" alt="HVPH" height="60px" src="/logo.svg" style={{ margin: "24px", float: "right" }}></img>
                        </div>
                    </QueueAnim>
                </Col>
            </Row>

            <Row justify="space-between">
                <Col span={4} >
                    <QueueAnim
                        delay={100}
                        duration={1000}
                        type="left"
                    >
                        <div key="content" >
                            <SideMenu />
                        </div>
                    </QueueAnim>
                </Col>
                <Col span={20} >
                    <QueueAnim
                        delay={100}
                        duration={1000}
                        type="left"
                    >
                        <Row key="content" justify="space-around" align="middle" >
                            <Col span={22} >

                                {switchContent(props.dashBoardContent)}

                            </Col>
                        </Row>
                    </QueueAnim>
                </Col>

            </Row>

        </div >
    );
};