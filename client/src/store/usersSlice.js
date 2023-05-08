import { createSlice } from '@reduxjs/toolkit';
import * as httpClient from '../api';
import { pendingReducer, rejectedReducer, decorateAsyncThunk } from './helpers';

export const getOneUser = decorateAsyncThunk({
  type: 'users/getOneUser',
  thunk: httpClient.getUser,
});

export const createUser = decorateAsyncThunk({
  type: 'users/createUser',
  thunk: httpClient.postUser,
});

export const getAllUsers = decorateAsyncThunk({
  type: 'users/getAllUsers',
  thunk: httpClient.getUsers,
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isFetching: false,
    error: null,
    users: [],
    currentUser: null,
    loginUser: null,
  },
  reducers: {
    loadUsers(state, action) {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    //getOneUser
    builder.addCase(getOneUser.rejected, rejectedReducer);
    builder.addCase(getOneUser.pending, pendingReducer);
    builder.addCase(getOneUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.currentUser = action.payload;
    });
    //getAllUsers
    builder.addCase(getAllUsers.pending, pendingReducer);
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
      state.error = null;
    });
    builder.addCase(getAllUsers.rejected, rejectedReducer);
    //createUser
    builder.addCase(createUser.pending, pendingReducer);
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.users.unshift(action.payload);
    });
    builder.addCase(createUser.rejected, rejectedReducer);
  },
});

const {
  reducer,
  // actions: { loadUsers },
} = usersSlice;
export default reducer;
