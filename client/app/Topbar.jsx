import React from 'react';
import Login from './Login.jsx'

import 'APP/BaseStyle.less';

export default class Topbar extends React.Component {

    render() {
        return(
            <div className="topbar">
                <h3>{this.props.currentPage}</h3>
                {
                  this.props.currentUser
                  ? <div>
                      <p>Hallo {this.props.currentUser}</p>
                      <p>Dein Alter ist: {this.props.currentAge}</p>
                  </div>
                  : <Login onLogin={this.props.onLogin}/>

                }
            </div>
        )
    }
}
