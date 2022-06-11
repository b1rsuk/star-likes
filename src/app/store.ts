import { configureStore } from '@reduxjs/toolkit';
import dropdownSlice from './features/dropdown/dropdownSlice';
import popupSlice from './features/popup/popupSlice';
import burgerSlice from './features/burger/burgerSlice';

export const store = configureStore({
  reducer: {
    dropdown: dropdownSlice,
    popup: popupSlice,
    burger: burgerSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch