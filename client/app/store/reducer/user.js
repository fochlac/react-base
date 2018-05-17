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
        case 'SET_ADDRESS':
            return {
                ...user,
                address: action.address
            }
		default:
		 return user;
	}
}