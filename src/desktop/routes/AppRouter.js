import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import Home from '../pages/Home';
import Signup from '../pages/users/Signup';
import Login from '../pages/users/Login';
import My from '../pages/users/My';
import history from './history';
import { getCookie } from '../utils/cookies'
import DashBoard from '../pages/admin/DashBoard';
import Discussion from '../pages/Discussion';

class AppRouter extends React.Component {



    render() {
        const fakeAuth = {}
        console.log(this.props.isLogin)
        const PrivateRoute = ({ children, ...rest }) => {
            return (
                <Route
                    {...rest}
                    render={({ location }) =>
                        getCookie('token') ? (
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
        return (

            <Router history={history}>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <PrivateRoute exact path="/my" ><My /></PrivateRoute>
                    <Route exact path="/dashboard" component={DashBoard} />
                    <Route exact path="/discussion" history={history} component={Discussion} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>

        );
    }
}

const mapState = (state) => ({
    isLogin: state.validation.isLogin
})

const mapDispatch = dispatch => ({

});

export default connect(mapState, mapDispatch)(AppRouter);