import React, { useState } from "react";
import {
    Row,
    Col,
    Table,
    Tag,
    Button,
    Drawer,
    Descriptions
} from "antd"
import search from '../../../../components/search'
const { Column, ColumnGroup } = Table;


const messages = {
    "my.tracks.colTitle.id": "No.",
    "my.tracks.colTitle.status": "Status",
    "my.tracks.colTitle.cost": "Cost",
    "my.tracks.colTitle.petName": "Pet Name",
    "my.tracks.colTitle.species": "Species",
    "my.tracks.colTitle.gender": "Gender",
    "my.tracks.colTitle.contactNumber": "Contact Number",
    "my.tracks.colTitle.createTime": "Create Time",
    "my.tracks.colTitle.startTime": "Start Time",
    "my.tracks.colTitle.endTime": "End Time",
    "my.tracks.colTitle.description": "Description",
    "my.tracks.colTitle.diagnosis": "Diagnosis",
    "my.tracks.colTitle.operationPlan": "Operation Plan",
    "my.tracks.colTitle.appointmentId": "Related Appointment Id",
    "my.tracks.row.more": "more"
};



export default (props) => {
    const [searchIdValue, setSearchIdValue] = useState('');
    const [searchAppointmentIdValue, setSearchAppointmentIdValue] = useState('');
    const [searchPetNameValue, setSearchPetNameValue] = useState('');
    const [showDrawer, setShowDrawer] = useState(false);
    const [record, setRecord] = useState(0);
    const { data, page } = props;
    const datad = [];
    if (data !== null) {
        datad.push(...data);
        console.log(datad[0])
    } else {
        datad.push({});

    }



    const languages = props.messages;

    const onFinish = values => {
        console.log(values);
    };

    const onMoreClick = (records) => {
        setRecord(records);
        setShowDrawer(true);
    }
    const onDrawerClose = () => {
        setShowDrawer(false);
    }
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
            <Row onClick={props.onClick}>
                <Col span={24} offset={0}>
                    <Table dataSource={data}
                        onChange={onPageChange}
                        scroll={{ x: 800, y: window.innerHeight - 180 }}
                        pagination={{ position: ['bottomcenter'], defaultCurrent: 1, total: page.total, simple: true, pageSize: 15 }}
                    >
                        <Column align="center" title={languages["my.tracks.colTitle.id"]} dataIndex="id" key="id" fixed='left'{...search(languages, setSearchIdValue, onIdSearch, onIdReset)} width={35} />
                        <Column align="center" title={languages["my.tracks.colTitle.appointmentId"]} dataIndex="appointment_id" key="appointment_id" {...search(languages, setSearchAppointmentIdValue, onAppointmentIdSearch, onAppointmentIdReset)} width={70} />
                        <Column align="center" title={languages["my.tracks.colTitle.petName"]} dataIndex="pet_name" key="pet_name" {...search(languages, setSearchPetNameValue, onPetNameSearch, onPetNameReset)} width={50} />
                        <Column align="center" title={languages["my.tracks.colTitle.cost"]} dataIndex="surgery_cost" key="surgery_cost" width={40} />
                        <Column align="center" title={languages["my.tracks.colTitle.startTime"]} dataIndex="surgery_begin_time" key="surgery_begin_time" width={70} />
                        <Column align="center" title={languages["my.tracks.colTitle.endTime"]} dataIndex="release_time" key="release_time" width={70} />
e
                        <Column align="center" title=""
                            render={(a, b, record) => (

                                <Button type="link" onClick={(e) => (onMoreClick(record))}>{languages["my.tracks.row.more"]}</Button>

                            )}
                            fixed='right'
                            width={35}
                        />
                    </Table>
                </Col>
            </Row>

            <Drawer
                title={languages["my.tracks.drawer.title"] || "Treatment detail"}
                placement='left'
                width="50%"
                onClose={onDrawerClose}
                visible={showDrawer}
            >
                <Descriptions bordered={true} layout="horizontal" column={2}>
                    <Descriptions.Item label={languages["my.tracks.colTitle.id"]} span={2}>{datad[record].id}</Descriptions.Item>
                    <Descriptions.Item label={languages["my.tracks.colTitle.appointmentId"]} span={2}>{datad[record].appointment_id} </Descriptions.Item>
                    <Descriptions.Item label={languages["my.tracks.colTitle.cost"]} >{datad[record].surgery_cost}</Descriptions.Item>
                    <Descriptions.Item label={languages["my.tracks.colTitle.petName"]}>{datad[record].pet_name}</Descriptions.Item>
                    <Descriptions.Item label={languages["my.tracks.colTitle.startTime"]} span={2}>{datad[record].surgery_begin_time}</Descriptions.Item>
                    <Descriptions.Item label={languages["my.tracks.colTitle.endTime"]} span={2}>{datad[record].release_time}</Descriptions.Item>
                    <Descriptions.Item label={languages["my.tracks.colTitle.operationPlan"]} span={2}>{datad[record].operation_plan}</Descriptions.Item>

                </Descriptions>
            </Drawer>

        </div >
    );
};