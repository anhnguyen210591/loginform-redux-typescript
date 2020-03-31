import { SignupActionTypes } from "../types/action"
import { Dispatch } from "redux"
import {UserInfo} from '../types/Userinfo'
export const setSignUpPending=(isSignUpPending:boolean):SignupActionTypes=>{
    return {
        type:'SIGNUP_PENDING',
        isSignUpPending
    }
}

export const setSignUpSuccess=(isSignUpSuccess:boolean):SignupActionTypes=>{
    return {
        type:'SIGNUP_SUCCESS',
        isSignUpSuccess
    }
}

export const setSignUpError=(isSignUpError:boolean):SignupActionTypes=>{
    return {
        type:'SIGNUP_ERROR',
        isSignUpError
    }
}

export function signup(
    email:UserInfo["email"],
    password:UserInfo["password"],
    firstname:UserInfo["firstname"],
    lastname:UserInfo["lastname"]
    ){
    return (dispatch:Dispatch<SignupActionTypes>) => {
        sendLoginRequest(email,password,firstname,lastname)
    .then(success => {
        dispatch(setSignUpPending(false));
        dispatch(setSignUpSuccess(true));
    })
    .catch(err=>{
        console.log('receive-error-message',err)
        dispatch(setSignUpPending(false));
        dispatch(setSignUpError(err))
    })
    }
}

function sendLoginRequest(
    email:UserInfo["email"],
    password:UserInfo["password"],
    firstname:UserInfo["firstname"],
    lastname:UserInfo["lastname"]
    ){
    return new Promise((resolve,reject) => {
        fetch("http://localhost:9000/user/",{
            method:'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body : JSON.stringify({email,password,firstname,lastname})
        })
        .then(function(reponse){
            if (!reponse.ok) { throw reponse }
            return resolve(reponse.json());
        })    
        .catch(async function(err) {
            const error = await err.json();
            console.log('signup-error',error)
            return reject(error.Message);
        })
    });
}

