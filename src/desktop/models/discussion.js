import { request, authRequest, authRequestE } from '../utils/requests'
import { getCookie, setCookie } from '../utils/cookies'
import history from '../routes/history'
import { message } from 'antd'
import Operation from 'antd/lib/transfer/operation'
export default {
    state: {

    },
    reducers: {

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

        }