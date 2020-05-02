import React, { useState } from "react";
import { Card, Avatar, Row, Col, } from 'antd';
import QueueAnim from 'rc-queue-anim'
import { ArrowLeftOutlined } from '@ant-design/icons';
export default (props) => {


    const data = {
        question: {
            avatar: "",
            userId: 1,
            userName: "John",
            id: 1,
            question: "This is Question".repeat(12),
            createTime: "2020-05-02 22:22",
            replies: 3
        },
        answers: [1, 2, 3, 4, 5, 6, 7, 8].map(item => (
            {
                questionId: 1,
                userId: item % 2,
                userName: "John",
                id: item,
                answer: "hhh",
                createTime: "2020-05-02 22:22",
            }
        ))
    }


    const answerList = data.answers.map(item => (
        <div key={item.id}>
            <Card
                bodyStyle={{ padding: "12px 16px" }}
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
                    <Col>
                        <Row>
                            <Col style={{ margin: "0 auto" }}>
                                <Avatar src={data.question.avatar} />
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
                    <Col style={{ marginLeft: "18px" }}>
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
            <Col span={14} offset={5}>
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


