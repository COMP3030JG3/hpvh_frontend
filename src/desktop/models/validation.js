import { request, authRequest } from '../utils/requests'
import { getCookie, setCookie } from '../utils/cookies'
import history from '../routes/history'
export const validation = {
    state: {
        loginInfo: null,
    },
    reducers: {
        loginReducer(state, loginInfo) {
            return { ...state, loginInfo };
        },
    },
    effects: {
        async login({ username, password, remember }, rootState) {
            let data = { "username": username, "password_hash": password };
            console.log('res=>', rootState);
            request.post('/customer/login', data).then(res => {
                //console.log('res=>', res.data);
                this.loginReducer(res.data);
                setCookie('token', remember ? res.data.token : '');
                console.log(history)
                history.push('/my')
                history.go()
            })
        },
        async logout(payload, rootState) {
            authRequest.get('/customer/logout').then(resu => {
                //console.log('res=>', resu.data);
                this.loginReducer(false);
            })

        }
    }
}