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
import search from '../../../../components/search'

const { Column, ColumnGroup } = Table;




export default (props) => {
    const [showDrawer, setShowDrawer] = useState(false);
    const [date, setDate] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [record, setRecord] = useState(0);
    const [searchIdValue, setSearchIdValue] = useState('');
    const [searchUserIdValue, setSearchUserIdValue] = useState('');
    const [filt, setFilt] = useState({});
    const [searchPetNameValue, setSearchPetNameValue] = useState('');
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
            appointment_level: values.appointment_level,
            diagnosis: values.diagnosis,
            surgery_begin_time: date.begin,
            release_time: date.end,
            pet_name: datad[record].pet_name,
            id: datad[record].app_primary_key
        }

        props.onComplete(v)

    };
    const onIdSearch = () => {
        onSearch({ index: 1, app_primary_key: searchIdValue });
    }
    const onIdReset = () => {
        setSearchIdValue('')
        onSearch({ index: 1 });

    }

    const onUserIdSearch = () => {
        onSearch({ index: 1, customer_id: searchUserIdValue });
    }
    const onUserIdReset = () => {
        setSearchUserIdValue('')
        onSearch({ index: 1 });

    }


    const onPetNameSearch = () => {
        onSearch({ index: 1, pet_name: searchPetNameValue });
    }
    const onPetNameReset = () => {
        setSearchPetNameValue('')
        onSearch({ index: 1 });

    }

    const onSearch = (e) => {
        let f = filt;
        let filter = {};
        for (let i in f) {
            if (f[i]) {
                filter[i] = f[i][0]
            }
        }
        let data = {
            ...e,
            ...filter
        }
        props.onSearch(data);
    }

    const onPageChange = (e, f) => {
        setFilt(f);
        let filter = {};
        for (let i in f) {
            if (f[i]) {
                filter[i] = f[i][0]
            }
        }
        let data = {
            index: e.current,
            ...filter
        }
        if (searchPetNameValue !== '') {
            data.pet_name = searchPetNameValue
        }
        if (searchUserIdValue !== '') {
            data.customer_id = searchUserIdValue
        }
        if (searchIdValue !== '') {
            data.app_primary_key = searchIdValue
        }
        props.onPageChange(data);
        console.log(data)
    }

    const filters = {
        type: [
            { text: 'Normal', value: 'normal' },
            { text: 'Emergency', value: 'emergency' },
        ],
        species: [
            { text: 'Dog', value: 'dog' },
            { text: 'Cat', value: 'cat' },
        ],
        status: [
            { text: 'Completed', value: 'completed' },
            { text: 'Processing', value: 'processing' },
        ],
        appointment_level: [
            { text: '1', value: '1' },
            { text: '2', value: '2' },
            { text: '3', value: '3' },
            { text: '4', value: '4' },
            { text: '5', value: '5' },
        ],
        gender: [
            { text: 'Male', value: 'male' },
            { text: 'Female', value: 'female' },
        ],
        meetingCity: [
            { text: 'shanghai', value: 'shanghai' },
            { text: 'beijing', value: 'beijing' },
            { text: 'chengdu', value: 'chengdu' },
        ],
        needOperation: [
            { text: 'yes', value: true },
            { text: 'no', value: false },
        ],
    }
    const setLevelColor = (e) => {
        switch (e) {
            case 1:
                return '#722ed1'

                break;
            case 2:
                return '#9254de'
                break;
            case 3:
                return '#b37feb'
                break;
            case 4:

                return '#d3adf7'
                break;
            case 5:
                return '#efdbff'
                break;
            default:
                return '#722ed1'
                break;
        }
    }
    return (
        <div>
            <Row>
                <Col span={24} offset={0}>
                    <Table dataSource={data}
                        onChange={onPageChange}
                        scroll={{ x: 1600, y: 450 }}
                        pagination={{ position: ['bottomcenter'], defaultCurrent: 1, current: page.index, total: page.total, simple: true, pageSize: 15 }}
                    >
                        <Column title={languages["dashBoard.appointments.colTitle.id"]} dataIndex="app_primary_key" key="app_primary_key" fixed='left' width={100} {...search(languages, setSearchIdValue, onIdSearch, onIdReset)} />
                        <Column title={languages["dashBoard.appointments.colTitle.userId"]} dataIndex="customer_id" key="customer_id" fixed='left' width={100} {...search(languages, setSearchUserIdValue, onUserIdSearch, onUserIdReset)} />
                        <Column title={languages["dashBoard.appointments.colTitle.petName"]} dataIndex="pet_name" key="pet_name" width={100} {...search(languages, setSearchPetNameValue, onPetNameSearch, onPetNameReset)} />
                        <Column title={languages["dashBoard.appointments.colTitle.status"]} dataIndex="appointment_status" key="appointment_status" width={100}
                            filterMultiple={false} filters={filters.status}
                            render={status => (
                                <Tag color={status === 'processing' ? 'blue' : 'green'} key={status}>
                                    {status}
                                </Tag>
                            )} />
                        <Column title={languages["my.appointments.colTitle.appointment_level"]} dataIndex="appointment_level" key="appointment_level" width={100}
                            render={status => (
                                <Tag color={setLevelColor(status)} key={status}>
                                    {status}
                                </Tag>
                            )}
                            filterMultiple={false} filters={filters.appointment_level}
                        />
                        <Column title={languages["dashBoard.appointments.colTitle.type"]} dataIndex="appointment_type" key="appointment_type" width={100} filterMultiple={false} filters={filters.type} />
                        <Column title={languages["dashBoard.appointments.colTitle.species"]} dataIndex="species" key="species" width={100} filterMultiple={false} filters={filters.species} />
                        <Column title={languages["dashBoard.appointments.colTitle.gender"]} dataIndex="pet_gender" key="pet_gender" width={100} filterMultiple={false} filters={filters.gender} />
                        <Column title={languages["dashBoard.appointments.colTitle.meetingCity"]} dataIndex="address" key="address" filterMultiple={false} filters={filters.meetingCity} />
                        <Column title={languages["dashBoard.appointments.colTitle.appointmentTime"]} dataIndex="appointment_date" key="appointment_date" />
                        <Column title={languages["dashBoard.appointments.colTitle.createTime"]} dataIndex="date" key="date" />
                        <Column title={languages["dashBoard.appointments.colTitle.needOperation"]} dataIndex="needOperation" key="needOperation" filterMultiple={false} filters={filters.needOperation}
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
                    <Form.Item name="appointment_level"
                        label={languages["dashBoard.appointments.modal.appointment_level"]}>
                        <Radio.Group buttonStyle="solid">
                            <Radio.Button value="1">1</Radio.Button>
                            <Radio.Button value="2">2</Radio.Button>
                            <Radio.Button value="3">3</Radio.Button>
                            <Radio.Button value="4">4</Radio.Button>
                            <Radio.Button value="5">5</Radio.Button>
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
