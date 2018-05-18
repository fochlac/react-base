export const user = (user = {}, action) => {
	switch(action.type) {
        case 'LOGIN':
            return {
                age: action.age,
                name: action.name,
                address:{}
            }
        case 'LOGOUT':
            return {
                name: '',
                age: '',
                address: {}
            }
		default:
		 return user;
	}
}