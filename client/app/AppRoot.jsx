import React from 'react';
import {
      BrowserRouter as Router,
      Route,
      Redirect,
      Switch
    } from 'react-router-dom';

import 'APP/BaseStyle.less';
import Dashboard from 'VIEWS/Dashboard.jsx';
import { initServiceWorker } from 'UTIL/serviceWorker.js';

export default class App extends React.Component {
    constructor(props) {
        super();

        this.state = { }
    }

    render() {
        return (<Router>
            <Switch>
                <Route path="/" exact render={() => <Dashboard />} />
                <Redirect to="/" />
            </Switch>
        </Router>);
    }
}
