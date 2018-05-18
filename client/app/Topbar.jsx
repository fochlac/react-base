import React from 'react';
import Login from './Login.jsx'
import { logout } from 'STORE/actions.js'
import { connect } from 'react-redux';

import 'APP/BaseStyle.less';

class Topbar extends React.Component {

    render() {
        const {user, app, isLoggedIn} = this.props

        return(
            <div className="topbar">
                <h3>{app.currentPage}</h3>
                {
                  isLoggedIn
                  ? <div>
                      <p>Hallo {user.name}</p>
                      <p>Dein Alter ist: {user.age}</p>
                      <button onClick={() => this.props.logout()}>Logout</button>
                  </div>
                  : <Login onLogin={this.props.onLogin}/>

                }
            </div>
        )
    }
}

const mapStoreToProps = (store, ownProps) => {
    return {
        isLoggedIn: store.user.name.length && Number.isInteger(store.user.age),
        user: store.user,
        app: store.app
    }
}

export default connect(mapStoreToProps, { logout })(Topbar)