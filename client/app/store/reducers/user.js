const user = (state = {}, action) => {
    switch (action.type) {
        case 'SET_NAME':
	        if (action.status === "completed") {
	        	let newUser = Object.assign({}, state[action.id], {name: action.name})
	            return Object.assign({}, state, {[action.id]: newUser});
	        }
	        return state;

        default:
            return state;
    }
}

export default user;