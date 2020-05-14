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
import Search from '../../../../components/Search';
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
    const search = new Search();
    const [showDrawer, setShowDrawer] = useState(false);
    const [date, setDate] = useState({});
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
        setRecord(records);

        setShowDrawer(true);
    }
    const onDateClick = (value, sd) => {
        let b = Number(new Date(value[0]._d.getFullYear(), value[0]._d.getMonth(), value[0]._d.getDate())) / 1000
        let e = Number(new Date(value[1]._d.getFullYear(), value[1]._d.getMonth(), value[1]._d.getDate())) / 1000
        setDate({ begin: b, end: e })

    }


    const onFinish = values => {
        let v = {
            needOperation: values.needOperation,
            operation_plan: values.operationPlan,
            appointment_type: values.type,
            diagnosis: values.diagnosis,
            surgery_begin_time: date.begin,
            release_time: date.end,
            pet_name: datad[record].pet_name,
            id: datad[record].app_primary_key
        }
        props.onComplete(v)
    };

    return (
        <div>
            <Row>
                <Col span={24} offset={0}>
                    <Table dataSource={data}
                        onChange={props.onPageChange}
                        scroll={{ x: 1600 }}
                        pagination={{ position: ['bottomcenter'], defaultCurrent: 1, total: page.total, simple: true, pageSize: 15 }}
                    >
                        <Column title={languages["dashBoard.appointments.colTitle.id"]} dataIndex="app_primary_key" key="app_primary_key" fixed='left' width={100} />
                        <Column title={languages["dashBoard.appointments.colTitle.userId"]} dataIndex="customer_id" key="customer_id" fixed='left' width={100} />
                        <Column title={languages["dashBoard.appointments.colTitle.petName"]} dataIndex="pet_name" key="pet_name" width={100} />
                        <Column title={languages["dashBoard.appointments.colTitle.status"]} dataIndex="appointment_status" key="appointment_status" width={100}
                            render={status => (
                                <Tag color={status === 'processing' ? 'blue' : 'green'} key={status}>
                                    {status}
                                </Tag>
                            )} />
                        <Column title={languages["dashBoard.appointments.colTitle.type"]} dataIndex="appointment_type" key="appointment_type" width={100} />
                        <Column title={languages["dashBoard.appointments.colTitle.species"]} dataIndex="species" key="species" width={100} />
                        <Column title={languages["dashBoard.appointments.colTitle.gender"]} dataIndex="pet_gender" key="pet_gender" width={100} />
                        <Column title={languages["dashBoard.appointments.colTitle.meetingCity"]} dataIndex="address" key="address" />
                        <Column title={languages["dashBoard.appointments.colTitle.appointmentTime"]} dataIndex="appointment_date" key="appointment_date" />
                        <Column title={languages["dashBoard.appointments.colTitle.createTime"]} dataIndex="date" key="date" />
                        <Column title={languages["dashBoard.appointments.colTitle.needOperation"]} dataIndex="needOperation" key="needOperation"
                            render={status => (
                                <Tag color={status === 'yes' ? 'green' : 'red'} key={status}>
                                    {status}
                                </Tag>
                            )} />
                        <Column title=""
                            render={(a, b, record) => (

                                <Button type="link" onClick={(e) => (onMoreClick(record))}>{languages["dashBoard.appointments.row.more"]}</Button>

                            )}
                            fixed='right'
                            width={100}

                        />
                    </Table>
                </Col>
            </Row>

            <DetailDrawer
                onHandleClick={onHandleClick}
                languages={languages}
                showDrawer={showDrawer}
                setShowDrawer={setShowDrawer}
                datad={datad}
                record={record}
            />

            <HandleModal

                onDateClick={onDateClick}
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
        setshowOperationForm(e.target.value);
    }


    const OperationForm = showOperationForm ? (
        <div>
            <Form.Item name="operationPlan" label={languages["dashBoard.appointments.modal.operationPlan"]}>
                <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item name="operationTime" label={languages["dashBoard.appointments.modal.operationTime"]} {...dateConfig}>
                <DatePicker.RangePicker onChange={props.onDateClick} />
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

                    initialValues={{ type: "normal", diagnosis: "", needOperation: false }} onFinish={props.onFinish}
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
                            <Radio.Button value={false}>{languages["dashBoard.appointments.modal.no"]}</Radio.Button>
                            <Radio.Button value={true}>{languages["dashBoard.appointments.modal.yes"]}</Radio.Button>
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


            <Descriptions bordered={true} layout="horizontal" column={1}>
                <Descriptions.Item label={languages["dashBoard.appointments.colTitle.id"]} span={2}>{datad[record].app_primary_key || ""}</Descriptions.Item>
                <Descriptions.Item label={""} span={2}><Avatar size={64} src={datad[record].pet_image_path} /></Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.appointments.colTitle.type"]}>{datad[record].appointment_type || ""}</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.appointments.colTitle.status"]} >
                    <Tag color={datad[record].appointment_status === 'processing' ? 'blue' : 'green'}>
                        {datad[record].appointment_status || ""}
                    </Tag>
                </Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.appointments.colTitle.userId"]} span={2}>{datad[record].customer_id}</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.appointments.colTitle.petName"]}>{datad[record].pet_name || ""}</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.appointments.colTitle.species"]} span={2}>{datad[record].species || ""}</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.appointments.colTitle.gender"]} >{datad[record].pet_gender || ""}</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.appointments.colTitle.meetingCity"]} span={2}>{datad[record].address || ""}</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.appointments.colTitle.needOperation"]} >

                    <Tag color={datad[record].needOperation === 'yes' ? 'green' : 'red'}>
                        {datad[record].needOperation || ""}
                    </Tag>
                </Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.appointments.colTitle.appointmentTime"]} span={2}>{datad[record].appointment_date || ""}</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.appointments.colTitle.createTime"]} span={2}>{datad[record].date || ""}</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.appointments.colTitle.description"]} span={2}>{datad[record].description || ""}</Descriptions.Item>
                <Descriptions.Item label={languages["dashBoard.appointments.colTitle.diagnosis"]} span={2}>{datad[record].diagnosis || ""}</Descriptions.Item>
            </Descriptions>
            <Button></Button>
        </Drawer>
    )

}
