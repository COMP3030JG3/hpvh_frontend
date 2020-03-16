import React from "react";

import { Layout } from 'antd';


const { Content } = Layout;

export default (props) => {
    return (
        <Content style={{ padding: '0 50px' }}>
            <div>
                {props.children}
            </div>
        </Content>
    );
};



