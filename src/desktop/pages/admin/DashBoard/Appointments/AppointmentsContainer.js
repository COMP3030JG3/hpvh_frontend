import React from "react";
import Appointments from "./Appointments"
import { connect } from 'react-redux';
import { Button } from 'antd'
import { injectIntl } from 'react-intl';
import fomatDate from '../../../../utils/formatDate'

const AppointmentsContainere = (props) => {

    const data = {}

    const post = () => {
        props.apost()
    }
    const get = () => {
        props.aget()
    }



    return (
        <div>
            <Appointments />
            <Button onClick={post}>post</Button>
            <Button onClick={get}>get</Button>
        </div>
    );
};

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
            this.props.getAppointments({ index: e.current });
        }
        const onComplete = (v) => {
            console.log(v)
            this.props.completeAppointment(v);
        }

        return (
            <Appointments messages={this.props.intl.messages} data={data} page={page} onComplete={onComplete} onPageChange={onPageChange} />
        );
    }
}

const mapState = state => ({
    appointments: state.employeesApi.appointments,
    firstLoad: state.employeesApi.firstLoad
});

const mapDispatch = dispatch => ({
    firstLoadReducer: dispatch.employeesApi.firstLoadReducer,
    getAppointments: dispatch.employeesApi.getAppointments,
    completeAppointment: dispatch.employeesApi.completeAppointment,
});

export default injectIntl(connect(mapState, mapDispatch)(AppointmentsContainer));