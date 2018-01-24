const app = (app = {}, action) => {
    switch (action.type) {
    	case 'LOGOUT_USER':
    		return Object.assign({}, app, {login: false});
        default:
            return app;
    }
}

export default app;