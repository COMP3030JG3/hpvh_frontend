import React from "react";
import Operations from "./Operations"
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

const OperationsContainer = (props) => {

    const data = {}

    return (
        <Operations />
    );
};

const mapState = state => ({

});

const mapDispatch = dispatch => ({

});

export default injectIntl(connect(mapState, mapDispatch)(OperationsContainer));