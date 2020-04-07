import React from "react";
import Tracks from "./Tracks"
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

const TracksContainer = (props) => {

    const data = {}

    return (
        <Tracks />
    );
};

const mapState = state => ({
    lang: state.language,
});

const mapDispatch = dispatch => ({
    langChange: dispatch.language.langChange,
});

export default injectIntl(connect(mapState, mapDispatch)(TracksContainer));