import { LoginActionTypes } from "../types/action"
import { Dispatch } from "redux"
import {UserInfo} from "../types/Userinfo"
import axios from 'axios';


export const setLoginPending=(isLoginPending:boolean):LoginActionTypes=>{
    return {
        type:'LOGIN_PENDING',
        isLoginPending
    }
}

export const setLoginSuccess=(isLoginSuccess:boolean):LoginActionTypes=>{
    return {
        type:'LOGIN_SUCCESS',
        isLoginSuccess
    }
}

export const setLoginError=(isLoginError:string):LoginActionTypes=>{
    return {
        type:'LOGIN_ERROR',
        isLoginError
    }
}

export const setUserInfo=(data:any):LoginActionTypes=>{
    return{
        type:'SET_USER_INFO',
        data
    }
}

export function logout(){
    return (dispatch:Dispatch<LoginActionTypes>) =>{
        dispatch(setLoginSuccess(false))
    }
}

export function login(
    email:UserInfo["email"],
    password:UserInfo["password"]
    ){
    return (dispatch:Dispatch<LoginActionTypes>) => {
        sendLoginRequest(email,password)
    .then(success => {
        console.log("return success object",success);
        dispatch(setLoginPending(false));
        dispatch(setLoginSuccess(true));
        dispatch(setUserInfo(success));
    })
    .catch(err=>{
        dispatch(setLoginPending(false));
        dispatch(setLoginError(err))
    })
    }
}

function sendLoginRequest(email:UserInfo["email"],password:UserInfo["password"]){
    return new Promise((resolve,reject) => {
        axios({
            method:'post',
            url:'http://localhost:9000/user/authen',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                    },
            data:{
                email:email,
                password:password
            }
        })
        .then(function(response){
            return resolve(response.data);
            
        })    
        .catch(async function(err) {
            return reject(err.response.data.Message);
        })
    });
}