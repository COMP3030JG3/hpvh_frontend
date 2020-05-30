import React from "react";
import Appointments from "./Appointments"
import AppointmentsMobile from "./Appointments_mobile"
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import fomatDate from '../../../../utils/formatDate'



class AppointmentsContainer extends React.Component {



    componentDidMount() {
        if (this.props.firstLoad.appointments) {
            this.props.getAppointments({ index: 1 });
        }
    }


    render() {

        let d
        let data = null;
        let page = {};
        if (!this.props.firstLoad.appointments) {
            d = this.props.appointments.item;
            if (d !== undefined) {
                data = d.map(e => {
                    return {
                        ...e,
                        key: e.app_primary_key,
                        appointment_date: fomatDate(new Date(e.appointment_date * 1000), 'yyyy-MM-dd'),
                        date: fomatDate(new Date(Math.round(e.date) * 1000), 'yyyy-MM-dd'),
                        needOperation: e.needOperation ? 'yes' : (e.appointment_status === 'processing' ? ' ' : 'no')
                    }
                })
            }

            let { item, ...p } = this.props.appointments
            page = p
        }
        const onPageChange = (e) => {
            this.props.getAppointments(e);
        }
        const onSearch = (v) => {
            this.props.getAppointments(v);
        }

        return (
            this.props.isMobile ? <AppointmentsMobile messages={this.props.intl.messages} onSearch={onSearch} data={data} page={page} onPageChange={onPageChange} />
                : <Appointments messages={this.props.intl.messages} onSearch={onSearch} data={data} page={page} onPageChange={onPageChange} />

        );
    }
}

const mapState = state => ({
    appointments: state.usersApi.appointments,
    firstLoad: state.usersApi.firstLoad
});

const mapDispatch = dispatch => ({
    firstLoadReducer: dispatch.usersApi.firstLoadReducer,
    getAppointments: dispatch.usersApi.getAppointments,
});

export default injectIntl(connect(mapState, mapDispatch)(AppointmentsContainer));