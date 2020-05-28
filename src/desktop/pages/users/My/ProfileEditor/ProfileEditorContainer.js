import React from "react";
import ProfileEditor from "./ProfileEditor"
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

const ProfileContainer = (props) => {

    return (
        <ProfileEditor
            profile={props.loginInfo}
            changeInfo={props.changeInfo}
            changePassword={props.changePassword}
            messages={props.intl.messages}
        />
    );
};


const mapState = state => ({
    lang: state.language,
    loginInfo: state.validation.loginInfo
});

const mapDispatch = dispatch => ({
    langChange: dispatch.language.langChange,
    changePassword: dispatch.usersApi.changePassword,
    changeInfo: dispatch.usersApi.changeInfo
});

export default injectIntl(connect(mapState, mapDispatch)(ProfileContainer));