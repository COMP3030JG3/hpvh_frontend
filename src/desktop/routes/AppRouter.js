import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { MainHeader, MainFooter, MainContent } from '../components/Main';
import Home from '../pages/users/Home';
import About from '../pages/users/About';
import Help from '../pages/users/Help';
import SignIn from '../pages/users/SignIn';
import Login from '../pages/users/Login';
import history from './history';

class AppRouter extends React.Component {

    render() {
        const HomePage = ({ history }) => {
            console.log('history');
            return (
                <div>
                    <MainHeader history={history} />
                    <MainContent>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" exact component={About} />
                        <Route path="/help" exact component={Help} />
                    </MainContent>
                    <MainFooter />
                </div>
            );

        }

        return (
            <Layout>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signin" component={SignIn} />
                        <Route path="/" component={HomePage} />
                    </Switch>
                </Router>
            </Layout>
        );
    }
}

export default AppRouter;