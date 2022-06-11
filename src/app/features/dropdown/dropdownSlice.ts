import { createSlice } from '@reduxjs/toolkit'

export interface DropDownState {
    visibleProfile: boolean,
    visibleNotifications: boolean,
    visibleSetting: boolean
}

const initialState: DropDownState = {
  visibleProfile: false,
  visibleNotifications: false,
  visibleSetting: false,
}

export const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    setVisibleDropDownProfile: (state) => {
        state.visibleNotifications = false;
        state.visibleProfile = !state.visibleProfile;
    },
    setVisibleDropDownNotifications: (state) => {
        state.visibleProfile = false;
        state.visibleNotifications = !state.visibleNotifications
    },
    setVisibleDropDownSetting: (state) => {
      state.visibleProfile = false;
      state.visibleNotifications = false;
      state.visibleSetting = !state.visibleSetting;
    }
  },
})

export const { setVisibleDropDownProfile, setVisibleDropDownNotifications, setVisibleDropDownSetting } = dropdownSlice.actions;
export default dropdownSlice.reducer;