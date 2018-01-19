import React from 'react';
import { connect } from 'react-redux';
import { } from 'STORE/actions.js';

export class Login extends React.Component {
    constructor(props) {
        super();

        this.state = { }
    }


    render() {
        return (
            <div>
                Login
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    user: state.user,
    app: state.app,
});

export default connect(mapStateToProps, {})(Login);