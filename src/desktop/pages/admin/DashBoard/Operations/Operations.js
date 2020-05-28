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
    InputNumber,
} from "antd"
import search from '../../../../components/search'

const { Column } = Table;





export default (props) => {

    const [showDrawer, setShowDrawer] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const [searchIdValue, setSearchIdValue] = useState('');
    const [searchAppointmentIdValue, setSearchAppointmentIdValue] = useState('');
    const [searchPetNameValue, setSearchPetNameValue] = useState('');
    const [record, setRecord] = useState(0);
    const { data, page } = props;

    const datad = [];
    if (data !== null) {
        datad.push(...data);
    } else {
        for (let i = 0; i < record + 1; i++) {
            datad.push({});
        }
    }

    const languages = props.messages;

    const onHandleClick = () => {
        setShowModal(true);

    }


    const onMoreClick = (records) => {
        setRecord(records)
        setShowDrawer(true);
    }

    const onFinish = values => {
        props.onComplete({ id: datad[record].id, ...values });
    };
    const onIdSearch = () => {
        props.onSearch({ index: 1, id: searchIdValue });
    }
    const onIdReset = () => {
        setSearchIdValue('')
        props.onSearch({ index: 1 });
    }

    const onAppointmentIdSearch = () => {
        props.onSearch({ index: 1, appointment_id: searchAppointmentIdValue });
    }
    const onAppointmentIdReset = () => {
        setSearchAppointmentIdValue('')
        props.onSearch({ index: 1 });
    }


    const onPetNameSearch = () => {
        props.onSearch({ index: 1, pet_name: searchPetNameValue });
    }
    const onPetNameReset = () => {
        setSearchPetNameValue('')
        props.onSearch({ index: 1 });

    }

    const onPageChange = (e) => {
        let data = {
            index: e.current
        }
        if (searchPetNameValue !== '') {
            data.pet_name = searchPetNameValue
        }
        if (searchAppointmentIdValue !== '') {
            data.appointment_id = searchAppointmentIdValue
        }
        if (searchIdValue !== '') {
            data.id = searchIdValue
        }
        props.onPageChange(data);
        console.log(data)
    }
    return (
        <div>
            <Row>
                <Col span={24} offset={0}>
                    <Table dataSource={data}
                        onChange={onPageChange}
                        scroll={{ x: 1600, y: 450 }}
                        pagination={{ defaultCurrent: 1, total: page.total, simple: true, pageSize: 15 }}
                    >
                        <Column title={languages["dashBoard.operations.colTitle.id"]} dataIndex="id" key="id" fixed='left' {...search(languages, setSearchIdValue, onIdSearch, onIdReset)} />
                        <Column title={languages["dashBoard.operations.colTitle.appointmentId"]} dataIndex="appointment_id" key="appointment_id" {...search(languages, setSearchAppointmentIdValue, onAppointmentIdSearch, onAppointmentIdReset)} />
                        <Column title={languages["dashBoard.operations.colTitle.petName"]} dataIndex="pet_name" key="pet_name" {...search(languages, setSearchPetNameValue, onPetNameSearch, onPetNameReset)} />
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
                    <Form.Item name={'surgery_cost'} label={languages["dashBoard.operations.modal.cost"]} >
                        <InputNumber min={1} max={100000} />
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
