import { createSlice } from '@reduxjs/toolkit'

export interface DropDownState {
    visibleProfile: boolean,
    visibleNotifications: boolean
}

const initialState: DropDownState = {
  visibleProfile: false,
  visibleNotifications: false,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setVisibleDropDownProfile: (state) => {
        state.visibleNotifications = false;
        state.visibleProfile = !state.visibleProfile;
    },
    setVisibleDropDownNotifications: (state) => {
        state.visibleProfile = false;
        state.visibleNotifications = !state.visibleNotifications
    }
  },
})

export const { setVisibleDropDownProfile, setVisibleDropDownNotifications } = counterSlice.actions
export default counterSlice.reducer