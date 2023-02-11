import { createSlice } from '@reduxjs/toolkit'

export const calculatorReducer = createSlice({
  name: 'calculatorReducer',
  initialState: {
    inputText:"",
    answer:""
  },
  reducers: {
    
    changeValueOfPInput: (state, action) => {
        state.inputText = action.payload
      

    },resetTicTacToe: (state) => {
      state.r1c1 = 0;
      state.r1c2 = 0;
      state.r1c3 = 0;
      state.r2c1 = 0;
      state.r2c2 = 0;
      state.r2c3 = 0;
      state.r3c1 = 0;
      state.r3c2 = 0;
      state.r3c3 = 0;
      state.turn = 1;
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeValueOfPInput,resetTicTacToe} = calculatorReducer.actions

export default calculatorReducer.reducer