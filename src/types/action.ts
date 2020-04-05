import {LoginStatus} from "./LoginStatus"
import {SignupStatus} from './SignupStatus'
import {EditProfileStatus} from './EditProfileStatus'

export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SET_USER_INFO='SET_USER_INFO';

export const SIGNUP_PENDING = 'SIGNUP_PENDING';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const EDIT_PROFILE_PENDING = 'EDIT_PROFILE_PENDING';
export const EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS';
export const EDIT_PROFILE_ERROR = 'EDIT_PROFILE_ERROR';

export interface SetLoginPending {
    type : typeof LOGIN_PENDING;
    isLoginPending : LoginStatus["isLoginPending"];
}

export interface SetLoginSuccess {
    type : typeof LOGIN_SUCCESS;
    isLoginSuccess : LoginStatus["isLoginSuccess"]
}

export interface SetUserInfo {
    type : typeof SET_USER_INFO;
    data:any
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

export interface SetEditProfilePending {
    type : typeof EDIT_PROFILE_PENDING;
    isEditProfilePending : EditProfileStatus["isEditProfilePending"]
}

export interface SetEditProfileSuccess {
    type : typeof EDIT_PROFILE_SUCCESS;
    isEditProfileSuccess : EditProfileStatus["isEditProfileSuccess"]
}

export interface SetEditProfileError {
    type : typeof EDIT_PROFILE_ERROR;
    isEditProfileError : EditProfileStatus["isEditProfileError"]
}

export type LoginActionTypes=SetLoginPending|SetLoginSuccess|SetLoginError|SetUserInfo
export type SignupActionTypes=SetSignupPending|SetSignupSuccess|SetSignupError
export type EditProfileActionTypes=SetEditProfilePending|SetEditProfileSuccess|SetEditProfileError

export type AppActions = LoginActionTypes|SignupActionTypes|EditProfileActionTypes
