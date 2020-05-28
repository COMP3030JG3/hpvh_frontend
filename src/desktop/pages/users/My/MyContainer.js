import React from "react";
import My from "./My"
import MyMobile from "./My_mobile"
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { enquireScreen } from 'enquire-js';


let isMobile;
enquireScreen((b) => {
    isMobile = b;
});

class MyContainer extends React.Component {
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
        const onMenuClick = (v) => {
            switch (v.key) {
                case "zh":
                    this.props.langChange("zh");
                    break;
                case "en":
                    this.props.langChange("en");
                    break;
                case "profileeditor":
                    this.props.switchMyContent("profileeditor");
                    break;
                case "appointments":
                    this.props.switchMyContent("appointments");
                    break;
                case "newappointment":
                    this.props.switchMyContent("newappointment");
                    break;
                case "tracks":
                    this.props.switchMyContent("tracks");
                    break;
                case "logout":
                    this.props.logout();
                    break;
                case "discussion":
                    this.props.history.push('/discussion')
                    break;
                default:
                    break;
            }
        }
        console.log(1, this.props)
        return (
            this.state.isMobile ? <MyMobile
                onMenuClick={onMenuClick}
                fullname={this.props.loginInfo.fullname}
                messages={this.props.intl.messages}
                onLinkClick={this.props.setDiscussionEntry}
                myContent={this.props.myContent}
                menuKey={this.props.myContent}
            />

                : <My
                    fullname={this.props.loginInfo.fullname}
                    messages={this.props.intl.messages}
                    onLinkClick={this.props.setDiscussionEntry}
                    myContent={this.props.myContent} />
        );
    }
};


const mapState = state => ({
    myContent: state.my.myContent,
    loginInfo: state.validation.loginInfo,
    lang: state.language,
});

const mapDispatch = dispatch => ({
    switchMyContent: dispatch.my.switchMyContent,
    setDiscussionEntry: dispatch.discussion.setDiscussionEntry,
    langChange: dispatch.language.langChange,
    logout: dispatch.validation.logout
});


export default injectIntl(connect(mapState, mapDispatch)(MyContainer));