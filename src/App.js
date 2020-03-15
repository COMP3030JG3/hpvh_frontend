import React from 'react';

import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { ConfigProvider } from 'antd';

import { store } from './config/store';
import { language } from './config/intl'
import AppRouter from './routes/AppRouter';

const App = (props) => {
    return (
        <Provider store={store}>
            <IntlProvider locale={language.lang} message={language.intl}>
                <ConfigProvider locale={language.antd}>
                    <AppRouter />
                </ConfigProvider>
            </IntlProvider>
        </Provider>
    );
};

export default App;
