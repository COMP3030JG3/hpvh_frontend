import React, { useState } from "react";
import {
    Button,
    Drawer,
    Descriptions,
    Col,
    Row,
    Table
} from "antd"




const { Column } = Table;


export default (props) => {

    const [showDrawer, setShowDrawer] = useState(false);
    const [record, setRecord] = useState(0);
    const { data } = props;
    const datad = [];
    if (data.lenth !== 0) {
        datad.push(...data);
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
                        pagination={{ position: ['bottomcenter'] }}
                    >
                        <Column title={languages["my.appointments.colTitle.id"]} dataIndex="id" key="id" fixed='left' width={100} />
                        <Column title={languages["my.appointments.colTitle.petName"]} dataIndex="petName" key="petName" width={100} />
                        <Column title={languages["my.appointments.colTitle.status"]} dataIndex="status" key="status" width={100} />
                        <Column title={languages["my.appointments.colTitle.type"]} dataIndex="type" key="type" width={100} />
                        <Column title={languages["my.appointments.colTitle.species"]} dataIndex="species" key="species" width={100} />
                        <Column title={languages["my.appointments.colTitle.gender"]} dataIndex="gender" key="gender" width={100} />
                        <Column title={languages["my.appointments.colTitle.meetingCity"]} dataIndex="meetingCity" key="meetingCity" />
                        <Column title={languages["my.appointments.colTitle.appointmentTime"]} dataIndex="appointmentTime" key="id" />
                        <Column title={languages["my.appointments.colTitle.createTime"]} dataIndex="createTime" key="createTime" />
                        <Column title={languages["my.appointments.colTitle.needOperation"]} dataIndex="needOperation" key="needOperation" />
                        <Column title={languages["my.appointments.colTitle.operationId"]} dataIndex="operationId" key="operationId" />
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

                <Descriptions bordered={true} layout="horizontal" column={2}>
                    <Descriptions.Item label={languages["my.appointments.colTitle.id"]} span={2}>{datad[record].id || ""}</Descriptions.Item>
                    <Descriptions.Item label={languages["my.appointments.colTitle.contactNumber"]} span={2}>{datad[record].contactNumber || ""}</Descriptions.Item>
                    <Descriptions.Item label={languages["my.appointments.colTitle.type"]}>{datad[record].type || ""}</Descriptions.Item>
                    <Descriptions.Item label={languages["my.appointments.colTitle.status"]} >{datad[record].status || ""}</Descriptions.Item>
                    <Descriptions.Item label={languages["my.appointments.colTitle.petName"]}>{datad[record].petName || ""}</Descriptions.Item>
                    <Descriptions.Item label={languages["my.appointments.colTitle.species"]} span={2}>{datad[record].species || ""}</Descriptions.Item>
                    <Descriptions.Item label={languages["my.appointments.colTitle.gender"]} >{datad[record].gender || ""}</Descriptions.Item>
                    <Descriptions.Item label={languages["my.appointments.colTitle.meetingCity"]} span={2}>{datad[record].meetingCity || ""}</Descriptions.Item>
                    <Descriptions.Item label={languages["my.appointments.colTitle.needOperation"]} >{datad[record].needOperation || ""}</Descriptions.Item>
                    <Descriptions.Item label={languages["my.appointments.colTitle.operationId"]} >{datad[record].operationId || ""}</Descriptions.Item>
                    <Descriptions.Item label={languages["my.appointments.colTitle.appointmentTime"]} span={2}>{datad[record].appointmentTime || ""}</Descriptions.Item>
                    <Descriptions.Item label={languages["my.appointments.colTitle.createTime"]} span={2}>{datad[record].createTime || ""}</Descriptions.Item>
                    <Descriptions.Item label={languages["my.appointments.colTitle.description"]} span={2}>{datad[record].description || ""}</Descriptions.Item>
                    <Descriptions.Item label={languages["my.appointments.colTitle.diagnosis"]} span={2}>{datad[record].diagnosis || ""}</Descriptions.Item>
                </Descriptions>
            </Drawer>


        </div>
    );
};
