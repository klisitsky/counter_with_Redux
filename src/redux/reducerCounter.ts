

export type CounterType = {
  minValue: number
  maxValue: number
}

export const initialState: CounterType = {
  minValue: 0,
  maxValue: 5
}

const ReducerCounter = (state: CounterType = initialState, action:counterActionType): CounterType => {
  switch (action.type) {
    case 'UPDATE-VALUES':
      return {
        ...state,
        minValue: action.payload.minValue,
        maxValue: action.payload.maxValue
      }
    default:
      return state
  }
};

export default ReducerCounter;

export type counterActionType = ReturnType<typeof counterAC>
export const counterAC = (minValue:number, maxValue:number) => ({
  type: 'UPDATE-VALUES',
  payload: {
    minValue,
    maxValue
  }
})