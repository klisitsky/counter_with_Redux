
export const SET_NEW_RANGE_VALUES = "SET_NEW_RANGE_VALUES"
export const SET_NEW_CURRENT_VALUE = "SET_NEW_CURRENT_VALUE"
export const SET_WARNING = "SET_WARNING"
export const TOGGLE_SET_STATUS = "TOGGLE_SET_STATUS"


export type WarningTypes = 'Incorrect range' | 'Press Set'

export const setNewRangeValues = (minValue:number, maxValue:number) => ({
  type: SET_NEW_RANGE_VALUES,
  payload: {
    minValue,
    maxValue
  }
} as const)

export const setNewCurrentValue = (currentValue: number) => ({
  type: SET_NEW_CURRENT_VALUE,
  payload: {
    currentValue
  }
} as const)

export const setWarning = (warningValue: WarningTypes | null) => ({
  type: SET_WARNING,
  payload: {
    warningValue
  }
} as const)

export const toggleSetStatus = (isSetted: boolean) => ({
  type: TOGGLE_SET_STATUS,
  payload: {
    isSetted
  }
} as const)