const comments = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return Object.assign({}, state, {[action.comment_id]: action.comment});
        default:
            return state;
    }
}

export default comments;