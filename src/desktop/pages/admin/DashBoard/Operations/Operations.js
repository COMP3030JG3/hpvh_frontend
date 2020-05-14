import React, { useState } from "react";
import {
    Row,
    Col,
    Table,
    Modal,
    Button,
    Drawer,
    Descriptions,
    Form,
    Radio,
    Input,
    Tag,
    DatePicker,
    Avatar,
} from "antd"
const { Column } = Table;

const messages = {
    "dashBoard.operations.colTitle.id": "No.",
    "dashBoard.operations.colTitle.userName": "Name",
    "dashBoard.operations.colTitle.userId": "User Id",
    "dashBoard.operations.colTitle.status": "Status",
    "dashBoard.operations.colTitle.cost": "Cost",
    "dashBoard.operations.colTitle.petName": "Pet Name",
    "dashBoard.operations.colTitle.species": "Species",
    "dashBoard.operations.colTitle.gender": "Gender",
    "dashBoard.operations.colTitle.contactNumber": "Contact Number",
    "dashBoard.operations.colTitle.createTime": "Create Time",
    "dashBoard.operations.colTitle.startTime": "Start Time",
    "dashBoard.operations.colTitle.endTime": "End Time",
    "dashBoard.operations.colTitle.description": "Description",
    "dashBoard.operations.colTitle.diagnosis": "Diagnosis",
    "dashBoard.operations.colTitle.operationPlan": "Operation Plan",
    "dashBoard.operations.colTitle.appointmentId": "Related Appointment Id",
    "dashBoard.operations.row.more": "more",
    "dashBoard.operations.row.handle": "handle",
    "dashBoard.operations.drawer.title": "operations detail",
    "dashBoard.operations.modal.title": "complete the operation",
    "dashBoard.operations.modal.submit": "Submit",
    "dashBoard.operations.modal.cost": "Cost:",

};



export default (props) => {

    const [showDrawer, setShowDrawer] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [record, setRecord] = useState(0);
    const { data, page } = props;

    const datad = [];
    if (data !== null) {
        datad.push(...data);
        console.log(datad[0])
    } else {
        datad.push({});

    }

    const languages = messages;

    const onHandleClick = () => {
        setShowModal(true);

    }


    const onMoreClick = (records) => {
        setRecord(records)
        setShowDrawer(true);
    }

    const onFinish = values => {
        console.log('Finish:', values);
    };

    return (
        <div>
            <Row>
                <Col span={24} offset={0}>
                    <Table dataSource={data}
                        onChange={props.onPageChange}

                        pagination={{ defaultCurrent: 1, total: page.total, simple: true, pageSize: 15 }}
                    >
                        <Column title={languages["dashBoard.operations.colTitle.id"]} dataIndex="id" key="id" fixed='left' />
                        <Column title={languages["dashBoard.operations.colTitle.appointmentId"]} dataIndex="appointment_id" key="appointment_id" />
                        <Column title={languages["dashBoard.operations.colTitle.petName"]} dataIndex="pet_name" key="pet_name" />
                        <Column title={languages["dashBoard.operations.colTitle.cost"]} dataIndex="surgery_cost" key="surgery_cost" />
                        <Column title={languages["dashBoard.operations.colTitle.startTime"]} dataIndex="surgery_begin_time" key="surgery_begin_time" />
                        <Column title={languages["dashBoard.operations.colTitle.endTime"]} dataIndex="release_time" key="release_time" />

                        <Column title=""
                            render={(a, b, record) => (

                                <Button type="link" onClick={(e) => (onMoreClick(record))}>{languages["dashBoard.operations.row.more"]}</Button>

                            )}
                            fixed='right'

                        />
                    </Table>
                </Col>
            </Row>

            <DetailDrawer
                datad={datad}
                record={record}
                onHandleClick={onHandleClick}
                languages={languages}
                showDrawer={showDrawer}
                setShowDrawer={setShowDrawer}
            />

            <HandleModal
                onFinish={onFinish}
                languages={languages}
                showModal={showModal}
                setShowModal={setShowModal}
            />

        </div>
    );
};

const HandleModal = (props) => {

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
                title={languages["dashBoard.operations.modal.title"]}
                visible={props.showModal}
                onOk={onOk}
                confirmLoading={props.confirmLoading}
                onCancel={onCancel}
                width="40%"
                footer={null}

            >
                <Form
                    {...layout}
                    name="completeAppointment"

                    onFinish={props.onFinish}
                >
                    <Form.Item name={'name'} label={languages["dashBoard.operations.modal.cost"]} >
                        <Input />
                    </Form.Item>



                    <Button type="primary" htmlType="submit" style={{ display: "block", margin: "0 auto" }}>
                        {languages["dashBoard.operations.modal.submit"] || "submit"}
                    </Button>
                </Form>
            </Modal>
        </div>
    );

}


const DetailDrawer = (props) => {

    const { languages } = props;
    const { datad, record } = props
    const onDrawerClose = () => {
        props.setShowDrawer(false);
    }

    return (

        <Drawer
            title={<Button type="primary" onClick={props.onHandleClick} style={{ float: "right" }}>handle</Button>}
            placement='left'
            width="60%"
            onClose={onDrawerClose}
            closable={false}
            visible={props.showDrawer}
        >

            <Descriptions bordered={true} layout="horizontal" column={2}>
                <Descriptions.Item label={languages["dashBoard.operations.colTitle.id"]} span={2}>{datad[record].id}</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.operations.colTitle.appointmentId"]} span={2}>{datad[record].appointment_id} </Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.operations.colTitle.cost"]} >{datad[record].surgery_cost}</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.operations.colTitle.petName"]}>{datad[record].pet_name}</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.operations.colTitle.startTime"]} span={2}>{datad[record].surgery_begin_time}</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.operations.colTitle.endTime"]} span={2}>{datad[record].release_time}</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.operations.colTitle.operationPlan"]} span={2}>{datad[record].operation_plan}</Descriptions.Item>
            </Descriptions>
            <Button></Button>
        </Drawer>
    )

}
