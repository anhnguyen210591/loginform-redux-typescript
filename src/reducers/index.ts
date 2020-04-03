import { combineReducers } from 'redux'
import loginReducers from './loginReducers' 
import signupReducers from './signupReducers'
import editProfileReducers from './editProfileReducers'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';


const loginPersitReducers = {
  key: 'login',
  storage: storage,
};

const rootReducer = combineReducers({
    login : persistReducer(loginPersitReducers,loginReducers),
    signup : signupReducers,
    editProfile:editProfileReducers
  })
export default rootReducer