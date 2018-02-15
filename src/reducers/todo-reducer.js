import types from '../actions/types';

const DEFAULT_STATE = {
	all: [],
	single: {}
};

export default function(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case types.GET_ALL_TODOS:
			return {
				...state,
				all: action.payload.data.todos
			};
		case types.GET_ONE_ITEM:
			return {
				...state,
				single: action.payload.data.todo
			};
		case types.TOGGLE_COMPLETE:
			return {
				...state,
				single: action.payload.data.todo
			};
		default:
			return state;
	}
}
