import {createStore, applyMiddleware} from 'redux'
import thunk, {ThunkMiddleware} from 'redux-thunk'
import rootReducer from '../reducers'
import { AppActions } from '../types/action'
import logger from 'redux-logger'


export type AppState=ReturnType<typeof rootReducer>

const store =createStore(rootReducer,{},applyMiddleware(thunk as ThunkMiddleware<AppState,AppActions>,logger));

export default store;
