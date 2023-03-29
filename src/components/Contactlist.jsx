import ContactItem from './ContactItem';
import PropTypes from 'prop-types';
import { ContactPropType } from 'ContactPropType';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContactsThunk } from 'redux/contactsThunks';
import { useContacts, useUser } from 'redux/useSelectors';

const isSubstringPresentInString = (string, substring) => {
  return string.toLowerCase().includes(substring.toLowerCase());
};

const ContactList = () => {
  const contactsState = useContacts();
  const { isLoggedIn } = useUser();
  const contacts = contactsState.contacts;
  const errorMessage = contactsState.error;
  const isLoading = contactsState.isLoading;
  const contactsFilter = contactsState.filter;
  const dispatch = useDispatch();

  useEffect(() => {
    // Make request only if user is logged in
    if (isLoggedIn) dispatch(fetchContactsThunk());
  }, [dispatch, isLoggedIn]);

  return contacts && !isLoading ? (
    <ul className="list">
      {errorMessage}
      {contacts
        .filter(item => isSubstringPresentInString(item.name, contactsFilter))
        .map(contactItem => (
          <ContactItem contact={contactItem} key={contactItem.id}></ContactItem>
        ))}
    </ul>
  ) : null;
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(ContactPropType),
  filter: PropTypes.string,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
