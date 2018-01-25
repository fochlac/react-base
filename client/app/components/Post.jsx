import React from 'react';
import { connect } from 'react-redux';
import { } from 'STORE/actions.js';
import Comment from 'COMP/Comment.jsx';
import CommentInput from 'COMP/CommentInput.jsx';

import './Post.less';

export class Post extends React.Component {
    constructor(props) {
        super();

        this.state = { }
    }

    render() {
        const { post, submittingComment } = this.props;

        return (
            <div className="post-wrapper">
              <div className="post-item">
                <h2>{post.title}</h2>
                <p>{post.text}</p>
              </div>
              { post.comments.map(id => <Comment id={id} key={id}/>) }
              <CommentInput post_id={post.id} />
              { submittingComment ? <div>
                  <span className="fa fa-lg fa-spin fa-cog"></span>
              </div> : null}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    post: state.posts[ownProps.id],
    submittingComment: state.app.submittingComment,
});

export default connect(mapStateToProps, {})(Post);
