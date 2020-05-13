import { request, authRequest, authRequestE } from '../utils/requests'
import { getCookie, setCookie } from '../utils/cookies'
import history from '../routes/history'
import { message } from 'antd'
export default {
    state: {
        loginInfo: {},
        appointments: {},
        operations: {},
        firstLoad: {
            appointments: true,
            operation: true,
        }
    },
    reducers: {
        getAppointmentReducer(state, key) {
            return { ...state, appointments: key };
        },
        getOperationReducer(state, key) {
            return { ...state, operations: key };
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
            authRequest.get('/customer/operation/' + index, {
                params: {
                    ...data
                }
            }).then(res => {

            }).catch(() => {
                message.error('you are not login')
            })
        },
        async completeAppointment({ id, data }, rootState) {
            if (data.needOperation) {

                await authRequest.post('/employee/operation/create', data).then(res => {

                }).catch(() => {
                    message.error('fail to make appointment')
                })


                authRequestE.post('/employee/appointment/modify/' + id, data).then(res => {

                    message.success('complete appointment')

                }).catch(() => {
                    message.error('fail to make appointment')
                })
            }

        },
        async createOperation({ id, data }, rootState) {

        },
    }
}