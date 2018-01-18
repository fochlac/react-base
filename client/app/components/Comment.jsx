import React from 'react';
import { connect } from 'react-redux';
import { } from 'STORE/actions.js';
import './Comment.less';

export class Comment extends React.Component {
    constructor(props) {
        super();

        this.state = { }
    }


    render() {
        const {comment} = this.props;

        return (
            <div className="comment-wrapper">
                <h3 className="comment-headline">{this.props.users[comment.user].name}</h3>
                <p>{comment.text}</p>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    comment: state.comments[ownProps.id],
    users: state.users
});

export default connect(mapStateToProps, {})(Comment);
