export const set_name = (name) => ({
  type: 'SET_NAME',
  name
});

export const delete_name = () => ({
  type: 'SET_NAME',
  name: undefined
});

export const set_age = (age) => ({
  type: 'SET_AGE',
  age
});

export const set_data = (data) => ({
  type: 'SET_USER_DATA',
  userData: data
});