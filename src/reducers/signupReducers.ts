import {SignupStatus} from '../types/SignupStatus'
import { SignupActionTypes } from '../types/action';

const initState:SignupStatus = {isSignUpPending : false,isSignUpSuccess : false,isSignUpError : null};

const signupReducers = (state=initState,action:SignupActionTypes):SignupStatus => {
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
