import React from "react";
import ProfileEditor from "./ProfileEditor"
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

const ProfileContainer = (props) => {
    const messages = {
        'profileEditor.title': "Titsdfsle"
    };
    return (
        <ProfileEditor messages={props.intl.messages} />
    );
};


const mapState = state => ({
    lang: state.language,
});

const mapDispatch = dispatch => ({
    langChange: dispatch.language.langChange,
});

export default injectIntl(connect(mapState, mapDispatch)(ProfileContainer));