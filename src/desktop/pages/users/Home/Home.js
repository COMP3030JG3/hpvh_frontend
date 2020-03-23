import React from "react";
import 'antd/dist/antd.css';
import './Home.css';
import {Carousel} from 'antd'
import {Button} from 'antd'
export default (props) => {
    const buttonName = props.buttonName;
    
    return (
    <view>
    <Carousel autoplay>
        <div>
            <h3><img zindex='1' hspace='400px' width='50%' src={require('../Home/cat1.jpg')} alt="please wait"/></h3>
        </div>
        <div>
            <h3><img hspace='400px' width='45%' src={require('../Home/cat2.jpg')} alt="please wait"/></h3>
        </div>
        <div>
            <h3><img hspace='400px' width='42%' src={require('../Home/dog1.jpg')} alt="please wait"/></h3>
        </div>
        <div>
            <h3><img hspace='400px' width='50%' src={require('../Home/dog2.jpg')} alt="please wait"/></h3>
        </div>
        

    </Carousel>

    <Button type='primary' style={{ left:'680px'}}>{buttonName}</Button>
    </view>
    
    );
};