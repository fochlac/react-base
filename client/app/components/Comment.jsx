import React from 'react';
import { connect } from 'react-redux';
import { } from 'STORE/actions.js';

export class Comment extends React.Component {
    constructor(props) {
        super();

        this.state = { }
    }


    render() {
        const {comment} = this.props;

        return (
            <div className="comment-wrapper">
                {comment.text}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    comment: state.comments[ownProps.id],
});

export default connect(mapStateToProps, {})(Comment);