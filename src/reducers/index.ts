import { combineReducers } from 'redux'
import loginReducers from './loginReducers' 
import signupReducers from './signupReducers'
import editProfileReducers from './editProfileReducers'
import setUserInfoReducers from './setUserInfoReducers'


const rootReducer = combineReducers({
    login : loginReducers,
    signup : signupReducers,
    editProfile:editProfileReducers,
    setUserInfo :setUserInfoReducers
  })
export default rootReducer