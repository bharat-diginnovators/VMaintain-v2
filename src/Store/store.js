import { configureStore } from '@reduxjs/toolkit';
import useReducer from "../Slices/userSlice"
import toggleReducer from '../Slices/toggleSlice';
import profileReducer from '../Slices/profileSlice';

const store = configureStore({
  reducer: {
    user:useReducer,
    toggle:toggleReducer,
    profile:profileReducer
    // Add your reducers here
  },
});

export default store;