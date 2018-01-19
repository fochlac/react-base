import React from 'react';
import { connect } from 'react-redux';
import { } from 'STORE/actions.js';

export class UserImage extends React.Component {
    constructor(props) {
        super();

        this.state = { }
    }


    render() {
        const { user } = this.props;
        return (
            <span>
            { 
                user && user.image
                ? <img src={user.image}/> 
                : <i className="fa fa-user" aria-hidden="true"></i>
            }   
            </span>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    user: state.app.login ? state.users[state.user.id] : undefined
});

export default connect(mapStateToProps, {})(UserImage);