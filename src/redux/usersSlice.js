import { createSlice } from '@reduxjs/toolkit';
import { registerThunk, loginThunk, logOutThunk } from './usersThunks';
import api from 'services/api';

const initialState = {
  name: '',
  isLoading: false,
  error: null,
  token: '',
  isLoggedIn: false,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(args => {
      console.log('middleware', args);
    }),
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(registerThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        const {
          token,
          user: { name },
        } = action.payload;

        state.token = token;
        state.name = name;
        state.error = null;
        state.isLoggedIn = true;
        api.setAuthToken(token);
        state.isLoading = false;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(loginThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        const {
          token,
          user: { name },
        } = action.payload;

        state.token = token;
        state.name = name;
        state.error = null;
        state.isLoggedIn = true;
        api.setAuthToken(token);
        state.isLoading = false;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(logOutThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(logOutThunk.fulfilled, (state, action) => {
        state.token = '';
        state.name = '';
        state.error = null;
        state.contacts = [];
        api.setAuthToken('');
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logOutThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default usersSlice.reducer;
