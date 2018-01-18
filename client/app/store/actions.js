export const add_comment = (comment) => ({
  type: 'ADD_COMMENT',
  comment,
  comment_id: Date.now()

export const logout_user = () => ({
  type: 'LOGOUT_USER'
});