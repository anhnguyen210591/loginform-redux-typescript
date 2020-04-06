import { LoginActionTypes } from "../types/action"
import { LoginStatus } from "../types/LoginStatus"

const initState:LoginStatus = {isLoginPending : false,isLoginSuccess : false,isLoginError : null};


const loginReducers = (state=initState,action:LoginActionTypes):LoginStatus => {
    switch(action.type){
        case 'LOGIN_PENDING':
            return {
                ...state,
                isLoginPending : action.isLoginPending
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isLoginSuccess : action.isLoginSuccess
            }
            case 'LOGIN_ERROR':
                return {
                    ...state,
                    isLoginError : action.isLoginError
                }
        default:
            return state
    }
}


export default loginReducers
