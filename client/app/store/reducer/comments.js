export const comments = ( comments = {}, action) => {
	switch(action.type) {
		case 'ADD_COMMENT':
		console.log(action)
			return {

				...comments,

				[action.generatedID]: {
					...action.comment,
					id: action.generatedID,
					userId: action.comment.contactId
					
				}
			}
		case 'DELETE_COMMENT':
			let newComments = {...comments};
			const ids = Object.keys(newComments)
			if (ids.includes(action.comment.id.toString())) {
				delete newComments[action.comment.id.toString()];

			}

			return{
				...comments,
				 newComments
			} 
				
			
		default:
		 return comments;
	}
}