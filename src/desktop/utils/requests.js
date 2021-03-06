import axios from 'axios';

import { getCookie, setCookie } from './cookies'
export const request = axios.create({
    baseURL: '/api'
});

export const authRequest = axios.create({
    baseURL: '/api',
    headers: { "Authorization": `Bearer ${getCookie("user_token")}` }
});
export const authRequestE = axios.create({
    baseURL: '/api',
    headers: { "Authorization": `Bearer ${getCookie("admin_token")}` }
});