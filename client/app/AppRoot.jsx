import React from 'react';
import { connect } from 'react-redux';
import {
      BrowserRouter as Router,
      Route,
      Redirect,
      Switch
    } from 'react-router-dom';

import 'APP/BaseStyle.less';
import Dashboard from 'VIEWS/Dashboard.jsx';
import Login from 'VIEWS/Login.jsx';
import { initServiceWorker } from 'UTIL/serviceWorker.js';

export class AppRoot extends React.Component {
    constructor(props) {
        super();

        this.state = { }
    }

    render() {
        console.log(this.props.app)

        return (<Router>
            <Switch>
                { 
                  !this.props.app.login && <Route path="/" exact render={() => <Login />} />
                }
                <Route path="/" exact render={() => <Dashboard />} />
                <Redirect to="/" />
            </Switch>
        </Router>);
    }
}

const mapStateToProps = (state, ownProps) => ({
    app: state.app,
});

export default connect(mapStateToProps, {})(AppRoot);
