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
    "my.tracks.colTitle.trackId": "No.",
    "my.tracks.colTitle.petName": "Pet's Name",
    "my.tracks.colTitle.sex": "Sex",
    "my.tracks.colTitle.status": "Status",
    "my.tracks.colTitle.beginTime": "Begin Time",
    "my.tracks.colTitle.releaseTime": "Release Time",
    "my.tracks.colTitle.livingDuration": "Living Duration",
    "my.tracks.row.more": "more",

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
                        pagination={{ defaultCurrent: data.index, total: data.total, simple: true, pageSize: data.count }}
                    >
                        <Column ellipsis={true} title={languages["my.tracks.colTitle.trackId"]} dataIndex="trackId" key="trackId" />
                        <Column ellipsis={true} title={languages["my.tracks.colTitle.petName"]} dataIndex="petName" key="petName" />
                        <Column ellipsis={true} title={languages["my.tracks.colTitle.sex"]} dataIndex="sex" key="sex" />
                        <Column ellipsis={true} title={languages["my.tracks.colTitle.status"]} dataIndex="status" key="status" />
                        <Column ellipsis={true} title={languages["my.tracks.colTitle.livingDuration"]} dataIndex="livingDuration" key="livingDuration" />
                        <Column ellipsis={true} title={languages["my.tracks.colTitle.beginTime"]} dataIndex="beginTime" key="beginTime" />
                        <Column ellipsis={true} title={languages["my.tracks.colTitle.releaseTime"]} dataIndex="releaseTime" key="releaseTime" />
                        <Column ellipsis={true} title="" render={record => (
                            <Button type="link" onClick={(e) => (onMoreClick(record))}>{languages["my.tracks.row.more"]}</Button>)}
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
                    <Descriptions.Item label={languages["my.tracks.colTitle.trackId"]} span={2}>1243214122412</Descriptions.Item>
                    <Descriptions.Item label={languages["my.tracks.colTitle.petName"]} span={2}>Joe</Descriptions.Item>
                    <Descriptions.Item label={languages["my.tracks.colTitle.sex"]} span={2}>Female</Descriptions.Item>
                    <Descriptions.Item label={languages["my.tracks.colTitle.status"]}>In surgery</Descriptions.Item>
                    <Descriptions.Item label={languages["my.tracks.colTitle.livingDuration"]} >12 days</Descriptions.Item>
                    <Descriptions.Item label={languages["my.tracks.colTitle.beginTime"]}>XXXX-XX-XX</Descriptions.Item>
                    <Descriptions.Item label={languages["my.tracks.colTitle.releaseTime"]} >XXXX-XX-XX</Descriptions.Item>
                    <Descriptions.Item label={languages["my.tracks.colTitle.details"] || "Details"} span={2}>details</Descriptions.Item>
                    <Descriptions.Item label={languages["my.tracks.colTitle.petPlan"] || "Pet Plan"} span={2}>petPlan</Descriptions.Item>
                </Descriptions>
            </Drawer>

        </div>
    );
};