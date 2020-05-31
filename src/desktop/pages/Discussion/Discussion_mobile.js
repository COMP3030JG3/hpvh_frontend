import React, { useState } from "react";
import { Card, Avatar, Row, Col, Button, Affix, Form, Radio, Input, Modal } from 'antd';
import "./less/discussion.less";
import QueueAnim from 'rc-queue-anim';
import Answer from './Answer'
import { ArrowLeftOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
export default (props) => {
    const [showAnswers, setShowAnswers] = useState(false);
    const [showQuestionModal, setShowQuestionModal] = useState(false);
    const [showAnswerModal, setShowAnswerModal] = useState(false);
    const [showSearchModal, setShowSearchModal] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [questionId, setQuestionId] = useState(0);
    const [ques, setQues] = useState({});

    const datae = [1, 2, 3, 4, 5, 6, 7, 8].map(item => ({
        avatar: "",
        userId: item,
        userName: "John",
        id: item,
        question: "This is Question".repeat(12),
        createTime: "2020-05-02 22:22",
        replies: 3
    }))
    const data = props.data || []


    const onViewClick = (item) => {
        setQuestionId(item.id)
        setQues(item)
        props.onAnswerClick(item.id)
        setShowAnswers(true);
    }
    const back = () => {
        setShowAnswers(false)
        props.resetAnswer()
        props.resetQuestion()
        props.getQuestions({ index: 1 })
    }
    const onBackClick = (isAnswer) => {
        isAnswer ?
            back()
            : props.entry === 'user' ?
                props.history.push('/my')
                : props.entry === 'employee' ?
                    props.history.push('/dashboard')
                    : props.history.push('/')

    }

    const onAddClick = (isAnswer) => {
        isAnswer ? setShowAnswerModal(true) : setShowQuestionModal(true);
    }

    const onSearchClick = (isAnswer) => {
        setShowSearchModal(true);
    }

    const onQuestionFinish = (v) => {

        props.onQuestionFinish(v)
    }

    const onAnswerFinish = (v) => {
        let type = props.entry === 'user' ? 'customer' : 'employee'
        let d = {
            content: v.answer,
            user_type: type,
            question_id: questionId
        }
        props.onAnswerFinish(d)
    }


    const onFinish = (e) => {

    }
    const onSearch = (e) => {
        console.log(e)
        setSearchValue('e')
        props.onQuestionSearch(e)
    }

    const questionList = data.map(item => (
        <div key={item.id}>
            <Card
                bodyStyle={{ padding: "12px 16px" }}
                className="antCard"
                hoverable={true}
                bordered={false}
                onClick={() => onViewClick(item)}
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

    const onLoadMoreClick = () => {



        if (showAnswers) {
            props.getAnswers({ index: props.answersIndex + 1, question_id: questionId })
        } else {
            let data = { index: props.questionsIndex + 1 }

            if (searchValue !== '') {
                data.content = searchValue;
            }

            props.getQuestions(data);
        }


    }

    const LoadMore = () => {
        console.log(props.answersTotal, props.answersIndex)
        if (showAnswers) {
            return (
                props.answersTotal / (props.answersIndex * 15) >= 1 ?
                    <Button onClick={onLoadMoreClick} type="link" size="large" style={{ display: "block", margin: "0 auto" }}>
                        more...
            </Button> : <></>
            )
        } else {
            return (


                props.questionsTotal / (props.questionsIndex * 15) >= 1 ?
                    <Button onClick={onLoadMoreClick} type="link" size="large" style={{ display: "block", margin: "0 auto" }}>
                        more...
        </Button> : <></>
            )
        }


    }

    const question = (<div>
        <Row>
            <Col span={24} offset={0}>
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
        <div className="discussion" style={{ padding: "0" }}>

            <Affix style={{ zIndex: 11, position: "fixed", bottom: 12, width: "100%" }} >
                <Row >
                    <Col span={8} >
                        <Avatar
                            onClick={() => onBackClick(showAnswers)}
                            className="fixed-widgets fixed-widgets-back"
                            size={48}
                            icon={<ArrowLeftOutlined />}
                            style={{ display: "block", margin: "0 auto" }}
                        />
                    </Col>
                    <Col span={8}>
                        {
                            props.entry === 'anonymous' ?
                                <></>
                                : props.entry === 'user' ?
                                    <Avatar
                                        onClick={() => onAddClick(showAnswers)}
                                        className="fixed-widgets fixed-widgets-add"
                                        size={48}
                                        icon={<PlusOutlined />}
                                        style={{ display: "block", margin: "0 auto" }}
                                    />
                                    : showAnswers ?
                                        <Avatar
                                            onClick={() => onAddClick(showAnswers)}
                                            className="fixed-widgets fixed-widgets-add"
                                            size={48}
                                            icon={<PlusOutlined />}
                                            style={{ display: "block", margin: "0 auto" }}
                                        />
                                        : <></>
                        }

                    </Col>
                    <Col span={8}>
                        {showAnswers ?
                            <></>
                            : <Avatar
                                onClick={() => onSearchClick(showAnswers)}
                                className="fixed-widgets fixed-widgets-back"
                                size={48}
                                icon={<SearchOutlined />}
                                style={{ display: "block", margin: "0 auto" }}
                            />}
                    </Col>
                </Row>

            </Affix>,

            <div style={{ padding: "0 12px" }}>
                {showAnswers ? <Answer isMobile={true} question={ques} questionId={questionId} setShowAnswers={(e) => setShowAnswers(e)} /> : question}
                <LoadMore />
                <HandleQuestionModal
                    resetQuestion={props.resetQuestion}
                    getQuestions={props.getQuestions}
                    onFinish={onQuestionFinish}
                    showModal={showQuestionModal}
                    setShowModal={setShowQuestionModal}
                />

                <HandleAnswerModal
                    questionId={questionId}
                    resetAnswer={props.resetAnswer}
                    getAnswers={props.getAnswers}
                    onFinish={onAnswerFinish}
                    showModal={showAnswerModal}
                    setShowModal={setShowAnswerModal}
                />

                <HandleSearchModal
                    onFinish={onFinish}
                    onSearch={onSearch}
                    showModal={showSearchModal}
                    setShowModal={setShowSearchModal}
                />

            </div>

        </div>
    );
};

const HandleQuestionModal = (props) => {

    const layout = {
        labelCol: { span: 4, },
        wrapperCol: { span: 20, offset: 0 },
    };

    const { languages, setShowModal } = props;

    const onOk = () => {
        setShowModal(false);

    };


    const onCancel = () => {
        setShowModal(false);

    };



    return (
        <div>
            <Modal
                title={"Add Question"}
                visible={props.showModal}
                onOk={onOk}
                confirmLoading={props.confirmLoading}
                onCancel={onCancel}
                width="100%"
                style={{ top: 20 }}
                footer={null}
            >
                <Form
                    {...layout}
                    name="edit"
                    initialValues={{}} onFinish={props.onFinish}
                >
                    <Form.Item name="content"
                        label={"Question:"}
                    >
                        <Input.TextArea rows={6} />
                    </Form.Item>

                    <Button type="primary" htmlType="submit" style={{ display: "block", margin: "0 auto" }}>
                        {"Submit"}
                    </Button>
                </Form>
            </Modal>
        </div>
    );

}

const HandleAnswerModal = (props) => {

    const layout = {
        labelCol: { span: 4, },
        wrapperCol: { span: 20, offset: 0 },
    };

    const { languages, setShowModal } = props;

    const onOk = () => {
        setShowModal(false);

    };


    const onCancel = () => {
        setShowModal(false);

    };



    return (
        <div>
            <Modal
                title={"Add Answer"}
                visible={props.showModal}
                onOk={onOk}
                confirmLoading={props.confirmLoading}
                onCancel={onCancel}
                width="100%"
                style={{ top: 20 }}
                footer={null}

            >
                <Form
                    {...layout}
                    name="edit"
                    initialValues={{}} onFinish={props.onFinish}
                >
                    <Form.Item name="answer"
                        label={"Answer:"}
                    >
                        <Input.TextArea rows={6} />
                    </Form.Item>

                    <Button type="primary" htmlType="submit" style={{ display: "block", margin: "0 auto" }}>
                        {"Submit"}
                    </Button>
                </Form>
            </Modal>
        </div>
    );
}
const HandleSearchModal = (props) => {


    const { languages, setShowModal } = props;

    const onOk = () => {
        setShowModal(false);

    };


    const onCancel = () => {
        setShowModal(false);
    };



    return (
        <div>
            <Modal
                title={null}
                closable={false}
                visible={props.showModal}
                onOk={onOk}
                confirmLoading={props.confirmLoading}
                onCancel={onCancel}
                width="100%"
                style={{ top: 20 }}
                footer={null}

                bodyStyle={{ padding: "0" }}

            >
                <Input.Search placeholder="input search text" onSearch={props.onSearch} size="large" enterButton />
            </Modal>
        </div>
    );

}