import { deleteFromArray } from 'UTIL/array.js';

const users = (users = {}, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            if (action.apiState === 'completed') {
                var user = Object.assign({}, users[action.data.user]);

                user.comments.push(action.data.id);

                return {...users, [user.id]: user};
            }
            return users;
        case 'DELETE_COMMENT':
            var user = Object.assign({}, users[action.comment.post]);

            deleteFromArray(user.comments, action.comment.id);

            return {...users, [user.id]: user};
        default:
            return users;
    }
}

export default users;