import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import { store } from 'STORE/store.js';
import AppRoot from 'APP/AppRoot.jsx';
require("font-awesome-webpack");
/* require everything from static and subfolders that matches the regex */
require.context('./static/', true, /.*/);

/* inject React App into the html-dom */
ReactDOM.render(
    <Provider store={store}>
        <AppRoot />
    </Provider>,
    document.getElementById('root')
);