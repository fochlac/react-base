import React from "react";
//import { set_address } from 'STORE/actions.js';
import { connect } from "react-redux";
import Comment from './Comment'
class CommentsList extends React.Component {
  render() {
    const { comments } = this.props;
    const arrComments = Object.values(comments);
    return (
      <ul className="commentsList">
        {arrComments.map(comment => {
          <li>
            <Comment commentData={comment} />
          </li>
        })}
        <div className="addComment">
            <input type="text"/>
            <button onClick={}>add comment</button>
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

export default connect(mapStoreToProps, {})(CommentsList);
