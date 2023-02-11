import { createSlice } from '@reduxjs/toolkit'

export const expandDialog = createSlice({
  name: 'dialogReducer',
  initialState: {
    isOpen: false,
    pictureURL: ""
  },
  reducers: {
    openCloseDialog: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isOpen = !state.isOpen
    },
    changeImageURL: (state, action) => {
        state.pictureURL = action.payload;
      },
  },
})

// Action creators are generated for each case reducer function
export const { changeImageURL,openCloseDialog } = expandDialog.actions

export default expandDialog.reducer