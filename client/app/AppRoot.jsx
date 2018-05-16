import React from 'react';
import {connect} from 'react-redux';



import {logout} from 'STORE/actions.js';
import 'APP/BaseStyle.less';

import Topbar from './Topbar';

class App extends React.Component {
    constructor(props) {
        super();

        this.state = {
            currentPage: 'Home',
            currentUser: 'test'
        }

        this.onLogin = this.onLogin.bind(this)
    }


    onLogin(name) {
        this.setState({
            currentUser: name
        })
    }

    render() {
        const {currentUser, currentPage} = this.state

        return (
            <div className="body">
                <Topbar currentPage={currentPage} currentUser={currentUser} onLogin={this.onLogin} />

                {currentUser && <button onClick={this.props.logout}>Logout</button>}
            </div>
        )
    }
}


const mapStoreToProps = (store, ownProps) => {
    return {
        currentUser: store.app.currentUser,
        currentPage: store.app.currentPage
    }
}


export default connect(mapStoreToProps, { logout })(App)
