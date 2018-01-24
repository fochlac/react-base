export const api = store => next => action => {
    action.id = Date.now();
    next(action);
}