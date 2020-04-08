import React from "react";
import {
    Row,
    Col,
    Table,
    Tag,
    Button
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


    },
];

export default (props) => {

    const languages = messages;

    const onFinish = values => {
        console.log(values);
    };



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
                            <Button type="link">{languages["my.tracks.row.more"]}</Button>
                        )
                        } />
                    </Table>
                </Col>
            </Row>
        </div>
    );
};