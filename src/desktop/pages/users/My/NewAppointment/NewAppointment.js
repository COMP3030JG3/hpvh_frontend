import React from "react";
import {
    Row,
    Col,
    Form,
    Input,
    Button,
    Select,
    Radio,
    Upload,
    message,
    DatePicker
} from "antd";
import { UploadOutlined } from '@ant-design/icons';




export default (props) => {

    const languages = props.messages;


    const layout = {
        labelCol: { span: 8, },
        wrapperCol: { span: 16 },
    };


    // const prop = {
    //     name: 'file',
    //     action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    //     headers: {
    //       authorization: 'authorization-text',
    //     },
    //     onChange(info) {
    //         if (info.file.status !== 'uploading') {
    //             console.log(info.file, info.fileList);
    //         }
    //         if (info.file.status === 'done') {
    //             message.success(`${info.file.name} file uploaded successfully`);
    //         } 
    //         else if (info.file.status === 'error') {
    //             message.error(`${info.file.name} file upload failed.`);
    //         }
    //     },
    // };


    const onFinish = values => {
        console.log(values);
    };

    const { Option } = Select;

    function onChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    }

    function onOk(value) {
        console.log('onOk: ', value);
    }

    return (
        <div>
            <Row>
                <Col span={12} offset={6}>

                    <Form {...layout} labelAlign="left" name="nest-messages" onFinish={onFinish}>
                        <Form.Item name="petName" label={languages["my.NewAppointment.colTitle.petName"]} rules={[{ required: true, message: 'Pet name is required!' }]}>
                            <Input />
                        </Form.Item>


                        <Form.Item name="species" label={languages["my.NewAppointment.colTitle.species"]} rules={[{ required: true, message: 'Please select pet kind!' }]}>
                            <Radio.Group buttonStyle="solid">
                                <Radio.Button value="dog">Dog</Radio.Button>
                                <Radio.Button value="cat">Cat</Radio.Button>
                            </Radio.Group>
                        </Form.Item>


                        <Form.Item name="gender" label={languages["my.NewAppointment.colTitle.gender"]} rules={[{ required: true, message: 'Please select pet Gender!' }]}>
                            <Radio.Group buttonStyle="solid">
                                <Radio.Button value="male">Male</Radio.Button>
                                <Radio.Button value="female">Female</Radio.Button>
                            </Radio.Group>
                        </Form.Item>



                        <Form.Item name="meetingCity" label={languages["my.NewAppointment.colTitle.meetingCity"]} rules={[{ required: true, message: 'Please select address!' }]}>
                            <Radio.Group buttonStyle="solid">
                                <Radio.Button value="beijing">BeiJing</Radio.Button>
                                <Radio.Button value="shanghai">ShangHai</Radio.Button>
                                <Radio.Button value="chengdu">ChengDu</Radio.Button>
                            </Radio.Group>
                        </Form.Item>


                        <Form.Item name="description" label={languages["my.NewAppointment.colTitle.description"]}>
                            <Input.TextArea />
                        </Form.Item>


                        {/* <Form.Item name="petPhoto" label={languages["my.NewAppointment.colTitle.petPhoto"]}>
                            <Upload {...prop}>
                                <Button>
                                    <UploadOutlined /> Click to Upload
                                </Button>
                            </Upload>
                        </Form.Item> */}



                        <Form.Item name="contactNumber" label={languages["my.NewAppointment.colTitle.contactNumber"]} rules={[{ required: true, message: 'Please input your emergency contact number!' }]}>
                            <Input />
                        </Form.Item>



                        <Form.Item name="appointmentTime" label={languages["my.NewAppointment.colTitle.appointmentTime"]} rules={[{ required: true, message: 'Please Select your appointment date!' }]}>
                            <DatePicker onChange={onChange} onOk={onOk} />
                        </Form.Item>




                        <Button type="primary" style={{ display: "block", margin: "0 auto" }} htmlType="submit">
                            {languages["my.NewAppointment.colTitle.submit"]}
                        </Button>

                    </Form>
                </Col>
            </Row>
        </div>
    );
};