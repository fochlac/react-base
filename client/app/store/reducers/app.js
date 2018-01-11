const app = (state = {}, action) => {
    switch (action.type) {
      case 'SET_NAME':
          return Object.assign({}, state, {step: action.step});
      case 'SET_AGE':
          return Object.assign({}, state, {step: action.step});
        default:
            return state;
    }
}

export default app;
