import { request, authRequest } from '../utils/requests'
import { getCookie, setCookie } from '../utils/cookies'
import history from '../routes/history'
import { message } from 'antd'
import { store } from '../config/store'
import validation from './validation'
export default {
    state: {
        loginInfo: {},
        appointments: {},
        operations: {},
        pets: {},
        firstLoad: {
            appointments: true,
            operations: true,
            pets: true
        }
    },
    reducers: {
        getAppointmentReducer(state, key) {
            return { ...state, appointments: key };
        },
        getOperationReducer(state, key) {
            return { ...state, operations: key };
        },
        getPetReducer(state, key) {
            return { ...state, pets: key };
        },
        firstLoadReducer(state, key) {
            return { ...state, firstLoad: { ...state.firstLoad, ...key } };
        },

    },
    effects: {
        async register(data, rootState) {
            request.post('/customer/register', data).then(res => {
                if (res.data.code === 4103) {
                    message.error(res.data.error);
                } else {
                    history.push('/login');
                    history.go();
                }
            })
        },
        async getAppointments({ index, ...data }, rootState) {
            this.firstLoadReducer({ appointments: true })
            authRequest.get('/customer/appointment/' + index, {
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
            authRequest.get('/customer/operation/' + index, {
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
        async getPets({ index, ...data }, rootState) {
            this.firstLoadReducer({ pets: true })
            authRequest.get('/customer/pet/' + index, {
                params: {
                    ...data
                }
            }).then(res => {
                if (res.data.code === 200) {
                    this.getPetReducer(res.data.data);
                } else {
                    this.getPetReducer({});
                }

                this.firstLoadReducer({ pets: false })
            }).catch(() => {

                message.error('you are not login')
            })
        },
        async makeAppointment(data, rootState) {
            authRequest.post('/customer/appointment/create', data).then(res => {
                if (res.data.code === 201) {
                    message.success('success make appointment')
                    this.getAppointments({ index: 1 });
                } else {
                    message.error(res.data.error)
                }

            }).catch(() => {
                message.error('fail to make appointment')
            })
        },
        async changePassword(data, rootState) {
            authRequest.post('/customer/password/modify', data).then(res => {
                message.success('success change password')

            }).catch(() => {
                message.error('fail to change password')
            })
        },
        async changeInfo(data, rootState) {
            authRequest.post('/customer/profile/modify', data).then(res => {
                message.success('success change info');
                store.dispatch.validation.getUserInfo()
            }).catch(() => {
                message.error('fail to change info')
            })
        },
    }
}