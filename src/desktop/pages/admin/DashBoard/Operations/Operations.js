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
                        scroll={{ x: 1400 }}
                        pagination={{ defaultCurrent: data.index, total: data.total, simple: true, pageSize: data.count }}
                    >
                        <Column title={languages["dashBoard.operations.colTitle.id"]} dataIndex="id" key="id" fixed='left' width={100} />
                        <Column title={languages["dashBoard.operations.colTitle.appointmentId"]} dataIndex="appointmentId" width={150} key="appointmentId" />
                        <Column title={languages["dashBoard.operations.colTitle.userName"]} dataIndex="userName" key="userName" width={100} />
                        <Column title={languages["dashBoard.operations.colTitle.userId"]} dataIndex="userId" key="userId" width={100} />
                        <Column title={languages["dashBoard.operations.colTitle.petName"]} dataIndex="petName" key="petName" width={100} />
                        <Column title={languages["dashBoard.operations.colTitle.status"]} dataIndex="status" key="status" width={100} />
                        <Column title={languages["dashBoard.operations.colTitle.cost"]} dataIndex="cost" key="cost" width={100} />
                        <Column title={languages["dashBoard.operations.colTitle.species"]} dataIndex="species" key="species" width={100} />
                        <Column title={languages["dashBoard.operations.colTitle.gender"]} dataIndex="gender" key="gender" width={100} />
                        <Column title={languages["dashBoard.operations.colTitle.createTime"]} dataIndex="createTime" key="createTime" />
                        <Column title={languages["dashBoard.operations.colTitle.startTime"]} dataIndex="startTime" key="startTime" />
                        <Column title={languages["dashBoard.operations.colTitle.endTime"]} dataIndex="endTime" key="endTime" />

                        <Column title=""
                            render={record => (

                                <Button type="link" onClick={(e) => (onMoreClick(record))}>{languages["dashBoard.operations.row.more"]}</Button>

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
                <Descriptions.Item label={languages["dashBoard.operations.colTitle.id"]} span={2}>1243214122412</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.operations.colTitle.appointmentId"]} span={2}>petPlan</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.operations.colTitle.userId"]} span={2}>Female</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.operations.colTitle.userName"]} span={2}>Joe</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.operations.colTitle.contactNumber"]} span={2}>details</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.operations.colTitle.status"]} >12 days</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.operations.colTitle.cost"]} >12 days</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.operations.colTitle.petName"]}>XXXX-XX-XX</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.operations.colTitle.species"]} span={2}>petPlan</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.operations.colTitle.gender"]} >XXXX-XX-XX</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.operations.colTitle.createTime"]} span={2}>petPlan</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.operations.colTitle.startTime"]} span={2}>petPlan</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.operations.colTitle.endTime"]} span={2}>petPlan</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.operations.colTitle.description"]} span={2}>petPlan</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.operations.colTitle.diagnosis"]} span={2}>petPlan</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.operations.colTitle.operationPlan"]} span={2}>petPlan</Descriptions.Item>
            </Descriptions>
            <Button></Button>
        </Drawer>
    )

}
