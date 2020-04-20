import React from "react";
import Appointments from "./Appointments"
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

const AppointmentsContainer = (props) => {

    const data = [
        {
            id: 1,
            index: 0,
            customerName: 'John',
            petName: 'Kitty',
            gender: 'Male',
            species: 'Cat',
            meetingCity: 'Beijing',
            description: 'Good pet',
            image: '',
            surgeryTime: '2020.4.8',
            appointmentDate: '2020.1.31'
        },
        {
            id: 2,
            index: 1,
            customerName: 'Zhang San',
            petName: 'Wang Cai',
            gender: 'Male',
            species: 'Dog',
            meetingCity: 'Shanghai',
            description: 'Pretty pet',
            image: '',
            surgeryTime: '2020.5.6',
            appointmentDate: '2020.4.29'
        },
        {
            id: 3,
            index: 2,
            customerName: 'John',
            petName: 'Kitty',
            gender: 'Male',
            species: 'Cat',
            meetingCity: 'Beijing',
            description: 'Good pet',
            image: '',
            surgeryTime: '2020.4.8',
            appointmentDate: '2020.1.31'
        },

    ];

    return (
        <Appointments messages={props.intl.messages} data={data} />
    );
};

const mapState = state => ({

});

const mapDispatch = dispatch => ({

});

export default injectIntl(connect(mapState, mapDispatch)(AppointmentsContainer));