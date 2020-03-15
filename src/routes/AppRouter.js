import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Test from '../pages/desktop/Test';

const AppRouter = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Test />
                </Route>
            </Switch>
        </Router>
    );
};

export default AppRouter;