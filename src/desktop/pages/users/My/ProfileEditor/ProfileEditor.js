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

const messages = {
    'my.profileEditor.label.fullName': "Full Name",
    'my.profileEditor.label.oldPassword': "Old Password",
    'my.profileEditor.label.email': "Email",
    'my.profileEditor.label.phoneNumber': "Phone Number",
    'my.profileEditor.label.address': "Address",
    'my.profileEditor.button.submit': "Submit",
    'my.profileEditor.button.change': "Change Password?",
    'my.profileEditor.title.change':"Change Password",
    'my.profileEditor.label.password': "New Password",
    'my.profileEditor.label.confirm': "Confirm Password"
};

export default (props) => {

    const languages = props.messages;

    const layout = {
        labelCol: { span: 8, },
        wrapperCol: { span: 16 },
    };

    const validateMessages = {
        required: '${label} is required!',
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
                <Col span={12} offset={5}>

                    <Form {...layout} labelAlign="right" name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                        <Form.Item name={'name'} label={languages["my.profileEditor.label.fullName"]} rules={[{ required: true }]}>
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
                        <Button type="primary" htmlType="submit" style={{display:"block",margin:"0 auto"}}>
                            {languages["my.profileEditor.button.submit"]}
                        </Button>
                    </Form>

                </Col>
                <Col offset={14}>
                    <Change />
                </Col>
            </Row>
        </div>
    );
};

const languages = props.messages;
const validateMessages = {
    required: '${label} is required!'
};
class Change extends React.Component {

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

  onCancel = e => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="link" onClick={this.showModal}>
          {languages["my.profileEditor.button.change"]}
        </Button>
        <Modal
          title={languages["my.profileEditor.title.change"]}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <Form onSubmit={this.handleOk} validateMessages={validateMessages}>
            <Form.Item name={'oldPassword'} label={languages["my.profileEditor.label.oldPassword"]} rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="password" label={languages["my.profileEditor.label.password"]} rules={[{required: true,message: 'Please input your password!',},]}hasFeedback>
                <Input.Password />
            </Form.Item>

            <Form.Item name="confirm" label={languages["my.profileEditor.label.confirm"]} dependencies={['password']} hasFeedback rules={[{required: true,message: 'Please confirm your password!',},
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
        </Form>

        </Modal>
      </div>
    );
  }
}