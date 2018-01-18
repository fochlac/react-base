const users = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            var user = Object.assign({}, state[action.comment.user]);

            user.comments.push(action.comment_id);

            return Object.assign({}, state, {[user.id]: user});

        default:
            return state;
    }
}

export default users;