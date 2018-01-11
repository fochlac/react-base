export const set_name = (name) => ({
  type: 'SET_NAME',
  name,
  step: 'TWO'
});

export const delete_name = () => ({
  type: 'SET_NAME',
  name: undefined
});

export const set_age = (age) => ({
  type: 'SET_AGE',
  age,
  step: 'THREE'
});

export const delete_age = () => ({
  type: 'SET_AGE',
  date: undefined
});
