const signupReducers = (state={isSignUpPending : false,isSignUpSuccess : false,isSignUpError : null,},action) => {
    switch(action.type){
        case 'SIGNUP_PENDING':
            return {
                ...state,
                isSignUpPending : action.isSignUpPending
            }
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                isSignUpSuccess : action.isSignUpSuccess
            }
            case 'SIGNUP_ERROR':
                return {
                    ...state,
                    isSignUpError : action.isSignUpError
                }
        default:
            return state
    }
}

export default signupReducers
