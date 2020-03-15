import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { MainHeader, MainFooter, MainContent } from '../components/desktop/Main';
import Home from '../pages/desktop/users/Home';
import About from '../pages/desktop/users/About';
import Help from '../pages/desktop/users/Help';
import history from './history';

const AppRouter = (props) => {
    return (
        <Layout>
            <Router history={history}>
                <MainHeader history={history} />
                <MainContent>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" exact component={About} />
                        <Route path="/help" exact component={Help} />
                    </Switch>
                </MainContent>
                <MainFooter />
            </Router>
        </Layout>
    );
};

export default AppRouter;