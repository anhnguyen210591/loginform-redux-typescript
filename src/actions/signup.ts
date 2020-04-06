import { SignupActionTypes } from "../types/action"
import { Dispatch } from "redux"
import {UserInfo} from '../types/Userinfo'
import axios from 'axios';

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
        sendSignupRequest(email,password,firstname,lastname)
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

function sendSignupRequest(
    email:UserInfo["email"],
    password:UserInfo["password"],
    firstname:UserInfo["firstname"],
    lastname:UserInfo["lastname"]
    ){
    return new Promise((resolve,reject) => {
        axios({
            method:'post',
            url:'http://localhost:9000/user/',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                    },
            data:{
                email:email,
                password:password,
                firstname:firstname,
                lastname:lastname
            }
        })
        .then(function(reponse){
            return resolve(reponse.data);
        })    
        .catch(async function(err) {
            return reject(err.response.data.Message);
        })
    });
}

