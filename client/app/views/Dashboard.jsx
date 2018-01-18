import React from 'react';
import { connect } from 'react-redux';
import { } from 'STORE/actions.js';
import Topbar from 'COMP/Topbar.jsx';
import PostInput from 'COMP/PostInput.jsx';
import Timeline from 'COMP/Timeline.jsx';

export class Dashboard extends React.Component {
    constructor(props) {
        super();

        this.state = { }
    }


    render() {
        return (
            <div>
                <Topbar />
                <PostInput />
                <Timeline />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    user: state.user,
    app: state.app,
});

export default connect(mapStateToProps, {})(Dashboard);