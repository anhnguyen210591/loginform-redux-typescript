import { EditProfileActionTypes } from "../types/action"
import { Dispatch } from "redux"
import {UserInfo} from '../types/Userinfo'
export const setEditProfilePending=(isEditProfilePending:boolean):EditProfileActionTypes=>{
    return {
        type:'EDIT_PROFILE_PENDING',
        isEditProfilePending
    }
}

export const setEditProfileSuccess=(isEditProfileSuccess:boolean):EditProfileActionTypes=>{
    return {
        type:'EDIT_PROFILE_SUCCESS',
        isEditProfileSuccess
    }
}

export const setEditProfileError=(isEditProfileError:boolean):EditProfileActionTypes=>{
    return {
        type:'EDIT_PROFILE_ERROR',
        isEditProfileError
    }
}

export function editProfile(
    userId:UserInfo["_id"],
    email:UserInfo["email"],
    password:UserInfo["password"],
    firstname:UserInfo["firstname"],
    lastname:UserInfo["lastname"]
    ){
    return (dispatch:Dispatch<EditProfileActionTypes>) => {
        sendEditProfileRequest(userId,email,password,firstname,lastname)
    .then(success => {
        dispatch(setEditProfilePending(false));
        dispatch(setEditProfileSuccess(true));
    })
    .catch(err=>{
        console.log('receive-error-message',err)
        dispatch(setEditProfilePending(false));
        dispatch(setEditProfileError(err))
    })
    }
}

function sendEditProfileRequest(
    userId:UserInfo["_id"],
    email:UserInfo["email"],
    password:UserInfo["password"],
    firstname:UserInfo["firstname"],
    lastname:UserInfo["lastname"]
    ){
    return new Promise((resolve,reject) => {
        fetch("http://localhost:9000/user/"+userId,{
            method:'put',
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
            console.log('edit-profile-error',error)
            return reject(error.Message);
        })
    });
}

