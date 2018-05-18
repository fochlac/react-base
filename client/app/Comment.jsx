import React from 'react';
import { connect } from 'react-redux';

class Comment extends React.Component {
    render() {
        const{commentData} = this.props
        return(
            <div className="comment">
                <ul className="commentBody">
                    <li className="userName">{commentData.userName}</li>
                    <li className="commentText">{commentData.text}</li>
                    <li className="date">{commentData.date}</li>                     
                </ul>
            </div>
        );
    }
}

const mapStoreToProps = (store, ownProps) => {
    return {
        commentData: ownProps.commentData
    }
}

export default connect(mapStoreToProps, {})(Comment)