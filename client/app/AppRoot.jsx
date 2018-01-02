import React from 'react';
import {
      BrowserRouter as Router,
      Route,
      Redirect,
      Switch
    } from 'react-router-dom';

import 'APP/BaseStyle.less';
import { initServiceWorker } from 'UTIL/serviceWorker.js';

export default class App extends React.Component {
    constructor(props) {
        super();

        this.state = { }
    }

    componentWillMount() {}
    componentDidMount() {
        initServiceWorker();
    }
    componentWillUnmount() {}

    componentWillReceiveProps() {}
    shouldComponentUpdate() {}
    componentWillUpdate() {}
    componentDidUpdate() {}

    render() {
        return (<Router>
            <Switch>
                <Route path="/" exact render={() => <div></div>} />
                <Redirect to="/" />
            </Switch>
        </Router>);
    }
}
