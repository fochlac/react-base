const comments = (comments = {}, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            if (action.apiState === 'completed') {
                return {
                    ...comments,
                    [action.data.id]: {
                        ...action.data,
                        date: action.date
                    },
                };
            }
            return comments;
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