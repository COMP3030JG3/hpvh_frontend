import React, { useState } from "react";
import {
    Button,
    Drawer,
    Descriptions,
    Col,
    Row,
    Table,
    Avatar,
    Tag
} from "antd"
import search from '../../../../components/search'




const { Column } = Table;


export default (props) => {
    const [searchIdValue, setSearchIdValue] = useState('');
    const [searchPetNameValue, setSearchPetNameValue] = useState('');
    const [showDrawer, setShowDrawer] = useState(false);
    const [record, setRecord] = useState(0);
    const [filt, setFilt] = useState({})
    const { data, page } = props;
    const datad = [];
    if (data !== null) {
        datad.push(...data);
        console.log(datad[0])
    } else {
        datad.push({});

    }

    const onMoreClick = (records) => {
        console.log(records);
        setRecord(records);
        setShowDrawer(true);
    }




    const onDrawerClose = () => {
        setShowDrawer(false);
    }


    const languages = props.messages;

    const onFinish = values => {
        console.log(values);
    };
    const onIdSearch = () => {
        onSearch({ index: 1, app_primary_key: searchIdValue });
    }
    const onIdReset = () => {
        setSearchIdValue('')
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


    const onPetNameSearch = () => {
        onSearch({ index: 1, pet_name: searchPetNameValue });
    }
    const onPetNameReset = () => {
        setSearchPetNameValue('')
        onSearch({ index: 1 });
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

        if (searchIdValue !== '') {
            data.app_primary_key = searchIdValue
        }
        props.onPageChange(data);
        console.log(data, filter)
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
                        scroll={{ x: 1400, y: window.innerHeight - 180 }}
                        pagination={{ position: ['bottomcenter'], defaultCurrent: 1, total: page.total, simple: true, pageSize: 15 }}
                    >
                        <Column align="center" title={languages["my.appointments.colTitle.id"]} dataIndex="app_primary_key" key="app_primary_key" fixed='left' width={45} {...search(languages, setSearchIdValue, onIdSearch, onIdReset)} />
                        <Column align="center" title={languages["my.appointments.colTitle.petName"]} dataIndex="pet_name" key="pet_name" width={60} {...search(languages, setSearchPetNameValue, onPetNameSearch, onPetNameReset)} />
                        <Column align="center" title={languages["my.appointments.colTitle.status"]} dataIndex="appointment_status" key="appointment_status" width={60}
                            render={status => (
                                <Tag color={status === 'processing' ? 'blue' : 'green'} key={status}>
                                    {status}
                                </Tag>
                            )}
                            filterMultiple={false} filters={filters.status}
                        />
                        <Column align="center" title={languages["my.appointments.colTitle.appointment_level"]} dataIndex="appointment_level" key="appointment_level" width={60}
                            render={status => (
                                <Tag color={setLevelColor(status)} key={status}>
                                    {status}
                                </Tag>
                            )}
                            filterMultiple={false} filters={filters.appointment_level}
                        />
                        <Column align="center" title={languages["my.appointments.colTitle.type"]} dataIndex="appointment_type" key="appointment_type" width={60} filterMultiple={false} filters={filters.type} />
                        <Column align="center" title={languages["my.appointments.colTitle.species"]} dataIndex="species" key="species" width={60} filterMultiple={false} filters={filters.species} />
                        <Column align="center" title={languages["my.appointments.colTitle.gender"]} dataIndex="pet_gender" key="pet_gender" width={60} filterMultiple={false} filters={filters.gender} />
                        <Column align="center" title={languages["my.appointments.colTitle.meetingCity"]} dataIndex="address" key="address" width={60} filterMultiple={false} filters={filters.meetingCity} />
                        <Column align="center" title={languages["my.appointments.colTitle.appointmentTime"]} dataIndex="appointment_date" width={100} key="appointment_date" />
                        <Column align="center" title={languages["my.appointments.colTitle.createTime"]} dataIndex="date" key="date" width={100} />
                        <Column align="center" title={languages["my.appointments.colTitle.needOperation"]} dataIndex="needOperation" width={60} key="needOperation" filterMultiple={false} filters={filters.needOperation}
                            render={status => (
                                <Tag color={status === 'yes' ? 'green' : 'red'} key={status}>
                                    {status}
                                </Tag>
                            )} />
                        <Column align="center" title=""
                            render={(a, b, record) => (
                                <Button type="link" onClick={(e) => (onMoreClick(record))}>{languages["my.appointments.row.more"]}</Button>
                            )}
                            fixed='right'
                            width={40}

                        />
                    </Table>
                </Col>
            </Row>

            <Drawer
                width="100%"
                title={languages["my.appointments.title.drawers"]}
                placement='left'
                closable={true}
                onClose={onDrawerClose}
                visible={showDrawer}
            >

                <Descriptions bordered={true} layout="horizontal" column={1}>
                    <Descriptions.Item label={languages["my.appointments.colTitle.id"]} span={2}>{datad[record].app_primary_key || ""}</Descriptions.Item>
                    <Descriptions.Item label={""} span={2}><Avatar size={64} src={datad[record].pet_image_path} /></Descriptions.Item>
                    <Descriptions.Item label={languages["my.appointments.colTitle.type"]}>{datad[record].appointment_type || ""}</Descriptions.Item>
                    <Descriptions.Item label={languages["my.appointments.colTitle.status"]} >
                        <Tag color={datad[record].appointment_status === 'processing' ? 'blue' : 'green'}>
                            {datad[record].appointment_status || ""}
                        </Tag>
                    </Descriptions.Item>
                    <Descriptions.Item label={languages["my.appointments.colTitle.petName"]}>{datad[record].pet_name || ""}</Descriptions.Item>
                    <Descriptions.Item label={languages["my.appointments.colTitle.species"]} span={2}>{datad[record].species || ""}</Descriptions.Item>
                    <Descriptions.Item label={languages["my.appointments.colTitle.gender"]} >{datad[record].pet_gender || ""}</Descriptions.Item>
                    <Descriptions.Item label={languages["my.appointments.colTitle.meetingCity"]} span={2}>{datad[record].address || ""}</Descriptions.Item>
                    <Descriptions.Item label={languages["my.appointments.colTitle.needOperation"]} >

                        <Tag color={datad[record].needOperation === 'yes' ? 'green' : 'red'}>
                            {datad[record].needOperation || ""}
                        </Tag>
                    </Descriptions.Item>
                    <Descriptions.Item label={languages["my.appointments.colTitle.appointmentTime"]} span={2}>{datad[record].appointment_date || ""}</Descriptions.Item>
                    <Descriptions.Item label={languages["my.appointments.colTitle.createTime"]} span={2}>{datad[record].date || ""}</Descriptions.Item>
                    <Descriptions.Item label={languages["my.appointments.colTitle.description"]} span={2}>{datad[record].description || ""}</Descriptions.Item>
                    <Descriptions.Item label={languages["my.appointments.colTitle.diagnosis"]} span={2}>{datad[record].diagnosis || ""}</Descriptions.Item>
                </Descriptions>
            </Drawer>


        </div>
    );
};
