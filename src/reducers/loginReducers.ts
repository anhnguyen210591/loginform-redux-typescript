import { LoginActionTypes } from "../types/action"
import { LoginStatus } from "../types/LoginStatus"
import { combineReducers } from 'redux'

const initState:LoginStatus = {isLoginPending : false,isLoginSuccess : false,isLoginError : null};


const loginOfReducers = (state=initState,action:LoginActionTypes):LoginStatus => {
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

const initUserInfoState:any={};
const setUserInfoReducers=(state=initUserInfoState,action:LoginActionTypes):any=>{
    switch(action.type){
        case 'SET_USER_INFO':
            return{
                ...state,
                data:action.data
            }
        default:
            return state
    }
}

const loginReducers = combineReducers({
    loginOfReducers : loginOfReducers,
    setUserInfoReducers : setUserInfoReducers
})

export default loginReducers
