export const app = (app = {}, action) => {
	switch(action.type) {
		case "ADD_ADDRESS":
			return {
	                addingAddress: true 
	            }
	  	case "SET_ADDRESS":
			return {
	                addingAddress: false 
	            }
		default:
		 return app;
	}
}