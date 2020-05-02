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
    DatePicker
} from "antd"
const { Column, ColumnGroup } = Table;

const messages = {
    "dashBoard.appointments.colTitle.id": "No.",
    "dashBoard.appointments.colTitle.userName": "Name",
    "dashBoard.appointments.colTitle.userId": "User Id",
    "dashBoard.appointments.colTitle.type": "Type",
    "dashBoard.appointments.colTitle.status": "Status",
    "dashBoard.appointments.colTitle.petName": "Pet Name",
    "dashBoard.appointments.colTitle.species": "Species",
    "dashBoard.appointments.colTitle.gender": "Gender",
    "dashBoard.appointments.colTitle.meetingCity": "Meeting City",
    "dashBoard.appointments.colTitle.contactNumber": "Contact Number",
    "dashBoard.appointments.colTitle.appointmentTime": "Appointment Time",
    "dashBoard.appointments.colTitle.createTime": "Create Time",
    "dashBoard.appointments.colTitle.lastChangedTime": "Last Changed Time",
    "dashBoard.appointments.colTitle.description": "Description",
    "dashBoard.appointments.colTitle.diagnosis": "Diagnosis",
    "dashBoard.appointments.colTitle.needOperation": "Need Operation",
    "dashBoard.appointments.colTitle.operationId": "Operation No.",
    "dashBoard.appointments.row.more": "more",
    "dashBoard.appointments.row.handle": "handle",
    "dashBoard.appointments.drawer.title": "appointments detail",
    "dashBoard.appointments.modal.title": "complete the appointment",
    "dashBoard.appointments.modal.submit": "Submit",
    "dashBoard.appointments.modal.normal": "Normal",
    "dashBoard.appointments.modal.type": "Type",
    "dashBoard.appointments.modal.emergency": "Emergency",
    "dashBoard.appointments.modal.diagnosis": "Diagnosis Result",
    "dashBoard.appointments.modal.needOperation": "Need Operation",
    "dashBoard.appointments.modal.yes": "Yes",
    "dashBoard.appointments.modal.no": "No",
    "dashBoard.appointments.modal.operationPlan": "Operation Plan",
    "dashBoard.appointments.modal.operationTime": "Operation Time"
};



