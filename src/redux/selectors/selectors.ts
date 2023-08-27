import {RootStateType} from "../redux-store";

export const isSettedSelector = (state:RootStateType):boolean => {
  return state.counter.isSetted
}

export const currentValueSelector = (state:RootStateType):number => {
  return state.counter.currentValue
}

export const settedMaxValueSelector = (state:RootStateType):number => {
  return state.counter.maxValue
}