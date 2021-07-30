const INITIAL_STATE = {
    currentUser: null,
    accessToken: null,
    currentLocation: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'SET_USER':
            return {...state, currentUser: action.payload}
        case 'SET_ACCESS_TOKEN':
            return {...state, accessToken: action.payload}
        case 'SET_LOCATION':
            return {...state, currentLocation: action.payload}
        default:
            return state;
    }
}

export default userReducer;