const app = (app = {}, action) => {
    switch (action.type) {
        case 'LOGOUT_USER':
            return {
                ...app,
                currentUser: undefined
            }

    	case 'LOGIN_USER':
            return {
                ...app,
                currentUser: action.user
            }


        case bla:
            return app;



        default:
            return app;
    }
}

export default app;
