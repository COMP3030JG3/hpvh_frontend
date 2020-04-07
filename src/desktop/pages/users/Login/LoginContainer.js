
import "./less/login.less"
import React from "react";
import Login from './Login'
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { Layout } from 'antd'
import QueueAnim from 'rc-queue-anim';



const LoginContainer = (props) => {
    const onLangChange = (e) => {

        props.langChange(e.target.value);

    }

    const onFormFinish = values => {
        console.log('Received values of form: ', values);
    };

    return (

        <div className="login">
            <QueueAnim
                delay={100}
                duration={1000}
                type="bottom"
            >
                <div key="login" className="login-wrap">
                    <img width="250px" src="https://s1.ax1x.com/2020/03/29/GVqwRJ.png" alt="img"></img>
                    <Login
                        messages={props.intl.messages}
                        lang={props.lang}
                        onFormFinish={onFormFinish}
                        onLangChange={onLangChange}
                    />
                </div>
            </QueueAnim>
        </div>
    );
};

const mapState = state => ({
    lang: state.language,
});

const mapDispatch = dispatch => ({
    langChange: dispatch.language.langChange,
});

export default injectIntl(connect(mapState, mapDispatch)(LoginContainer));


