const INITIAL_STATE = {
    currentPosts: null
}

const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'SET_POSTS':
            return {...state, currentPosts: action.payload}
        default:
            return state;
    }
}

export default postReducer;