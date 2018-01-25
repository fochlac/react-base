let id = 100;

export const actionId = store => next => action => {
    if (!action.id) {
    	action.id = id++;
    }
    next(action);
}