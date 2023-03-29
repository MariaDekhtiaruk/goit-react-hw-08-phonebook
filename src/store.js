import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './redux/contactsSlice';
import usersReducer from './redux/usersSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({
  contactsReducer,
  usersReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
