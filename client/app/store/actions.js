export const add_comment = (comment) => ({
  type: 'ADD_COMMENT',
  comment
});
export const delete_comment = (comment) => ({
  type: 'DELETE_COMMENT',
  comment
});
export const logout_user = () => ({
  type: 'LOGOUT_USER'
});