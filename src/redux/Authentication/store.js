import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import rootReducer from '../../rootReducer';

const persistConfig = {
    key: 'root',
    storage: storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

export default store;