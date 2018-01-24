import React from 'react';
import { connect } from 'react-redux';
import { delete_comment } from 'STORE/actions.js';
import './Comment.less';
import { formatDateTime } from 'UTIL/date.js';

export class Comment extends React.Component {
    constructor(props) {
        super();

        this.state = { }
    }

    deleteComment (){
        this.props.delete_comment(this.props.comment);
    }

    render() {
        const {comment, users} = this.props;

        return (
            <div className="comment-wrapper">
                <h3 className="comment-headline">
                    <span className="comment-headline-user">{users[comment.user].name}</span>
                    <span className="comment-headline-date">{formatDateTime(comment.date)}</span>
                </h3>
                <p>{comment.text}</p>
                <div className="comment-footer">{comment.user === this.props.user.id ? <span className="fa fa-trash" onClick={this.deleteComment.bind(this)}></span> : ''}</div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    comment: state.comments[ownProps.id],
    users: state.users,
    user: state.user
});

export default connect(mapStateToProps, { delete_comment })(Comment);
