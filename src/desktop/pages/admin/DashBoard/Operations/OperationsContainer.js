import React from "react";
import Operations from "./Operations"
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import fomatDate from '../../../../utils/formatDate'


class OperationsContainer extends React.Component {



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
            this.props.completeOperation(v).then(() => { this.props.getOperations({ index: 1 }); })
        }
        const onSearch = (v) => {
            this.props.getOperations(v);
        }
        return (
            <Operations messages={this.props.intl.messages} onSearch={onSearch} data={data} page={page} onComplete={onComplete} onPageChange={onPageChange} />
        );
    }
}
const mapState = state => ({
    operations: state.employeesApi.operations,
    firstLoad: state.employeesApi.firstLoad
});

const mapDispatch = dispatch => ({
    firstLoadReducer: dispatch.employeesApi.firstLoadReducer,
    getOperations: dispatch.employeesApi.getOperations,
    completeOperation: dispatch.employeesApi.completeOperation,
});

export default injectIntl(connect(mapState, mapDispatch)(OperationsContainer));