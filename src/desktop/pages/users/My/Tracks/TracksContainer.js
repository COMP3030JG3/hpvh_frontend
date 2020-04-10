import React, { Component } from "react";
import Tracks from "./Tracks"
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

class TracksContainer extends Component {

    componentWillMount() {

        return this.props.firstLoading ? this.props.getTracks(1) : {};
    }

    render() {

        const onPageChange = (e) => {
            this.props.getTracks(e.current);
        }


        return (
            <Tracks data={this.props.tracksData} onPageChange={onPageChange} />
        );
    }
};

const mapState = state => ({
    //lang: state.language,
    tracksData: state.my.tracksData,
    firstLoading: state.my.firstLoading,
});

const mapDispatch = dispatch => ({
    langChange: dispatch.language.langChange,
    getTracks: dispatch.my.getTracks,
});

export default injectIntl(connect(mapState, mapDispatch)(TracksContainer));