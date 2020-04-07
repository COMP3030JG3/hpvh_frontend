import React from "react";
import Appointments from "./Appointments"
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

const AppointmentsContainer = (props) => {

    const data = {}

    return (
        <Appointments />
    );
};

const mapState = state => ({

});

const mapDispatch = dispatch => ({

});

export default injectIntl(connect(mapState, mapDispatch)(AppointmentsContainer));