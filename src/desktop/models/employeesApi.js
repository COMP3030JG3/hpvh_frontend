import { request, authRequest, authRequestE } from '../utils/requests'
import { getCookie, setCookie } from '../utils/cookies'
import history from '../routes/history'
import { message } from 'antd'
export default {
    state: {
        loginInfo: {},
        appointments: {},
        operations: {},
        employees: {},
        firstLoad: {
            appointments: true,
            operations: true,
            employees: true,
        }
    },
    reducers: {
        getAppointmentReducer(state, key) {
            return { ...state, appointments: key };
        },
        getOperationReducer(state, key) {
            return { ...state, operations: key };
        },
        getEmployeeReducer(state, key) {
            return { ...state, employees: key };
        },
        firstLoadReducer(state, key) {
            return { ...state, firstLoad: { ...state.firstLoad, ...key } };
        },


    },
    effects: {

        async getAppointments({ index, ...data }, rootState) {
            this.firstLoadReducer({ appointments: true })
            authRequestE.get('/employee/appointment/' + index, {
                params: {
                    ...data
                }
            }).then(res => {
                if (res.data.code === 200) {
                    this.getAppointmentReducer(res.data.data);
                } else {
                    this.getAppointmentReducer({});
                }


                this.firstLoadReducer({ appointments: false })
            }).catch(() => {

                message.error('you are not login')
            })
        },
        async getOperations({ index, ...data }, rootState) {
            this.firstLoadReducer({ operations: true })
            authRequestE.get('/employee/operation/' + index, {
                params: {
                    ...data
                }
            }).then(res => {
                if (res.data.code === 200) {
                    this.getOperationReducer(res.data.data);
                } else {
                    this.getOperationReducer({});
                }

                this.firstLoadReducer({ operations: false })
            }).catch(() => {

                message.error('you are not login')
            })
        },
        async completeAppointment({ id, ...data }, rootState) {
            if (data.needOperation) {
                let d = {
                    operation_plan: data.operation_plan,
                    surgery_begin_time: data.surgery_begin_time,
                    release_time: data.release_time,
                    pet_name: data.pet_name,
                    appointment_id: id
                }
                authRequestE.post('/employee/operation/create', d).then(res => {
                    let dd = {
                        appointment_status: 'completed',
                        needOperation: data.needOperation,
                        appointment_type: data.appointment_type,
                        diagnosis: data.diagnosis,
                    }
                    authRequestE.post('/employee/appointment/modify/' + id, dd).then(res => {

                        message.success('complete appointment')
                    }).catch(() => {
                        message.error('fail to make appointment')
                    })
                }).catch(() => {
                    message.error('fail to make appointment')
                })

            } else {
                let dd = {
                    appointment_status: 'completed',
                    needOperation: data.needOperation,
                    appointment_type: data.appointment_type,
                    diagnosis: data.diagnosis,
                }
                authRequestE.post('/employee/appointment/modify/' + id, dd).then(res => {

                    message.success('complete appointment')
                }).catch(() => {
                    message.error('fail to make appointment')
                })
            }

        },
        async completeOperation({ id, ...data }, rootState) {
            authRequestE.post('/employee/operation/modify/' + id, data).then(res => {
                message.success('success complete operation')
            }).catch(() => {
                message.error('fail to complete operation')
            })
        },
        async addEmployee(data, rootState) {
            authRequestE.post('/employee/add', data).then(res => {
                message.success('success add employee')
            }).catch(() => {
                message.error('fail to add employee')
            })
        },
        async modifyEmployee({ id, ...data }, rootState) {
            authRequestE.post('/employee/modify/' + id, data).then(res => {
                message.success('success modify employee')
            }).catch(() => {
                message.error('fail to modify employee')
            })
        },
        async getEmployees({ index, ...data }, rootState) {
            this.firstLoadReducer({ employees: true })
            authRequestE.get('/employee/' + index, {
                params: {
                    ...data
                }
            }).then(res => {
                if (res.data.code === 200) {
                    this.getEmployeeReducer(res.data.data);
                } else {
                    this.getEmployeeReducer({});
                }

                this.firstLoadReducer({ employees: false })
            }).catch(() => {

                message.error('you are not login')
            })
        },
    },
}
