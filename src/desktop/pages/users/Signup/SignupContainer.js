import "./less/signup.less"
import React from "react";
import Signup from './Signup'
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { Layout } from 'antd'
import QueueAnim from 'rc-queue-anim';



const SignupContainer = (props) => {
    const onLangChange = (e) => {

        props.langChange(e.target.value);

    }

    const onFormFinish = values => {
        console.log('Received values of form: ', values);
    };

    return (

        <div>
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
        </div>

    );
};

const mapState = state => ({
    lang: state.language,
});

const mapDispatch = dispatch => ({
    langChange: dispatch.language.langChange,
});

export default injectIntl(connect(mapState, mapDispatch)(SignupContainer));

