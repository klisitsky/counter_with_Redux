import {useDispatch} from "react-redux";
import {setNewCurrentValue} from "../../../../redux/actions/counterActions";

export const useMenu = (isEndOfCount: boolean,
                        inputMinValue: number,
                        currentValue: number,
                        settedMaxValue: number) => {

  const dispatch = useDispatch()

  const resetValue = () => {
    dispatch(setNewCurrentValue(inputMinValue))
  }

  const incrementCurrentValue = () => {
    if (currentValue < settedMaxValue) {
      dispatch(setNewCurrentValue(currentValue + 1))
    }
  }


  return {
    resetValue, incrementCurrentValue
  }
}