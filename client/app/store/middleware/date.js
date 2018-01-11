export const dateMiddleware = {getState, dispatch} => next => action => {
    action.date = Date.now();

    if (action.status === "initialized") {
	    fetch('www.web.de')
	    .then(res => {
	    	let newAction = Object.assign({}, action);

	    	newAction.status = "completed";
	    	newAction.data = res;

	    	store.dispatch(newAction)
	    })
	    .catch((err) => {
	    	let newAction = Object.assign({}, action);

	    	newAction.status = "failure";
	    	newAction.err = err;

	    	store.dispatch(newAction)
	    })

    }
    next(action);
}

store = {
	dispatch: () => {}
	getState: () => {}
}