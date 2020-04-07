import './less/my.less'
import React from "react";
import Profile from './Profile'
import { Row, Col, Card } from 'antd';

export default (props) => {
    return (
        <div className="my">
            <Row>
                <Col span={24}>
                    <div style={{}}>
                        <img width="250px" src="https://s1.ax1x.com/2020/03/29/GVqwRJ.png" alt="img"></img>
                    </div>
                </Col>
            </Row>
            <Row justify="space-between">
                <Col span={18} >
                    <Row justify="space-around" align="middle" >
                        <Col span={22} >
                            <Card>
                                ss
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col span={6} ><Profile /></Col>
            </Row>
        </div >
    );
};