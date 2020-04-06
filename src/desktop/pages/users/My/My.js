import React from "react";
import Profile from './Profile'
import { Row, Col } from 'antd';

export default (props) => {
    return (
        <div>
            <Row>
                <Col span={24}><div style={{ margin: "12px", backgroundColor: "#e6f7ff", height: "50px" }}></div></Col>
            </Row>
            <Row gutter={18}>
                <Col span={18}>
                    <div style={{ margin: "12px", backgroundColor: "#e6f7ff", height: "100%", width: "100%" }}>
                    </div>
                </Col>
                <Col span={6}><Profile /></Col>
            </Row>
        </div >
    );
};