export const api = store => next => action => {
    if (action.api && action.apiState !== 'completed' && action.apiState !== 'error') {
		let newAction = {...action};

    	fetch(action.api.url, {
    		headers: new Headers({
			    'Content-Type': 'application/json'
			}),
    		body: JSON.stringify(action.api.body),
    		method: action.api.method
    	})
		.then(res => res.json())
		.then(data => {
			newAction.data = data;
			newAction.apiState = 'completed';
			store.dispatch(newAction);
		})
		.catch(err => {
			newAction.apiState = 'error';
			store.dispatch(newAction);
		});
    }

   	next(action);
}