export default (props) => {

    const [showDrawer, setShowDrawer] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const data = {
        index: 1,
        total: 1,
        count: 1,
        items: [{ key: '1' }]
    }

    const languages = messages;

    const onHandleClick = () => {
        setShowModal(true);

    }


    const onMoreClick = (records) => {
        setShowDrawer(true);
    }

    const onFinish = values => {
        console.log('Finish:', values);
    };

    return (
        <div>
            <Row>
                <Col span={24} offset={0}>
                    <Table dataSource={data.items}
                        onChange={props.onPageChange}
                        scroll={{ x: 1600 }}
                        pagination={{ defaultCurrent: data.index, total: data.total, simple: true, pageSize: data.count }}
                    >
                        <Column title={languages["dashBoard.appointments.colTitle.id"]} dataIndex="id" key="id" fixed='left' width={100} />
                        <Column title={languages["dashBoard.appointments.colTitle.userName"]} dataIndex="userName" key="userName" width={100} />
                        <Column title={languages["dashBoard.appointments.colTitle.userId"]} dataIndex="userId" key="userId" width={100} />
                        <Column title={languages["dashBoard.appointments.colTitle.petName"]} dataIndex="petName" key="petName" width={100} />
                        <Column title={languages["dashBoard.appointments.colTitle.status"]} dataIndex="status" key="status" width={100} />
                        <Column title={languages["dashBoard.appointments.colTitle.type"]} dataIndex="type" key="type" width={100} />
                        <Column title={languages["dashBoard.appointments.colTitle.species"]} dataIndex="species" key="species" width={100} />
                        <Column title={languages["dashBoard.appointments.colTitle.gender"]} dataIndex="gender" key="gender" width={100} />
                        <Column title={languages["dashBoard.appointments.colTitle.meetingCity"]} dataIndex="meetingCity" key="meetingCity" />
                        <Column title={languages["dashBoard.appointments.colTitle.appointmentTime"]} dataIndex="appointmentTime" key="id" />
                        <Column title={languages["dashBoard.appointments.colTitle.createTime"]} dataIndex="createTime" key="createTime" />
                        <Column title={languages["dashBoard.appointments.colTitle.lastChangedTime"]} dataIndex="lastChangedTime" key="lastChangedTime" />
                        <Column title={languages["dashBoard.appointments.colTitle.needOperation"]} dataIndex="needOperation" key="needOperation" />
                        <Column title={languages["dashBoard.appointments.colTitle.operationId"]} dataIndex="operationId" key="operationId" />
                        <Column title=""
                            render={record => (

                                <Button type="link" onClick={(e) => (onMoreClick(record))}>{languages["dashBoard.appointments.row.more"]}</Button>

                            )}
                            fixed='right'

                        />
                    </Table>
                </Col>
            </Row>

            <DetailDrawer
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

    const dateConfig = {
        rules: [{ required: true, message: 'Please select time!' }],
    };

    const onCancel = () => {
        setShowModal(false);
    };

    const [showOperationForm, setshowOperationForm] = useState(false);

    const onNeedOperationChange = (e) => {
        setshowOperationForm(e.target.value === 'yes');
    }


    const OperationForm = showOperationForm ? (
        <div>
            <Form.Item name="operationPlan" label={languages["dashBoard.appointments.modal.operationPlan"]}>
                <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item name="operationTime" label={languages["dashBoard.appointments.modal.operationTime"]} {...dateConfig}>
                <DatePicker.RangePicker />
            </Form.Item>
        </div>
    ) : (<></>);


    return (
        <div>
            <Modal
                title={languages["dashBoard.appointments.modal.title"]}
                visible={props.showModal}
                onOk={onOk}
                confirmLoading={props.confirmLoading}
                onCancel={onCancel}
                width="70%"
                footer={null}

            >
                <Form
                    {...layout}
                    name="completeAppointment"

                    initialValues={{ type: "normal", diagnosis: "", needOperation: "no" }} onFinish={props.onFinish}
                >
                    <Form.Item name="type"
                        label={languages["dashBoard.appointments.modal.type"]}>
                        <Radio.Group buttonStyle="solid">
                            <Radio.Button value="normal">{languages["dashBoard.appointments.modal.normal"]}</Radio.Button>
                            <Radio.Button value="emergency">{languages["dashBoard.appointments.modal.emergency"]}</Radio.Button>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item name="diagnosis" label={languages["dashBoard.appointments.modal.diagnosis"]}>
                        <Input.TextArea rows={4} />
                    </Form.Item>
                    <Form.Item name="needOperation"
                        label={languages["dashBoard.appointments.modal.needOperation"]}>
                        <Radio.Group onChange={onNeedOperationChange} buttonStyle="solid">
                            <Radio.Button value="no">{languages["dashBoard.appointments.modal.no"]}</Radio.Button>
                            <Radio.Button value="yes">{languages["dashBoard.appointments.modal.yes"]}</Radio.Button>
                        </Radio.Group>
                    </Form.Item>

                    {OperationForm}

                    <Button type="primary" htmlType="submit" style={{ display: "block", margin: "0 auto" }}>
                        {languages["dashBoard.appointments.modal.submit"] || "submit"}
                    </Button>
                </Form>
            </Modal>
        </div>
    );

}


const DetailDrawer = (props) => {

    const { languages } = props;

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
                <Descriptions.Item label={languages["dashBoard.appointments.colTitle.id"]} span={2}>1243214122412</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.appointments.colTitle.userId"]} span={2}>Female</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.appointments.colTitle.userName"]} span={2}>Joe</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.appointments.colTitle.contactNumber"]} span={2}>details</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.appointments.colTitle.type"]}>In surgery</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.appointments.colTitle.status"]} >12 days</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.appointments.colTitle.petName"]}>XXXX-XX-XX</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.appointments.colTitle.species"]} span={2}>petPlan</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.appointments.colTitle.gender"]} >XXXX-XX-XX</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.appointments.colTitle.meetingCity"]} span={2}>petPlan</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.appointments.colTitle.needOperation"]} >petPlan</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.appointments.colTitle.operationId"]} >petPlan</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.appointments.colTitle.appointmentTime"]} span={2}>petPlan</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.appointments.colTitle.createTime"]} span={2}>petPlan</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.appointments.colTitle.lastChangedTime"]} span={2}>petPlan</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.appointments.colTitle.description"]} span={2}>petPlan</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.appointments.colTitle.diagnosis"]} span={2}>petPlan</Descriptions.Item>
            </Descriptions>
            <Button></Button>
        </Drawer>
    )

}
