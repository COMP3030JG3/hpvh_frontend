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




const { Column } = Table;


export default (props) => {

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

    return (
        <div>
            <Row>
                <Col span={24} offset={0}>
                    <Table dataSource={data}
                        onChange={props.onPageChange}
                        scroll={{ x: 1600 }}
                        pagination={{ position: ['bottomcenter'], defaultCurrent: 1, total: page.total, simple: true, pageSize: 15 }}
                    >
                        <Column title={languages["my.appointments.colTitle.id"]} dataIndex="app_primary_key" key="app_primary_key" fixed='left' width={100} />
                        <Column title={languages["my.appointments.colTitle.petName"]} dataIndex="pet_name" key="pet_name" width={100} />
                        <Column title={languages["my.appointments.colTitle.status"]} dataIndex="appointment_status" key="appointment_status" width={100}
                            render={status => (
                                <Tag color={status === 'processing' ? 'blue' : 'green'} key={status}>
                                    {status}
                                </Tag>
                            )} />
                        <Column title={languages["my.appointments.colTitle.type"]} dataIndex="appointment_type" key="appointment_type" width={100} />
                        <Column title={languages["my.appointments.colTitle.species"]} dataIndex="species" key="species" width={100} />
                        <Column title={languages["my.appointments.colTitle.gender"]} dataIndex="pet_gender" key="pet_gender" width={100} />
                        <Column title={languages["my.appointments.colTitle.meetingCity"]} dataIndex="address" key="address" />
                        <Column title={languages["my.appointments.colTitle.appointmentTime"]} dataIndex="appointment_date" key="appointment_date" />
                        <Column title={languages["my.appointments.colTitle.createTime"]} dataIndex="date" key="date" />
                        <Column title={languages["my.appointments.colTitle.needOperation"]} dataIndex="needOperation" key="needOperation"
                            render={status => (
                                <Tag color={status === 'yes' ? 'green' : 'red'} key={status}>
                                    {status}
                                </Tag>
                            )} />
                        <Column title=""
                            render={(a, b, record) => (

                                <Button type="link" onClick={(e) => (onMoreClick(record))}>{languages["my.appointments.row.more"]}</Button>

                            )}
                            fixed='right'
                            width={100}

                        />
                    </Table>
                </Col>
            </Row>

            <Drawer
                width="50%"
                title={languages["my.appointments.title.drawers"]}
                placement='left'
                closable={false}
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
