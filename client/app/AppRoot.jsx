import React from 'react';
import {
      BrowserRouter as Router,
      Route,
      Redirect,
      Switch
    } from 'react-router-dom';

import 'APP/BaseStyle.less';
import HelloWorld from 'VIEW/HelloWorld.jsx';
import GoodbyeWorld from 'VIEW/GoodbyeWorld.jsx';
// import { initServiceWorker } from 'UTIL/serviceWorker.js';

export default class App extends React.Component {
    constructor(props) {
        super();

        this.state = { }
    }

    componentWillMount() {}
    componentDidMount() {
        // initServiceWorker();
    }
    componentWillUnmount() {}

    componentWillReceiveProps() {}
    shouldComponentUpdate() {}
    componentWillUpdate() {}
    componentDidUpdate() {}

    render() {
        return (<Router>
            <Switch>
                <Route path="/bye" render={() => <GoodbyeWorld />} />
                <Route path="/" exact render={() => <HelloWorld />} />
                <Redirect to="/" />
            </Switch>
        </Router>);
    }
}
