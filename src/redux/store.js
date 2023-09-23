import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { notificationReducer } from './notificationSlice';



export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
        notification: notificationReducer,
      },
    });