import { createSlice } from '@reduxjs/toolkit';
import { loginThunk } from './usersThunks';

const initialState = {
  name: '',
  isLoading: false,
  error: null,
  token: '',
};

export const AUTH_TOKEN = 'authToken';

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(loginThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        const {
          token,
          user: { name },
        } = action.payload;

        localStorage.setItem(AUTH_TOKEN, token);

        state.token = token;
        state.name = name;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { login } = usersSlice.actions;

export default usersSlice.reducer;
