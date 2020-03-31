import { combineReducers } from 'redux'
import loginReducers from './loginReducers' 
import signupReducers from './signupReducers'

const rootReducer = combineReducers({
    login : loginReducers,
    signup : signupReducers
  })
export default rootReducer