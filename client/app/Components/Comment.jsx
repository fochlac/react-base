import React from 'react';
import { connect } from 'react-redux';
import {deleteComment} from 'STORE/actions.js'
import {CommentsList} from './CommentsList.jsx'

import ReactDOM from 'react-dom';

class Comment extends React.Component {

    render() {
        const{commentData} = this.props
        const{contact} = this.props
        return(
            <div className="comment">
                <ul className="commentBody">
                    <li className="userName">{commentData.userName}</li>
                    <li className="commentText">{commentData.text}</li>
                    <li className="date">{commentData.date}</li> 
                    <button onClick={() => {this.props.deleteComment(this.props.commentData)}} >X</button>         
                </ul>
            </div>
        );
    }
}

const mapStoreToProps = (store, ownProps) => {
    return {
        commentData: ownProps.commentData,
        contact: store.contacts
    }
}

export default connect(mapStoreToProps, {deleteComment})(Comment)