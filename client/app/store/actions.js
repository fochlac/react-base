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
        text: comment.text,
        date: comment.date,
        userId: comment.userId,
        userName: comment.userName,
        contactId: comment.contactId
    }
}