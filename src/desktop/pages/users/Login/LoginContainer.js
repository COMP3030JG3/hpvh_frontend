
import "./less/login.less"
import React from "react";
import Login from './Login'
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { Layout } from 'antd'
import { enquireScreen } from 'enquire-js';
import QueueAnim from 'rc-queue-anim';

let isMobile;
enquireScreen((b) => {
    isMobile = b;
});

class LoginContainer extends React.Component {
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
        const onLangChange = (e) => {

            this.props.langChange(e.target.value);

        }

        const onFormFinish = values => {
            this.props.login(values);
            //console.log('Received values of form: ', values);
        };

        return (
            this.state.isMobile ?
                <QueueAnim
                    delay={100}
                    duration={1000}
                    type="bottom"

                >
                    <img key="img" width="250px" src="/logo.svg" alt="img" style={{ display: "block", margin: "16px auto" }}></img>
                    <Login
                        key="login"
                        isMobile={this.state.isMobile}
                        messages={this.props.intl.messages}
                        lang={this.props.lang}
                        onFormFinish={onFormFinish}
                        onLangChange={onLangChange}
                    /> </QueueAnim> :
                <div className="login">
                    <QueueAnim
                        delay={100}
                        duration={1000}
                        type="bottom"

                    >
                        <div key="login" className="login-wrap">
                            <img width="250px" src="/logo.svg" alt="img" style={{ margin: "16px" }}></img>
                            <Login
                                messages={this.props.intl.messages}
                                lang={this.props.lang}
                                onFormFinish={onFormFinish}
                                onLangChange={onLangChange}
                            />
                        </div>
                    </QueueAnim>
                </div>
        );
    }
}

const mapState = state => ({
    lang: state.language,
});

const mapDispatch = dispatch => ({
    langChange: dispatch.language.langChange,
    login: dispatch.validation.login,
});

export default injectIntl(connect(mapState, mapDispatch)(LoginContainer));


