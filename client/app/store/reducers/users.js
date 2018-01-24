import { deleteFromArray } from 'UTIL/array.js';

const users = (users = {}, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            var user = Object.assign({}, users[action.comment.user]);

            user.comments.push(action.id);

            return {...users, [user.id]: user};
        case 'DELETE_COMMENT':
            var user = Object.assign({}, users[action.comment.post]);

            deleteFromArray(user.comments, action.comment.id);

            return {...users, [user.id]: user};
        default:
            return users;
    }
}

export default users;