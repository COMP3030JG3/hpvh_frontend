import React from "react";
import Profile from "./Profile"
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

const ProfileContainer = (props) => {
    const onLangChange = (e) => {
        props.langChange(e.key);
    }

    const onMenuClick = (e) => {

        props.switchMyContent(e.key);
    }

    const onEditClick = () => {

        props.switchMyContent("profileeditor");
    }




    const data = {
        avatar: props.loginInfo.customer_image_path,
        name: props.loginInfo.fullname,
        description: props.loginInfo.email
    }


    return (
        <Profile
            messages={props.intl.messages}
            data={data}
            menuKey={props.myContent}
            onMenuClick={onMenuClick}
            onEditClick={onEditClick}
            onLangChange={onLangChange} />
    );
};

const mapState = state => ({
    myContent: state.my.myContent,
    lang: state.language,
    loginInfo: state.validation.loginInfo
});

const mapDispatch = dispatch => ({
    switchMyContent: dispatch.my.switchMyContent,
    langChange: dispatch.language.langChange,
});



export default injectIntl(connect(mapState, mapDispatch)(ProfileContainer));