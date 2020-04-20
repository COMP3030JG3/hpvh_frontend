import React from "react";
import NewAppointment from "./NewAppointment"
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

const NewAppointmentContainer = (props) => {

    const data = {}

    return (
        <NewAppointment messages={props.intl.messages} />
    );
};

const mapState = state => ({

});

const mapDispatch = dispatch => ({

});

export default injectIntl(connect(mapState, mapDispatch)(NewAppointmentContainer));