import { createSlice } from '@reduxjs/toolkit'

export interface DropDownState {
    visiblePayment: boolean,
}

const initialState: DropDownState = {
    visiblePayment: false,
}

export const popupSlice = createSlice({
  name: 'popupSlice',
  initialState,
  reducers: {
    setVisiblePayment: (state) => {
        state.visiblePayment = !state.visiblePayment;
    },
  },
})

export const { setVisiblePayment } = popupSlice.actions;
export default popupSlice.reducer;