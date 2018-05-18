export const comments = (comments = {}, action) => {
	switch(action.type) {
		case 'ADD_COMMENT':

			let id;

			const ids = Object.keys(comments)	
			for (let i = 0; i <= ids.length; i++) {
				console.log(i)
				if (!ids.includes(i.toString())) {
					console.log(i, ids)
					id = i;
				}
			}

			return {
				...comments,

				[id]: {
					id,
					...action.comment
				}
			}
		default:
		 return comments;
	}
}