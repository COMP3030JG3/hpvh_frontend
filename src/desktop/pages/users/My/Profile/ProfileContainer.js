import React from "react";
import Profile from "./Profile"
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

const ProfileContainer = (props) => {
    const onLangChange = (e) => {
        console.log(e)
        // props.langChange(e.target.value);
    }

    const onMenuClick = (e) => {

        props.switchMyContent(e.key);
    }

    const onEditClick = () => {

        props.switchMyContent("profileeditor");
    }




    const data = {
        avatar: "/avatar",
        name: "name",
        description: "description"
    }

    return (
        <Profile
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
});

const mapDispatch = dispatch => ({
    switchMyContent: dispatch.my.switchMyContent,
    langChange: dispatch.language.langChange,
});



export default injectIntl(connect(mapState, mapDispatch)(ProfileContainer));