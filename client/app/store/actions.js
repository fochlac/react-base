export const logout = () => {
    return {
        type: 'LOGOUT',   
    }
}

export const login = ({age, name}) => {
    return {
        type: 'LOGIN',
        age,
        name
    }
}

export const set_address = (address) => {
    return {
        type: 'SET_ADDRESS',
        address
    }
}