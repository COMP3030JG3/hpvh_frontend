import React from "react";
import {List} from 'antd';
export default (props) => { 
    const data=props.data;
    
    
    return (
        <div>
            <h3 style={{ margin: '16px 0' }}>About</h3>
            <List
                size="large"
                bordered
                dataSource={data}
                renderItem={item => <List.Item>{item}</List.Item>}
                />
            
        </div>
    );
};