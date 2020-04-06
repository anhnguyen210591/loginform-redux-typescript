import {createStore, applyMiddleware} from 'redux'
import thunk, {ThunkMiddleware} from 'redux-thunk'
import rootReducer from '../reducers'
import { AppActions } from '../types/action'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export type AppState=ReturnType<typeof rootReducer>

export const store =createStore(rootReducer,{},applyMiddleware(thunk as ThunkMiddleware<AppState,AppActions>,logger));
export const persistor = persistStore(store);


