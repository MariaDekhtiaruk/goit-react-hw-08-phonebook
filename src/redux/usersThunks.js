import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'services/api';

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
