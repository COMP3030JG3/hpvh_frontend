import React, { Component } from "react";
import Tracks from "./Tracks"
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import fomatDate from '../../../../utils/formatDate'

class TracksContainer extends React.Component {



    componentDidMount() {
        if (this.props.firstLoad.operations) {
            this.props.getOperations({ index: 1 });
        }
    }


    render() {

        let d
        let data = null;
        let page = {};
        if (!this.props.firstLoad.operations) {
            d = this.props.operations.item;
            if (d !== undefined) {
                data = d.map(e => {
                    return {
                        ...e,
                        release_time: fomatDate(new Date(Math.round(e.release_time) * 1000), 'yyyy-MM-dd'),
                        surgery_begin_time: fomatDate(new Date(Math.round(e.surgery_begin_time) * 1000), 'yyyy-MM-dd'),
                    }
                })
            }
            let { item, ...p } = this.props.operations
            page = p
        }
        const onPageChange = (e) => {
            this.props.getOperations(e);
        }
        const onComplete = (v) => {
            console.log(v)
        }
        const onSearch = (v) => {
            this.props.getOperations(v);
        }
        return (
            <Tracks messages={this.props.intl.messages} data={data} onSearch={onSearch} page={page} onComplete={onComplete} onPageChange={onPageChange} />
        );
    }
}
const mapState = state => ({
    operations: state.usersApi.operations,
    firstLoad: state.usersApi.firstLoad
});

const mapDispatch = dispatch => ({
    firstLoadReducer: dispatch.usersApi.firstLoadReducer,
    getOperations: dispatch.usersApi.getOperations,
    completeOperation: dispatch.usersApi.completeOperation,
});

export default injectIntl(connect(mapState, mapDispatch)(TracksContainer));