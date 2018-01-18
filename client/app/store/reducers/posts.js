const posts = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            var post = Object.assign({}, state[action.comment.post]);

            post.comments.push(action.comment_id);

            return Object.assign({}, state, {[post.id]: post});

        default:
            return state;
    }
}

export default posts;