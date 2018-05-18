import React from 'react';
import { connect } from 'react-redux';

class Comment extends React.Component {
    render() {
        const{comments} = this.props
        const arrComments = Object.values(comments)
        return(
            <div className="comment">
                <ul>
                    <li>commentData.userName</li>
                    <li>commentData.text</li>
                    <li>commentData.date</li>                     
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