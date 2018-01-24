import { deleteFromArray } from 'UTIL/array.js';

const posts = (posts = {}, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            var post = Object.assign({}, posts[action.comment.post]);

            post.comments.push(action.id);

            return {...posts, [post.id]: post};
        case 'DELETE_COMMENT':
            var post = Object.assign({}, posts[action.comment.post]);

            deleteFromArray(post.comments, action.comment.id);

            return {...posts, [post.id]: post};
        default:
            return posts;
    }
}

export default posts;