import React from "react";
import {
    Form,
    Input,
    InputNumber,
    Button,
    Row,
    Col,
    Modal
} from "antd"



export default (props) => {

    const languages = props.messages;

    const layout = {
        labelCol: { span: 5, },
        wrapperCol: { span: 19 },
    };

    const validateMessages = {

        types: {
            email: '${label} is not validate email!'
        },
    };


    const onFinish = values => {
        console.log(values);
        props.onFinish();
    };


    return (
        <div>
            <Row>
                <Col span={14} offset={5}>

                    <Form labelAlign="left" {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                        <Form.Item name={'name'} label={languages["my.profileEditor.label.fullName"]} >
                            <Input />
                        </Form.Item>
                        <Form.Item name={'email'} label={languages["my.profileEditor.label.email"]} rules={[{ type: 'email' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={'number'} label={languages["my.profileEditor.label.phoneNumber"]} >
                            <Input />
                        </Form.Item>
                        <Form.Item name={'address'} label={languages["my.profileEditor.label.address"]}>
                            <Input />
                        </Form.Item>
                        <Button type="primary" htmlType="submit" style={{ display: "block", margin: "0 auto" }}>
                            {languages["my.profileEditor.button.submit"]}
                        </Button>
                    </Form>

                </Col>
                <Col offset={14}>
                    <Change {...props} />
                </Col>
            </Row>
        </div>
    );
};


const validateMessages = {
    required: '${label} is required!'
};
class Change extends React.Component {

    layout = {
        labelCol: { span: 6, },
        wrapperCol: { span: 18 },
    };

    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    onOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    onFinish = e => {
        this.props.changePassword(e);
    }


    onCancel = e => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const languages = this.props.messages;

        return (
            <div>
                <Button type="link" onClick={this.showModal}>
                    {languages["my.profileEditor.button.change"]}
                </Button>
                <Modal
                    title={languages["my.profileEditor.title.change"]}
                    visible={this.state.visible}
                    onOk={this.onOk}
                    onCancel={this.onCancel}
                    width="40%"
                    footer={null}
                >
                    <Form {...this.layout} onFinish={this.onFinish} validateMessages={validateMessages}>
                        <Form.Item name={'oldPassword'} label={languages["my.profileEditor.label.oldPassword"]} rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="password" label={languages["my.profileEditor.label.password"]} rules={[{ required: true, message: 'Please input your password!', },]} hasFeedback>
                            <Input.Password />
                        </Form.Item>

                        <Form.Item name="confirm" label={languages["my.profileEditor.label.confirm"]} dependencies={['password']} hasFeedback rules={[{ required: true, message: 'Please confirm your password!', },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                        ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Button type="primary" htmlType="submit" style={{ display: "block", margin: "0 auto" }}>
                            {languages["dashBoard.appointments.modal.submit"] || "submit"}
                        </Button>
                    </Form>

                </Modal>
            </div>
        );
    }
}