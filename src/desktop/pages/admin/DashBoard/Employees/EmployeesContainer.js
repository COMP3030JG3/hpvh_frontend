import React from "react";
import Employees from "./Employees"
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

const EmployeesContainer = (props) => {

    const data = {}

    return (
        <Employees />
    );
};

const mapState = state => ({

});

const mapDispatch = dispatch => ({

});

export default injectIntl(connect(mapState, mapDispatch)(EmployeesContainer));