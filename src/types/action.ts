import {LoginStatus} from "./LoginStatus"
import {SignupStatus} from './SignupStatus'

export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const SIGNUP_PENDING = 'SIGNUP_PENDING';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export interface SetLoginPending {
    type : typeof LOGIN_PENDING;
    isLoginPending : LoginStatus["isLoginPending"];
}

export interface SetLoginSuccess {
    type : typeof LOGIN_SUCCESS;
    isLoginSuccess : LoginStatus["isLoginSuccess"]
}

export interface SetLoginError {
    type : typeof LOGIN_ERROR;
    isLoginError : LoginStatus["isLoginError"]
}

export interface SetSignupPending {
    type : typeof SIGNUP_PENDING;
    isSignUpPending : SignupStatus["isSignUpPending"]
}

export interface SetSignupSuccess {
    type : typeof SIGNUP_SUCCESS;
    isSignUpSuccess : SignupStatus["isSignUpSuccess"]
}

export interface SetSignupError {
    type : typeof SIGNUP_ERROR;
    isSignUpError : SignupStatus["isSignUpError"]
}

export type LoginActionTypes=SetLoginPending|SetLoginSuccess|SetLoginError
export type SignupActionTypes=SetSignupPending|SetSignupSuccess|SetSignupError

export type AppActions = LoginActionTypes|SignupActionTypes
