import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import axios from 'axios';
import apiRoutes from '../routes/apiRoutes.js';

export const fetchUserInfo = createAsyncThunk(
  'users/getUserById',
  async (id) => {
    const response = await axios.get(apiRoutes.getUserById(id));
    return response.data;
  }
);

export const fetchUsers = createAsyncThunk('users/getAllUsers', async () => {
  const response = await axios.get(apiRoutes.getAllUsers());
  return response.data;
});

const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState({
  currentUser: 'guest',
  isLogin: false,
  loadingStatus: 'loading',
  error: null,
  massage: '',
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.isLogin = true;
      })
      .addCase(fetchUserInfo.fulfilled, (state, { payload }) => {
        state.isLogin = false;
        state.entities[payload.id] = payload;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.isLogin = false;
        state.error = action.error;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        usersAdapter.addMany(state, payload.user);
      });
  },
});
export const { actions } = usersSlice;
export const userSelectors = usersAdapter.getSelectors((state) => state.users);
export default usersSlice.reducer;
