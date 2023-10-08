import {combineReducers, createStore} from 'redux'
import ReducerCounter from "./reducers/reducerCounter";

const rootReducer = combineReducers({
  counter: ReducerCounter
})
const savedState = localStorage.getItem('app-state')

let preloadedState

if (savedState) {
  try {
    preloadedState = JSON.parse(savedState)
  } catch (e) {
    console.log('Ошибонька: ', e)
  }
}



export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, preloadedState)



store.subscribe(() => {
  const currentState = store.getState()
  localStorage.setItem('app-state', JSON.stringify(currentState))
})