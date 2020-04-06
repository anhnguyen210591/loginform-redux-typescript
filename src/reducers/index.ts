import { combineReducers } from 'redux'
import loginReducers from './loginReducers' 
import signupReducers from './signupReducers'
import editProfileReducers from './editProfileReducers'
import setUserInfoReducers from './setUserInfoReducers'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const loginPersistConfig = {
  key: 'login',
  storage: storage,
  whitelist: ['isLoginSuccess']
}

const rootReducer = combineReducers({
    login : persistReducer(loginPersistConfig,loginReducers),
    signup : signupReducers,
    editProfile:editProfileReducers,
    setUserInfo :setUserInfoReducers
  })
export default rootReducer