export const add_comment = (comment) => ({
  type: 'ADD_COMMENT',
  api: {
  	url: '/api/comment',
  	method: 'post',
  	body: comment
  },
  apiState: 'initialized',
  comment
});
export const update_comment = (comment) => ({
  type: 'UPDATE_COMMENT',
  comment
});
export const delete_comment = (comment) => ({
  type: 'DELETE_COMMENT',
  comment
});
export const logout_user = () => ({
  type: 'LOGOUT_USER'
});