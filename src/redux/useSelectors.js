import { useSelector } from 'react-redux';

export const useContacts = () => useSelector(state => state.contactsReducer);
export const useUser = () => useSelector(state => state.usersReducer);
