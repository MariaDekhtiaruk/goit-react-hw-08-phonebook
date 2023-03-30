import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'services/api';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.fetchContacts();

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { getState, rejectWithValue }) => {
    const state = getState();

    if (
      state.contactsReducer.contacts.find(item => item.name === contact.name)
    ) {
      return rejectWithValue(`${contact.name} is already in contact`);
    }

    const response = await api.addContact(contact);
    return response;
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const response = await api.delete(id);
    return response;
  }
);
