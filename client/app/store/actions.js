export const set_name = (name) => ({
  type: 'SET_NAME',
  id: 1,
  status: 'initialized',
  name
});

export const delete_name = () => ({
  type: 'SET_NAME',
  name: undefined
});