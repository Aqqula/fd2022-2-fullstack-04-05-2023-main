import { combineReducers } from '@reduxjs/toolkit';
import countReducer from './countSlice';
import todoReducer from './todoSlice';
import usersReducer from './usersSlice';
import groupsReducer from './groupsSlice';

const rootReducer = combineReducers({
  counter: countReducer,
  todo: todoReducer,
  users: usersReducer,
  groups: groupsReducer,
});

export default rootReducer;
