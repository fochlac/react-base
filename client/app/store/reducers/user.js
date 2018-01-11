const user = (state = {}, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return Object.assign({}, state, {name: action.name});

        case 'SET_AGE':
            return Object.assign({}, state, {age: action.age});

        case 'SET_USER_DATA':
            return Object.assign({}, state, action.userData);

        default:
            return state;
    }
}

export default user;