import React from 'react';
import { connect } from 'react-redux';

import 'APP/BaseStyle.less';
//import Topbar from './Topbar.jsx';
import Body from './Body.jsx';

class App extends React.Component {

    render() {

        return(
            <div className="body">
                <Body/>
                
            </div>
        )
    }
}

const mapStoreToProps = (store, ownProps) => {
    return {
        isLoggedIn: store.user.name.length && Number.isInteger(store.user.age)
    }
}

export default connect(mapStoreToProps, {})(App)