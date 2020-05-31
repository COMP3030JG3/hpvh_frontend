import "./less/signup.less"
import React from "react";
import Signup from './Signup'
import SignupMobile from './Signup_mobile'

import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { Layout } from 'antd'
import QueueAnim from 'rc-queue-anim';
import { enquireScreen } from 'enquire-js';


let isMobile;
enquireScreen((b) => {
    isMobile = b;
});
class SignupContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isMobile,
        };

    }
    componentDidMount() {

        enquireScreen((b) => {
            this.setState({ isMobile: !!b });
        });


    }
    render() {
        const { usersApi } = this.props
        const onLangChange = (e) => {
            this.props.langChange(e.target.value);

        }
        const onFormFinish = v => {
            let { code, confirm, prefix, ...data } = v;
            usersApi.register(data)
        };

        return (

            this.state.isMobile ?
                <QueueAnim
                    delay={100}
                    duration={1000}
                    type="bottom"

                >
                    <SignupMobile key="signup"
                        messages={this.props.intl.messages}
                        lang={this.props.lang}
                        onFormFinish={onFormFinish}
                        onLangChange={onLangChange}
                    />
                </QueueAnim>
                :
                <QueueAnim
                    delay={100}
                    duration={1000}
                    type="bottom"
                    className="signup-wrap" >
                    <Signup key="signup"
                        messages={this.props.intl.messages}
                        lang={this.props.lang}
                        onFormFinish={onFormFinish}
                        onLangChange={onLangChange}
                    />
                </QueueAnim>


        );
    }
};

const mapState = state => ({
    lang: state.language,
});

const mapDispatch = dispatch => ({
    langChange: dispatch.language.langChange,
    usersApi: dispatch.usersApi,
});

export default injectIntl(connect(mapState, mapDispatch)(SignupContainer));

