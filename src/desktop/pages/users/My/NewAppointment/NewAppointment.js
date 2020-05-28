import React, { useState } from "react";

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
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';




export default (props) => {

    const [imageUrl, setImageUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [appointmentDate, setAppointmentDate] = useState('');
    const languages = props.messages;
    const [form] = Form.useForm();

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
        let v = {
            pet_name: values.pet_name,
            species: values.species,
            pet_gender: values.pet_gender,
            pet_image_path: imageUrl.split(',')[1],
            address: values.address,
            description: values.description,
            appointment_date: appointmentDate,
            appointment_status: 'processing'
        }

        props.makeAppointment(v);
    };

    const { Option } = Select;

    function onChange(value, dateString) {
        let s = Number(new Date(value._d.getFullYear(), value._d.getMonth(), value._d.getDate())) / 1000
        setAppointmentDate(s);
    }

    function onOk(value) {

    }

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

    const uploadButton = (
        <div>
            {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
            <div className="ant-upload-text">Upload</div>
        </div>
    );

    let historyPet;
    if (props.historyPet !== null) {
        historyPet = props.historyPet.map(item =>
            <Option value={item.id}>{item.pet_name}</Option>
        )
    }

    const selectHistoryPet = (v) => {
        let index = props.historyPet.findIndex(item => item.id === v);
        let pet = props.historyPet[index]
        form.setFieldsValue({
            pet_name: pet.pet_name,
            species: pet.pet_species,
            pet_gender: pet.pet_gender
        })
    }
    form.setFieldsValue({
        petName: '1'
    })


    return (
        <div>
            <Row>
                <Col span={12} offset={6}>

                    <Form form={form} {...layout} labelAlign="left" name="nest-messages" onFinish={onFinish}>
                        <Form.Item name="historyPet" label={"History Pet"} >
                            <Select style={{ width: 120 }} onChange={selectHistoryPet} >
                                {historyPet}
                            </Select>
                        </Form.Item>
                        <Form.Item name="pet_name" label={languages["my.NewAppointment.colTitle.petName"]} rules={[{ required: true, message: 'Pet name is required!' }]}>
                            <Input />
                        </Form.Item>



                        <Form.Item name="species" label={languages["my.NewAppointment.colTitle.species"]} rules={[{ required: true, message: 'Please select pet kind!' }]}>
                            <Radio.Group buttonStyle="solid">
                                <Radio.Button value="dog">Dog</Radio.Button>
                                <Radio.Button value="cat">Cat</Radio.Button>
                            </Radio.Group>
                        </Form.Item>


                        <Form.Item name="pet_gender" label={languages["my.NewAppointment.colTitle.gender"]} rules={[{ required: true, message: 'Please select pet Gender!' }]}>
                            <Radio.Group buttonStyle="solid">
                                <Radio.Button value="male">Male</Radio.Button>
                                <Radio.Button value="female">Female</Radio.Button>
                            </Radio.Group>
                        </Form.Item>



                        <Form.Item name="address" label={languages["my.NewAppointment.colTitle.meetingCity"]} rules={[{ required: true, message: 'Please select address!' }]}>
                            <Radio.Group buttonStyle="solid">
                                <Radio.Button value="beijing">BeiJing</Radio.Button>
                                <Radio.Button value="shanghai">ShangHai</Radio.Button>
                                <Radio.Button value="chengdu">ChengDu</Radio.Button>
                            </Radio.Group>
                        </Form.Item>


                        <Form.Item name="description" label={languages["my.NewAppointment.colTitle.description"]}>
                            <Input.TextArea />
                        </Form.Item>


                        <Form.Item name="pet_photo" label={languages["my.NewAppointment.colTitle.petPhoto"]}>
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                beforeUpload={beforeUpload}
                                onChange={handleChange}
                            >
                                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                            </Upload>
                        </Form.Item>






                        <Form.Item name="appointment_date" label={languages["my.NewAppointment.colTitle.appointmentTime"]} rules={[{ required: true, message: 'Please Select your appointment date!' }]}>
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