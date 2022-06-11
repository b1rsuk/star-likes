import { createSlice } from '@reduxjs/toolkit'

export interface DropDownState {
    visibleBurger: boolean,
}

const initialState: DropDownState = {
    visibleBurger: false,
}

export const burgerSlice = createSlice({
  name: 'burgerSlice',
  initialState,
  reducers: {
    setVisibleBurger: (state) => {
        state.visibleBurger = !state.visibleBurger;
    },
  },
})

export const { setVisibleBurger } = burgerSlice.actions;
export default burgerSlice.reducer;