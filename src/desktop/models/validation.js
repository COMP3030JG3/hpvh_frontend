import { request, authRequest, authRequestE } from '../utils/requests'
import { getCookie, setCookie } from '../utils/cookies'
import history from '../routes/history'
import { message } from 'antd'
import Operation from 'antd/lib/transfer/operation'
export default {
    state: {
        loginInfo: {},
    },
    reducers: {
        loginReducer(state, loginInfo) {
            return { ...state, loginInfo };
        },
        eloginReducer(state, eloginInfo) {
            return { ...state, eloginInfo };
        },
    },
    effects: {
        async login({ username, password, remember }, rootState) {
            let data = { "username": username, "password_hash": password };
            await request.post('/customer/login', data).then(res => {
                if (res.data.code === 4103) {
                    message.error(res.data.error);
                } else {
                    setCookie('user_token', res.data.token);
                    this.getUserInfo().then(() => {
                        history.push('/my');
                        history.go();
                    });

                }


            })
        }, async elogin({ username, password, remember }, rootState) {
            let data = { "username": username, "password_hash": password };

            await request.post('/employee/login', data).then(res => {
                if (res.data.code === 4103) {
                    message.error(res.data.error);
                } else {
                    setCookie('admin_token', res.data.token);
                    this.getAdminInfo().then(() => {
                        history.push('/dashboard');
                        history.go();
                    });

                }


            })
        },
        async logout(payload, rootState) {
            await authRequest.get('/customer/logout').then(resu => {
                //console.log('res=>', resu.data);
                this.loginReducer({});
            })
        },
        async getUserInfo(payload, rootState) {
            let data;
            await authRequest.get('/customer/profile').then(resg => {
                data = resg.data.data
                sessionStorage.setItem(
                    "UserInfo",
                    JSON.stringify(data)
                );
                this.loginReducer({ ...data, customer_image_path: data.customer_image_path + '?' + Math.random() });
            }).catch(resg => {

                sessionStorage.setItem(
                    "UserInfo",
                    ""
                );
            })
        },
        async getAdminInfo(payload, rootState) {
            let data;
            await authRequestE.get('/employee/profile').then(resg => {
                data = resg.data.data
                sessionStorage.setItem(
                    "AdminInfo",
                    JSON.stringify(data)
                );
                this.eloginReducer(data);
            }).catch(resg => {

                sessionStorage.setItem(
                    "AdminInfo",
                    ""
                );
            })
        },
        async eregister(data, rootState) {
            request.post('/employee/register', data).then(res => {
                if (res.data.code === 4103) {
                    message.error(res.data.error);
                } else {

                }
            })
        },

        async apost(data, rootState) {
            let d = {
                surgery_cost: 13,


            }

            authRequestE.post('/employee/operation/modify/1', d).then(res => {
                console.log(res.data)
                message.success(res.data.code);
            })
        },
        async aget(payload, rootState) {
            await authRequestE.get('/employee/1').then(resu => {
                console.log(resu.data)
                message.success(resu.data.code);
            })
        },

    }
}