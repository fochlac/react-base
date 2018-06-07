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
        case 'LOGIN':  
        	return{
        		...app,
        		isLogged: true,
        		showErrorMessage: false
        	}
        case 'LOGOUT':
        	return{
        		...app,
        		isLogged: false
        	}
    	case 'ERROR_MESSAGE':
    	return{
    		...app,
    		showErrorMessage: true,
    		text: action.text
    	}
		default:
		 return app;
	}
}