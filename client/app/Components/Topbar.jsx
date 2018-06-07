import React from 'react';
import Login from './Login.jsx'
import { logout } from 'STORE/actions.js'
import { connect } from 'react-redux';

import 'APP/BaseStyle.less';

class Topbar extends React.Component {

    render() {

        return(
            <div className="topbar">
                {
                  this.props.app.isLogged
                  ? <div>
                      <button onClick={this.props.logout}>Logout</button>
                    </div>
                  : <Login/>

                }
            </div>
        )
    }
}

const mapStoreToProps = (store, ownProps) => {
    return {
        app: store.app
    }
}

export default connect(mapStoreToProps, { logout })(Topbar)