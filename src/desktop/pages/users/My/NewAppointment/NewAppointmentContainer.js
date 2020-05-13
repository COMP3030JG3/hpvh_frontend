import React from "react";
import NewAppointment from "./NewAppointment"
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

const NewAppointmentContainer = (props) => {

    const data = {}



    const historyPet = [{ id: 1, pet_name: 'aa', pet_gender: 'female', species: 'dog' }]
    return (
        <NewAppointment makeAppointment={props.makeAppointment} historyPet={historyPet} messages={props.intl.messages} />
    );
};

const mapState = state => ({
    myContent: state.my.myContent,
    lang: state.language,

});

const mapDispatch = dispatch => ({
    switchMyContent: dispatch.my.switchMyContent,
    langChange: dispatch.language.langChange,
    makeAppointment: dispatch.usersApi.makeAppointment,
});


export default injectIntl(connect(mapState, mapDispatch)(NewAppointmentContainer));