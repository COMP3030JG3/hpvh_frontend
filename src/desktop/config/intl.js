import en_US from '../utils/locales/en-US.json';
import zh_CN from '../utils/locales/zh-CN.json';

import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';

import { defineMessages } from 'react-intl'
export const language = {
    en: {
        lang: 'en',
        intl: defineMessages(en_US),
        antd: enUS
    },
    zh: {
        lang: 'zh',
        intl: defineMessages(zh_CN),
        antd: zhCN
    },

};