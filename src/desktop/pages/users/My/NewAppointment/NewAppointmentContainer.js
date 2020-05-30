import React from "react";
import NewAppointment from "./NewAppointment"
import NewAppointmentMobile from "./NewAppointment_mobile"

import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';



class NewAppointmentContainer extends React.Component {

    componentDidMount() {
        if (this.props.firstLoad.pets) {
            this.props.getPets({ index: 1 });
        }
    }

    render() {


        let d
        let data = null;

        if (!this.props.firstLoad.pets) {
            d = this.props.pets.item;
            if (d !== undefined) {
                data = d.map(e => {
                    return {
                        ...e,
                    }
                })
            }
        }

        const historyPet = [{ id: 1, pet_name: 'aa', pet_gender: 'female', species: 'dog' }]

        return (
            this.props.isMobile ?
                <NewAppointmentMobile makeAppointment={this.props.makeAppointment} historyPet={data} messages={this.props.intl.messages} />
                : <NewAppointment makeAppointment={this.props.makeAppointment} historyPet={data} messages={this.props.intl.messages} />
        );
    }
}

const mapState = state => ({
    myContent: state.my.myContent,
    lang: state.language,
    pets: state.usersApi.pets,
    firstLoad: state.usersApi.firstLoad
});

const mapDispatch = dispatch => ({
    switchMyContent: dispatch.my.switchMyContent,
    langChange: dispatch.language.langChange,
    makeAppointment: dispatch.usersApi.makeAppointment,
    getPets: dispatch.usersApi.getPets,
});


export default injectIntl(connect(mapState, mapDispatch)(NewAppointmentContainer));