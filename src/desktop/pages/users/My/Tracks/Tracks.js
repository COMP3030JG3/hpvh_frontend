import React, { useState } from "react";
import {
    Row,
    Col,
    Table,
    Tag,
    Button,
    Drawer
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

const data = [
    {
        key: "1"

    },
];

export default (props) => {

    const [showDrawer, setShowDrawer] = useState(false);

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
            <Row>
                <Col span={24} offset={0}>
                    <Table dataSource={data} >
                        <Column title={languages["my.tracks.colTitle.trackId"]} dataIndex="trackId" key="trackId" />
                        <Column title={languages["my.tracks.colTitle.petName"]} dataIndex="petName" key="petName" />
                        <Column title={languages["my.tracks.colTitle.sex"]} dataIndex="sex" key="sex" />
                        <Column title={languages["my.tracks.colTitle.status"]} dataIndex="status" key="status" />
                        <Column title={languages["my.tracks.colTitle.beginTime"]} dataIndex="beginTime" key="beginTime" />
                        <Column title={languages["my.tracks.colTitle.releaseTime"]} dataIndex="releaseTime" key="releaseTime" />
                        <Column title={languages["my.tracks.colTitle.livingDuration"]} dataIndex="livingDuration" key="livingDuration" />
                        <Column title="" render={record => (
                            <Button type="link" onClick={(e) => (onMoreClick(record))}>{languages["my.tracks.row.more"]}</Button>
                        )
                        } />
                    </Table>
                </Col>
            </Row>

            <Drawer
                title="Basic Drawer"
                placement='left'
                closable={false}
                onClose={onDrawerClose}
                visible={showDrawer}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>

        </div>
    );
};