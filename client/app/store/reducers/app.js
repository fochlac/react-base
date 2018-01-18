const app = (state = {}, action) => {
    switch (action.type) {
    	case 'LOGOUT_USER':
    		return Object.assign({}, state, {login: false});
        default:
            return state;
    }
}

export default app;