import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super();

        this.state = {
            username: props.currentUser || ''
        }
    }


    render() {
        const { username } = this.state

        return (
            <div className="login">
               <input type="text" value={username} onChange={(evt) => this.setState({username: evt.target.value})}/>
               <button onClick={() => this.props.onLogin(username)}>Submit</button>
            </div>
        )
    }
}
