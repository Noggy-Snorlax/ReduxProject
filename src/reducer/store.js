import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Counter'
import appBevReducer from './AppBev'
import expandDialogReducer from './ExpandDialog'
import tictactoeReducer from './TicTacToeRed'
import calculatorReducer from './CalculatorRed'

export default configureStore({
  reducer: {
    counter: counterReducer,
    appBev: appBevReducer,
    expandDialog: expandDialogReducer,
    tactactoe: tictactoeReducer,
    calculator: calculatorReducer
  },
})