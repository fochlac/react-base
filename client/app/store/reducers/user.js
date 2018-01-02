const user = (state = {}, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return Object.assign({}, state, {name: action.name});

        default:
            return state;
    }
}

export default user;