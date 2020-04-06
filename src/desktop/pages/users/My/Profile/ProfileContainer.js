import React from "react";
import Profile from "./Profile"
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

const ProfileContainer = (props) => {
    const onLangChange = (e) => {
        console.log(e)
        // props.langChange(e.target.value);

    }

    const data = {
        avatar: "/avatar",
        name: "name",
        description: "description"
    }

    return (
        <Profile data={data} onLangChange={onLangChange} />
    );
};

const mapState = state => ({
    lang: state.language,
});

const mapDispatch = dispatch => ({
    langChange: dispatch.language.langChange,
});

export default injectIntl(connect(mapState, mapDispatch)(ProfileContainer));