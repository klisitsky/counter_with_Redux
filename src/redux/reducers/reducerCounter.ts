import {
  SET_NEW_CURRENT_VALUE,
  SET_NEW_RANGE_VALUES, SET_WARNING,
  setNewCurrentValue,
  setNewRangeValues,
  setWarning, TOGGLE_SET_STATUS,
  toggleSetStatus, WarningTypes
} from "../actions/counterActions";


type ActionsType = ReturnType<typeof setNewRangeValues>
  | ReturnType<typeof setNewCurrentValue>
  | ReturnType<typeof setWarning>
  | ReturnType<typeof toggleSetStatus>

export type CounterType = {
  minValue: number
  maxValue: number
  currentValue: number
  warning: WarningTypes | null
  isSetted: boolean
}

export const initialState: CounterType = {
  minValue: 0,
  maxValue: 5,
  currentValue: 0,
  warning: null,
  isSetted: true
}

const ReducerCounter = (state: CounterType = initialState, action:ActionsType): CounterType => {
  switch (action.type) {
    case SET_NEW_RANGE_VALUES:
      return {
        ...state,
        minValue: action.payload.minValue,
        maxValue: action.payload.maxValue
      }
    case SET_NEW_CURRENT_VALUE:
      return {
        ...state,
        currentValue: action.payload.currentValue
      }
    case SET_WARNING:
      return {
        ...state,
        warning: action.payload.warningValue
    }
    case TOGGLE_SET_STATUS:
      return {
        ...state,
        isSetted: action.payload.isSetted
      }
    default:
      return state
  }
};


export default ReducerCounter;
