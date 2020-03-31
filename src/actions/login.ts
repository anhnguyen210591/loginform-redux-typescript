import { LoginActionTypes } from "../types/action"
import { Dispatch } from "redux"
import {Authen} from '../types/Authen'

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

export function logout(){
    return (dispatch:Dispatch<LoginActionTypes>) =>{
        dispatch(setLoginSuccess(false))
    }
}

export function login(
    email:Authen["email"],
    password:Authen["password"]
    ){
    return (dispatch:Dispatch<LoginActionTypes>) => {
        sendLoginRequest(email,password)
    .then(success => {
        dispatch(setLoginPending(false));
        dispatch(setLoginSuccess(true));
    })
    .catch(err=>{
    
        dispatch(setLoginPending(false));
        dispatch(setLoginError(err))
    })
    }
}

function sendLoginRequest(email:Authen["email"],password:Authen["password"]){
    return new Promise((resolve,reject) => {
        fetch("http://localhost:9000/user/authen",{
            method:'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body : JSON.stringify({email,password})
        })
        .then(function(reponse){
            if (!reponse.ok) { throw reponse }
            return resolve(reponse.json());
        })    
        .catch(async function(err) {
            const error = await err.json();
            console.log(error)
            return reject(error.Message);
        })
    });
}

