import React, { useState } from "react";
import { Card, Avatar, Row, Col, Button, Affix } from 'antd';
import "./less/discussion.less";
import QueueAnim from 'rc-queue-anim';
import Answer from './Answer'
import { ArrowLeftOutlined, PlusOutlined } from '@ant-design/icons';
export default (props) => {
    const [showAnswers, setShowAnswers] = useState(false);

    const data = [1, 2, 3, 4, 5, 6, 7, 8].map(item => ({
        avatar: "",
        userId: item,
        userName: "John",
        id: item,
        question: "This is Question".repeat(12),
        createTime: "2020-05-02 22:22",
        replies: 3
    }))


    const onViewClick = (item) => {
        console.log(item);
        setShowAnswers(true);
    }

    const onBackClick = (isAnswer) => {
        isAnswer ? setShowAnswers(false) : console.log(props.history);
    }



    const questionList = data.map(item => (
        <div key={item.id}>
            <Card
                bodyStyle={{ padding: "12px 16px" }}
                className="antCard"
                hoverable={true}
                bordered={false}
                onClick={() => onViewClick(item.id)}
                title={
                    <div>
                        <Avatar src={item.avatar} style={{ marginRight: "12px" }} />
                        {item.userName}
                        <div style={{ marginLeft: "12px", float: "right", fontSize: "20px", color: "#d9d9d9" }}>
                            {"#" + item.id}
                        </div>
                        <div style={{ marginLeft: "16px", float: "right", fontSize: "16px", color: "#999" }}>
                            {item.createTime}
                        </div>

                    </div>

                }
                style={{ marginBottom: "8px" }}
            >
                <div>
                    {item.question}
                </div>

                <div style={{ float: "right", color: "#69c0ff" }}>

                    {item.replies + "  replies"}
                </div>
            </Card>
        </div>
    ));

    const question = (<div>
        <Row>
            <Col span={14} offset={5}>
                <QueueAnim
                    delay={100}
                    duration={1000}
                    type="right"
                >
                    {questionList}
                </QueueAnim>
            </Col>
        </Row>
    </div>);

    return (
        <div className="discussion" >
            <Row >
                <Col span={20}>
                    <QueueAnim
                        delay={100}
                        duration={1000}
                        type="top"
                    >
                        <div key="image">
                            <img width="350px" alt="HVPH" height="60px" src="/logo.svg" style={{ margin: "24px" }}></img>
                        </div>
                    </QueueAnim>

                </Col>
                <Col span={4}>
                    <Affix style={{ position: "fixed" }} offsetTop={120} onChange={affixed => console.log(affixed)}>
                        <div style={{ marginBottom: "24px" }}>
                            <Avatar
                                onClick={() => onBackClick(showAnswers)}
                                className="fixed-widgets fixed-widgets-back"
                                size={64}
                                icon={<ArrowLeftOutlined />}
                            />
                        </div>
                        <div>
                            <Avatar
                                onClick={(e) => console.log(e)}
                                className="fixed-widgets fixed-widgets-add"
                                size={64}
                                icon={<PlusOutlined />}
                            />
                        </div>
                    </Affix>,
                </Col>
            </Row>


            {showAnswers ? <Answer setShowAnswers={(e) => setShowAnswers(e)} /> : question}

        </div>
    );
};