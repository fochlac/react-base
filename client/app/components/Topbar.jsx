import React from 'react';
import { connect } from 'react-redux';
import { logout_user } from 'STORE/actions.js';
import UserImage from 'COMP/UserImage.jsx';

export class Topbar extends React.Component {
    constructor(props) {
        super();

        this.state = { }
    }

    render() {
        return (
            <div>
                <UserImage/>
                <span>Tweeter</span>
                <span><i className="fa fa-cog" aria-hidden="true"></i> <a href="#" onClick={this.props.logout_user} ><i className="fa fa-sign-out" aria-hidden="true"></i></a></span>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    user: state.user,
    app: state.app,
});

export default connect(mapStateToProps, { logout_user })(Topbar);