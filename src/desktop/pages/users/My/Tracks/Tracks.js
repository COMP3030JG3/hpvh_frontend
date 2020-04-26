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

    const [showDrawer, setShowDrawer] = useState(false);

    const { data } = props

    const languages = messages;

    const onFinish = values => {
        console.log(values);
    };

    const onMoreClick = (records) => {
        console.log(records);
        setShowDrawer(true);
    }
    const onDrawerClose = () => {
        setShowDrawer(false);
    }

    return (
        <div>
            <Row onClick={props.onClick}>
                <Col span={24} offset={0}>
                    <Table dataSource={data.items}
                        onChange={props.onPageChange}
                        scroll={{ x: 1400 }}
                        pagination={{ defaultCurrent: data.index, total: data.total, simple: true, pageSize: data.count }}
                    >
                        <Column title={languages["my.tracks.colTitle.id"]} dataIndex="id" key="id" fixed='left' width={100} />
                        <Column title={languages["my.tracks.colTitle.appointmentId"]} dataIndex="appointmentId" width={150} key="appointmentId" />
                        <Column title={languages["my.tracks.colTitle.petName"]} dataIndex="petName" key="petName" width={100} />
                        <Column title={languages["my.tracks.colTitle.status"]} dataIndex="status" key="status" width={100} />
                        <Column title={languages["my.tracks.colTitle.cost"]} dataIndex="cost" key="cost" width={100} />
                        <Column title={languages["my.tracks.colTitle.species"]} dataIndex="species" key="species" width={100} />
                        <Column title={languages["my.tracks.colTitle.gender"]} dataIndex="gender" key="gender" width={100} />
                        <Column title={languages["my.tracks.colTitle.createTime"]} dataIndex="createTime" key="createTime" />
                        <Column title={languages["my.tracks.colTitle.startTime"]} dataIndex="startTime" key="startTime" />
                        <Column title={languages["my.tracks.colTitle.endTime"]} dataIndex="endTime" key="endTime" />

                        <Column title=""
                            render={record => (

                                <Button type="link" onClick={(e) => (onMoreClick(record))}>{languages["my.tracks.row.more"]}</Button>

                            )}
                            fixed='right'
                            width={100}
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
                    <Descriptions.Item label={languages["my.tracks.colTitle.id"]} span={2}>1243214122412</Descriptions.Item>
                    <Descriptions.Item label={languages["my.tracks.colTitle.appointmentId"]} span={2}>petPlan</Descriptions.Item>
                    <Descriptions.Item label={languages["my.tracks.colTitle.contactNumber"]} span={2}>details</Descriptions.Item>
                    <Descriptions.Item label={languages["my.tracks.colTitle.status"]} >12 days</Descriptions.Item>
                    <Descriptions.Item label={languages["my.tracks.colTitle.cost"]} >12 days</Descriptions.Item>
                    <Descriptions.Item label={languages["my.tracks.colTitle.petName"]}>XXXX-XX-XX</Descriptions.Item>
                    <Descriptions.Item label={languages["my.tracks.colTitle.species"]} span={2}>petPlan</Descriptions.Item>
                    <Descriptions.Item label={languages["my.tracks.colTitle.gender"]} >XXXX-XX-XX</Descriptions.Item>
                    <Descriptions.Item label={languages["my.tracks.colTitle.createTime"]} span={2}>petPlan</Descriptions.Item>
                    <Descriptions.Item label={languages["my.tracks.colTitle.startTime"]} span={2}>petPlan</Descriptions.Item>
                    <Descriptions.Item label={languages["my.tracks.colTitle.endTime"]} span={2}>petPlan</Descriptions.Item>
                    <Descriptions.Item label={languages["my.tracks.colTitle.description"]} span={2}>petPlan</Descriptions.Item>
                    <Descriptions.Item label={languages["my.tracks.colTitle.diagnosis"]} span={2}>petPlan</Descriptions.Item>
                    <Descriptions.Item label={languages["my.tracks.colTitle.operationPlan"]} span={2}>petPlan</Descriptions.Item>
                </Descriptions>
            </Drawer>

        </div>
    );
};