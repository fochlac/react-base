import { deleteFromArray } from 'UTIL/array.js';

const posts = (posts = {}, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            if (action.apiState === 'completed') {
                var post = Object.assign({}, posts[action.data.post]);

                post.comments.push(action.data.id);

                return {...posts, [post.id]: post};
            }
            return posts;
        case 'DELETE_COMMENT':
            var post = Object.assign({}, posts[action.comment.post]);

            deleteFromArray(post.comments, action.comment.id);

            return {...posts, [post.id]: post};
        default:
            return posts;
    }
}

export default posts;