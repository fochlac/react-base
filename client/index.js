import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {
      BrowserRouter as Router,
      Route,
      Redirect,
      Switch
    } from 'react-router-dom';

import { store } from 'STORE/store.js';
import AppRoot from 'APP/AppRoot.jsx';
import Login from 'APP/COMPONENTS/Login.jsx';
import Address from 'APP/COMPONENTS/Address.jsx';
require("font-awesome-webpack");
/* require everything from static and subfolders that matches the regex */
require.context('./static/', true, /.*/);

/* inject React App into the html-dom */
ReactDOM.render(
    <Provider store={store}>
   		 <Router>
            <Switch>
                <Route path="/" exact render={() => <AppRoot />} />
                <Route path="/login" exact render={() => <Login />} />
                <Route path="/address" exact render={() => <Address />} />
            </Switch>
        </Router>
        
    </Provider>,
    document.getElementById('root')
);