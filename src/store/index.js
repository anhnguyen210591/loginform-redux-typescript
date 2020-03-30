import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'

const store =createStore(rootReducer,{},applyMiddleware(thunk,logger));

export default store;
