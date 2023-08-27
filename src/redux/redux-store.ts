import {combineReducers, createStore} from 'redux'
import ReducerCounter from "./reducers/reducerCounter";

const rootReducer = combineReducers({
  counter: ReducerCounter
})

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

