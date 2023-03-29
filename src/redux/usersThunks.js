import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'services/api';

export const registerThunk = createAsyncThunk(
  'users/signup',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const response = await api.register(name, email, password);

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const loginThunk = createAsyncThunk(
  'users/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await api.login(email, password);

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.logout();

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
