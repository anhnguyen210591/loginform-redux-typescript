import { LoginActionTypes } from "../types/action"

const initState:any={};
const setUserInfoReducers=(state=initState,action:LoginActionTypes):any=>{
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


export default setUserInfoReducers