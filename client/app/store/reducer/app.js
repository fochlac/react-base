export const app = (app = {}, action) => {
	switch(action.type) {
		case "ADD_ADDRESS":
			return {
				...app,
	                addingAddress: true 
	            }
	  	case "SET_ADDRESS":
			return {
				...app,
	                addingAddress: false 
	            }
	    case 'SET_FILTERSTRING':
        	
        	return{
        		...app,
        		filter: action.filter,
        		sort: 	action.sort
        	}
		default:
		 return app;
	}
}