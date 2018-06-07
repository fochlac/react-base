export const logout = () => {
    return {
        type: 'LOGOUT',   
    }
}

export const login = () => {
    return {
        type: 'LOGIN'
    }
}

export const set_address = (name, address, phone) => {
    return {
        type: 'SET_ADDRESS',
        name,
        address,
        phone
    }
}

export const addAddress = () => {
    return {
        type: 'ADD_ADDRESS',
    }
}

export const addComment = (comment) => {
    return {
        type: 'ADD_COMMENT',
        comment,
        generateID: true
    }
}

export const setFilter = (filter, sort) => {
    return {
        type: 'SET_FILTERSTRING',
        filter,
        sort
    }
}

export const showErrorMessage = (text) => {
    return {
        type: 'ERROR_MESSAGE',
        text
    }
}

export const deleteComment = (comment) => {
    return {
        type: 'DELETE_COMMENT',
        comment
    }
}