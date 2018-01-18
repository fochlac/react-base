import React from 'react';
import { connect } from 'react-redux';
import { } from 'STORE/actions.js';

export class Topbar extends React.Component {
    constructor(props) {
        super();

        this.state = { }
    }


    render() {
        return (
            <div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    user: state.user,
    app: state.app,
});

export default connect(mapStateToProps, {})(Topbar);