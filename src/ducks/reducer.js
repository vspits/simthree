const initialState = {
    id: 0,
    username: '',
    profile_pic: ''
}


// // // // // CONSTANTS // // // // //

const UPDATE_USER = 'UPDATE_USER'


// // // // // ACTION BUILDERS // // // // //

export function updateUser(userObj){
    return {
        type: UPDATE_USER,
        payload: userObj
    }
}


// // // // // REDUCER SWITCH FUNCTION // // // // //

export default function reducer(state = initialState, action){
    const { type, payload } = action
    switch(type){
        case UPDATE_USER:
            const { id, username, profile_pic } = payload
            return { ...state, id, username, profile_pic }
        default:
            return state
    }
}
