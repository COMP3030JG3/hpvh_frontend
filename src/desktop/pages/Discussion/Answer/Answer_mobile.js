import React, { useState } from "react";
import { Card, Avatar, Row, Col, } from 'antd';
import QueueAnim from 'rc-queue-anim'
import { ArrowLeftOutlined } from '@ant-design/icons';
export default (props) => {


    const data = props.data


    const answerList = data.answers.map(item => (
        <div key={item.id}>
            <Card
                bodyStyle={item.user_type === 'employee' ? { padding: "12px 16px", backgroundColor: '#fffbf0' } : { padding: "12px 16px" }}
                className="antCard"
                hoverable={true}
                bordered={false}
                style={{
                    marginBottom: "8px",
                    cursor: "default",
                    width: "95%",
                    margin: "12px auto"
                }}
            >
                <Row >
                    <Col >
                        <Row>
                            <Col style={{ margin: "0 auto" }}>
                                <Avatar src={item.avatar} />
                            </Col>
                        </Row>
                        <Row >
                            <Col style={{ margin: "0 auto" }}>
                                <p style={{ fontSize: "16px" }}> {item.userName}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ margin: "0 auto" }}>
                                <p style={{ color: "#999" }}>  {item.createTime}</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col style={{ borderLeft: "1px solid #f0f0f0", paddingLeft: "12px", marginLeft: "18px" }}>
                        <div>{item.answer}</div>
                    </Col>
                </Row>
                <Row>
                    <Col offset={18} >

                    </Col>
                </Row>
            </Card>
        </div >
    ));


    return (
        <Row>
            <Col span={24} offset={0}>
                <QueueAnim
                    delay={100}
                    duration={1000}
                    type="right"
                >
                    <div key="answer">
                        <Card
                            bodyStyle={{ padding: "12px 16px" }}
                            className="antCard"
                            hoverable={true}
                            bordered={false}

                            title={
                                <div>
                                    <Avatar src={data.question.avatar} style={{ marginRight: "12px" }} />
                                    {data.question.userName}
                                    <div style={{ marginLeft: "12px", float: "right", fontSize: "20px", color: "#d9d9d9" }}>
                                        {"#" + data.question.id}
                                    </div>
                                    <div style={{ marginLeft: "16px", float: "right", fontSize: "16px", color: "#999" }}>
                                        {data.question.createTime}
                                    </div>

                                </div>

                            }
                            style={{ marginBottom: "8px", cursor: "default" }}
                        >
                            <div>
                                {data.question.question}
                            </div>

                            <div style={{ float: "right", color: "#69c0ff" }}>
                                {data.question.replies + "  replies"}
                            </div>
                        </Card>

                    </div>
                    {answerList}
                </QueueAnim>

            </Col>
        </Row>
    );
};


