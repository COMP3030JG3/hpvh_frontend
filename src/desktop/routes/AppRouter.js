import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Home from '../pages/Home';
import Signup from '../pages/users/Signup';
import Login from '../pages/users/Login';
import My from '../pages/users/My';
import history from './history';

class AppRouter extends React.Component {

    render() {

        return (

            <Router history={history}>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/my" component={My} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>

        );
    }
}

export default AppRouter;