const app = (app = {}, action) => {
    switch (action.type) {
    	case 'LOGOUT_USER':
    		return Object.assign({}, app, {login: false});

        case 'ADD_COMMENT':
            if (action.apiState === 'initialized') {
                return Object.assign({}, app, {submittingComment: true});
            } else {
                return Object.assign({}, app, {submittingComment: false});
            }
        default:
            return app;
    }
}

export default app;