import { configureStore } from '@reduxjs/toolkit'
import dropdownSlice from './features/dropdown/dropdownSlice'

export const store = configureStore({
  reducer: {
    dropdown: dropdownSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch