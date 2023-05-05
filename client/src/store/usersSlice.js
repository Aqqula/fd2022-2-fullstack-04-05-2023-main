import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as httpClient from '../api';

export const createUser = createAsyncThunk(
  'users/createUser',
  async (params, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await httpClient.postUser(params);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAllUsers = createAsyncThunk(
  'users/getAllUsers',
  async (params, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await httpClient.getUsers(params);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isFetching: false,
    error: null,
    users: [],
  },
  reducers: {
    loadUsers(state, action) {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state, action) => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
      state.error = null;
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    });
    builder.addCase(createUser.pending, (state, action) => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.users.unshift(action.payload);
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    });
  },
});

const {
  reducer,
  // actions: { loadUsers },
} = usersSlice;
export default reducer;
