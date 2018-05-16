export const login = (user) => ({
	type: 'LOGIN_USER',
	api: {
		method: 'post',
		url: 'login/user',
		data: {
			name: user.name,
			pass: user.pass
		}
	},
	user: {
		...user,
		pass: undefined
	}

})