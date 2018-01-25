import React from 'react';
import { connect } from 'react-redux';
import { delete_comment, update_comment } from 'STORE/actions.js';
import './Comment.less';
import { formatDateTime } from 'UTIL/date.js';
import { setter } from 'UTIL/inputSetter.js';
import { parseLineBreaks } from 'UTIL/text.js';

export class Comment extends React.Component {
    constructor(props) {
        super();

        this.state = { editMode: false };

        this.set = setter(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.editMode !== nextState.editMode ? true : false;
    }

    deleteComment (){
        this.props.delete_comment(this.props.comment);
    }

    toggleEditMode (){
        const {comment} = this.props;
        this.setState({editMode: !this.state.editMode});
        if (this.state.text !== undefined && this.state.text !== comment.text) {
            this.props.update_comment({...comment, text: this.state.text});
        }
    }

    render() {
        const {comment, users} = this.props;

        return (
            <div className="comment-row">
                <div className="comment-wrapper">
                    <h3 className="comment-headline">
                        <span className="fa fa-comments-o"></span>
                        <span className="comment-headline-user">{users[comment.user].name}</span>
                    </h3>

                    {this.state.editMode ? <div className="tools-no-padding"><textarea className="comment-edit-input" defaultValue={comment.text} onChange={this.set({field: 'text'})}/></div> : <div>{parseLineBreaks(comment.text)}</div>}

                    {comment.user === this.props.user.id ? <div className="comment-footer"><span className={this.state.editMode ? "fa fa-check" : " fa fa-pencil"} onClick={this.toggleEditMode.bind(this)} /><span className="fa fa-trash" onClick={this.deleteComment.bind(this)} /></div> : ''}
                </div>
                <div className="comment-timeline">
                    <span className="comment-timeline-date">{formatDateTime(comment.date)}</span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    comment: state.comments[ownProps.id],
    users: state.users,
    user: state.user
});

export default connect(mapStateToProps, { delete_comment, update_comment })(Comment);
