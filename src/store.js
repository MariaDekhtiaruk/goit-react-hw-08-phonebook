import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './redux/contactsSlice';
import usersReducer from './redux/usersSlice';

const reducer = {
  contactsReducer,
  usersReducer,
};

export const store = configureStore({
  reducer,
});
