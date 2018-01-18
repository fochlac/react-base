import React from 'react';
import { connect } from 'react-redux';
import { logout_user } from 'STORE/actions.js';
import UserImage from 'COMP/UserImage.jsx';

import './Topbar.less';

export class Topbar extends React.Component {
    constructor(props) {
        super();

        this.state = { }
    }

    render() {
        return (
            <div className="topbar">
                <UserImage/>
                <span>Tweeter</span>
                <span><i className="fa fa-cog" aria-hidden="true"></i> <a href="#" className="fa fa-sign-out" onClick={this.props.logout_user} ></a></span>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    user: state.user,
    app: state.app,
});

export default connect(mapStateToProps, { logout_user })(Topbar);
