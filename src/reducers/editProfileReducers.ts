import { EditProfileActionTypes } from "../types/action"
import { EditProfileStatus } from "../types/EditProfileStatus"

const initState:EditProfileStatus = {isEditProfilePending : false,isEditProfileSuccess : false,isEditProfileError : null};


const editProfileReducers = (state=initState,action:EditProfileActionTypes):EditProfileStatus => {
    switch(action.type){
        case 'EDIT_PROFILE_PENDING':
            return {
                ...state,
                isEditProfilePending : action.isEditProfilePending
            }
        case 'EDIT_PROFILE_SUCCESS':
            return {
                ...state,
                isEditProfileSuccess : action.isEditProfileSuccess
            }
            case 'EDIT_PROFILE_ERROR':
                return {
                    ...state,
                    isEditProfileError : action.isEditProfileError
                }
        default:
            return state
    }
}

export default editProfileReducers
