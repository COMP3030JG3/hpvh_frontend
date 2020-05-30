import React, { useState } from "react";
import {
    Form,
    Input,
    InputNumber,
    Button,
    message,
    Row,
    Col,
    Modal,
    Upload
} from "antd"
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';



export default (props) => {

    const [imageUrl, setImageUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [form] = Form.useForm();
    form.setFieldsValue({
        fullname: props.profile.fullname,
        email: props.profile.email,
        phone_number: props.profile.phone_number,
        address: props.profile.address,

    });
    const languages = props.messages;


    function getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    function beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 0.2;
        if (!isLt2M) {
            message.error('Image must smaller than 0.2MB!');
        }
        return isJpgOrPng && isLt2M;
    }
    const handleChange = info => {
        if (info.file.status === 'uploading') {
            setIsLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => {
                setImageUrl(imageUrl);
                setIsLoading(false);
            }
            );
        }
    };
    const layout = {
        labelCol: { span: 5, },
        wrapperCol: { span: 24 },
    };

    const validateMessages = {

        types: {
            email: '${label} is not validate email!'
        },
    };


    const onFinish = values => {
        let v = {
            fullname: values.fullname,
            email: values.email,
            address: values.address,
            phone_number: values.phone_number,
            customer_image_path: imageUrl.split(',')[1]
        }
        props.changeInfo(v);
    };


    const uploadButton = (
        <div>
            {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
            <div className="ant-upload-text">Upload</div>
        </div>
    );



    return (
        <div>
            <Row>
                <Col span={20} offset={2}>

                    <Form form={form} labelAlign="left" {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                        <Form.Item >
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                beforeUpload={beforeUpload}
                                onChange={handleChange}
                                style={{ display: "block", margin: "0 auto" }}
                            >
                                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                            </Upload>
                        </Form.Item>
                        <Form.Item name={'fullname'} label={languages["my.profileEditor.label.fullName"]} >
                            <Input />
                        </Form.Item>
                        <Form.Item name={'email'} label={languages["my.profileEditor.label.email"]} rules={[{ type: 'email' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={'phone_number'} label={languages["my.profileEditor.label.phoneNumber"]} >
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
        let { confirm_password, ...v } = e
        this.props.changePassword(v);

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
                <Button type="link" onClick={this.showModal} style={{ margin: "0 0 12px 0" }} >
                    {languages["my.profileEditor.button.change"]}
                </Button>
                <Modal
                    title={languages["my.profileEditor.title.change"]}
                    visible={this.state.visible}
                    onOk={this.onOk}
                    onCancel={this.onCancel}
                    width="90%"
                    footer={null}
                >
                    <Form {...this.layout} onFinish={this.onFinish} validateMessages={validateMessages}>
                        <Form.Item name={'old_password'} label={languages["my.profileEditor.label.oldPassword"]} rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="new_password" label={languages["my.profileEditor.label.password"]} rules={[{ required: true, message: 'Please input your password!', },]} hasFeedback>
                            <Input.Password />
                        </Form.Item>

                        <Form.Item name="confirm_password" label={languages["my.profileEditor.label.confirm"]} dependencies={['password']} hasFeedback rules={[{ required: true, message: 'Please confirm your password!', },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('new_password') === value) {
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