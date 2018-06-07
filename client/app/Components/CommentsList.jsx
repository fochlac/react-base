import React from "react";
import { addComment } from "STORE/actions.js";
import { connect } from "react-redux";
import Comment from "./Comment";
class CommentsList extends React.Component {
  constructor(props) {
    super();

    this.state = {
      commentText: ""
    };
  }


  onClick(contactId){
    this.props.addComment({
                text: this.state.commentText,
                date: (new Date()).toString(),
                userId: 1,
                userName: "Superuser",
                contactId: contactId 
              });
    this.state.commentText = ""
  }

  render() {
    const { comments, contactId } = this.props;
    const arrComments = Object.values(comments);
    return (
      <ul className="commentsList">
        {arrComments.map(comment => {
          return (
            <li key={comment.id}>
              <Comment commentData={comment} />
              
            </li>
          );
        })}

        <div className="addComment">
          <input
            type="text"
            value = {this.state.commentText}
            onChange={evt => this.setState({ commentText: evt.target.value })}
          />
          <button
            onClick={() =>{this.onClick(contactId )}}
          >
            add comment
          </button>
        </div>
      </ul>
    );
  }
}

const mapStoreToProps = (store, ownProps) => {
  return {
    comments: ownProps.comments.map(commentId => store.comments[commentId])
  };
};

export default connect(mapStoreToProps, { addComment })(CommentsList);
