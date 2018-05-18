export const comments = (comments = {}, action) => {
	switch(action.type) {
		case 'ADD_COMMENT':
			return {
				...comments,

				[action.generatedID]: {
					id: action.generatedID,
					...action.comment
				}
			}
		default:
		 return comments;
	}
}