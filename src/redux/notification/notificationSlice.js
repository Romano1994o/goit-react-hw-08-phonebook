import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notification: [],
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification: (state, action) => {
      state.notification.push(action.payload);
    },
    hideNotification: (state) => {
      state.notification = []; 
    },
  },
});

export const { showNotification, hideNotification } = notificationSlice.actions;

export const notificationReducer = notificationSlice.reducer;

