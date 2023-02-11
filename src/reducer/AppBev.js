import { createSlice } from '@reduxjs/toolkit'

export const appBev = createSlice({
  name: 'appBev',
  initialState: {
    isDarkTheme: false,
  },
  reducers: {
    changeTheme: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isDarkTheme = !state.isDarkTheme
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { changeTheme } = appBev.actions

export default appBev.reducer