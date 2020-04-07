import React from "react";
import {
    Row,
    Col
} from "antd"

const messages = {

};

export default (props) => {

    const languages = messages;

    const onFinish = values => {
        console.log(values);
    };

    return (
        <div>
            <Row>
                <Col span={12} offset={6}>
                    Tracks
                </Col>
            </Row>
        </div>
    );
};