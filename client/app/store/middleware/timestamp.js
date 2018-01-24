export const timestamp = store => next => action => {
    action.date = Date.now();
    next(action);
}