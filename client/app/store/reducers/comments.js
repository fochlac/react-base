const comments = (comments = {}, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return {
                ...comments,
                [action.id]: {
                    ...action.comment,
                    date: action.date,
                    id: action.id
                },
            };
        case 'UPDATE_COMMENT':
            return {
                ...comments,
                [action.comment.id]: action.comment
            };
        case 'DELETE_COMMENT':
            const updated_comments = Object.assign({}, comments);
            delete updated_comments[action.comment.id];
            return updated_comments;
        default:
            return comments;
    }
}

export default comments;