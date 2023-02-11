import { createSlice } from '@reduxjs/toolkit'

export const tictactoeReducer = createSlice({
  name: 'tictactoeReducer',
  initialState: {
    r1c1:0,
    r1c2:0,
    r1c3:0,
    r2c1:0,
    r2c2:0,
    r2c3:0,
    r3c1:0,
    r3c2:0,
    r3c3:0,
    turn:1
  },
  reducers: {
    
    changeValueOfBox: (state, action) => {
     
      switch (action.payload) {
        case 0:
          state.r1c1 = state.turn;       
          break;
        case 1:
          state.r1c2 = state.turn;
          break;
        case 2:
          state.r1c3 = state.turn;
          break;
        case 3:
          state.r2c1 = state.turn;
          break;
        case 4:
          state.r2c2 = state.turn;
          break;
        case 5:
          state.r2c3 = state.turn;
          break;
        case 6:
          state.r3c1 = state.turn;
          break;
        case 7:
          state.r3c2 = state.turn;
          break;
        case 8:
          state.r3c3 = state.turn;
          break  
      }

      state.turn = state.turn===1?2:1;
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
export const { changeValueOfBox,resetTicTacToe} = tictactoeReducer.actions

export default tictactoeReducer.reducer