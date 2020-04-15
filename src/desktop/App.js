import React from 'react';

import { Provider, connect } from 'react-redux';
import { IntlProvider, injectIntl } from 'react-intl';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.less';
import { store } from './config/store';
import { language } from './config/intl'
import AppRouter from './routes/AppRouter';


const AppWithState = ({ lang }) => {
    const I18nApp = injectIntl(AppRouter);
    const showLang = lang === 'en' ? language.en : language.zh;
    return (
        <IntlProvider locale={showLang.lang} messages={showLang.intl}>
            <ConfigProvider locale={showLang.antd}>
                <I18nApp />
            </ConfigProvider>
        </IntlProvider>
    )
}

const mapState = state => ({
    lang: state.language,
});

const AppProvider = connect(mapState, null)(AppWithState)


const App = (props) => {

    return (
        <Provider store={store}>
            <AppProvider />
        </Provider>
    );
};

export default App;
