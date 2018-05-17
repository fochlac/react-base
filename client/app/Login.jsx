import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super();

        this.state = {
            username: props.currentUser || '',
            age: props.currentAge || ''
        }
    }

    render() {
        const {username, age} = this.state

        return(
            <div className="login">
                <input type="text" value={username} onChange={(evt) => this.setState({username: evt.target.value})}/> <br/>
                <input type="text" value={age} onChange={(evt) => this.setState({age: evt.target.value})} />
                <button onClick={() => this.props.onLogin(username, age)}>Submit</button>
            </div>
        )
    }
}
