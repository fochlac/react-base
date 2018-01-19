import React from 'react';
import { connect } from 'react-redux';
import { } from 'STORE/actions.js';
import Post from 'COMP/Post.jsx';

export class Timeline extends React.Component {
    constructor(props) {
        super();

        this.state = { }
    }

    render() {
        return (
            <div>
                { Object.values(this.props.posts).map(post => <Post id={post.id} key={post.id}/>) }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    posts: state.posts,
    app: state.app,
});

export default connect(mapStateToProps, {})(Timeline);