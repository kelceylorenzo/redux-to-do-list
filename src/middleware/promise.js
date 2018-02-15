export default (store) => (next) => (action) => {
	//code goes here
	//checking if action will return a promise
	if (!action.payload || !action.payload.then) {
		return next(action);
	}
	//resolving promise
	action.payload.then((resp) => {
		const newAction = {
			...action,
			payload: resp
		};
		//need to re-dispatch action if its is modified in any way
		store.dispatch(newAction);
	});
};
