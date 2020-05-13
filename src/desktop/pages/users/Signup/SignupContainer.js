import "./less/signup.less"
import React from "react";
import Signup from './Signup'
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { Layout } from 'antd'
import QueueAnim from 'rc-queue-anim';



const SignupContainer = (props) => {
    const { usersApi } = props
    const onLangChange = (e) => {

        props.langChange(e.target.value);

    }
    console.log(props)
    const onFormFinish = v => {
        let { code, confirm, prefix, ...data } = v;
        usersApi.register(data)
        console.log('Received values of form: ', data);
    };

    return (


        <QueueAnim
            delay={100}
            duration={1000}
            type="bottom"
            className="signup-wrap" >
            <Signup key="signup"
                messages={props.intl.messages}
                lang={props.lang}
                onFormFinish={onFormFinish}
                onLangChange={onLangChange}

            />
        </QueueAnim>


    );
};

const mapState = state => ({
    lang: state.language,

});

const mapDispatch = dispatch => ({
    langChange: dispatch.language.langChange,
    usersApi: dispatch.usersApi,
});

export default injectIntl(connect(mapState, mapDispatch)(SignupContainer));

