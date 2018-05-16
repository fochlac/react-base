import React from 'react';
import Login from './Login.jsx';


export default class Topbar extends React.Component {
    constructor(props) {
        super();

        this.state = {
            currentUser: props.currentUser
        }
    }



    render() {



        return (
            <div className="topbar">
                <h3>{this.props.currentPage}</h3>

                {
                    this.props.currentUser ? <p>Hallo {this.props.currentUser}</p> : <Login onLogin={this.props.onLogin}/>
                }
            </div>
        )
    }
}
