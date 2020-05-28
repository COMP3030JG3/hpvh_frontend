import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import Home from '../pages/Home';
import Signup from '../pages/users/Signup';
import Login from '../pages/users/Login';
import { getCookie, setCookie } from '../utils/cookies'
import { authRequest } from '../utils/requests'
import ELogin from '../pages/admin/Login';
import My from '../pages/users/My';
import history from './history';

import DashBoard from '../pages/admin/DashBoard';
import Discussion from '../pages/Discussion';




class AppRouter extends React.Component {

    constructor(props) {
        super(props);
        this.props.getUserInfo();
        this.props.getAdminInfo();

    }



    render() {

        const fakeAuth = {}
        const PrivateRoute = ({ children, ...rest }) => {
            let isLogin = this.props.loginInfo
                ? this.props.loginInfo
                : sessionStorage.getItem("userinfo")
                    ? sessionStorage.getItem("userinfo")
                    : "";

            return (
                <Route
                    {...rest}
                    render={({ location }) =>
                        isLogin ? (
                            children
                        ) : (
                                <Redirect
                                    to={{
                                        pathname: "/login",
                                        state: { from: location }
                                    }}
                                />
                            )
                    }
                />
            );
        }
        const EPrivateRoute = ({ children, ...rest }) => {
            let isLogin = this.props.eloginInfo
                ? this.props.eloginInfo
                : sessionStorage.getItem("AdminInfo")
                    ? sessionStorage.getItem("AdminInfo")
                    : "";

            return (
                <Route
                    {...rest}
                    render={({ location }) =>
                        isLogin ? (
                            children
                        ) : (
                                <Redirect
                                    to={{
                                        pathname: "/elogin",
                                        state: { from: location }
                                    }}
                                />
                            )
                    }
                />
            );
        }
        return (

            <Router history={history}>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/elogin" component={ELogin} />
                    <Route exact path="/signup" component={Signup} />
                    <PrivateRoute exact path="/my" ><My history={history} /></PrivateRoute>
                    <EPrivateRoute exact path="/dashboard" ><DashBoard /></EPrivateRoute>
                    <Route exact path="/discussion" history={history} component={Discussion} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>

        );
    }
}

const mapState = (state) => ({
    loginInfo: state.validation.loginInfo,
    eloginInfo: state.validation.eloginInfo

})

const mapDispatch = dispatch => ({
    getUserInfo: dispatch.validation.getUserInfo,
    getAdminInfo: dispatch.validation.getAdminInfo
});

export default connect(mapState, mapDispatch)(AppRouter);