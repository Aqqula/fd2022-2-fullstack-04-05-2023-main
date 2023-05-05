import { createAsyncThunk } from '@reduxjs/toolkit';

export const decorateAsyncThunk = ({ type, thunk }) => {
  const asyncThunk = createAsyncThunk(type, async (params, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await thunk(params);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  });
  return asyncThunk;
};

export const rejectedReducer = (state, action) => {
  const {
    payload: {
      response: {
        data: {
          error: [first],
        },
      },
    },
  } = action;
  state.isFetching = false;
  state.error = first.message;
};

export const pendingReducer = (state, action) => {
  state.isFetching = true;
  state.error = null;
};
