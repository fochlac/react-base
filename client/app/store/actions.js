export const add_comment = (comment) => ({
  type: 'ADD_COMMENT',
  comment,
  comment_id: Date.now()
});