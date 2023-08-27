import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../../../redux/redux-store";
import {isSettedSelector} from "../../../../../redux/selectors/selectors";
import {ChangeEvent, useCallback} from "react";
import {toggleSetStatus} from "../../../../../redux/actions/counterActions";

export const useInputRangeHook = (inputValue:number,
                               setInputValue: (value: number, ) => void) => {
  const dispatch =  useDispatch()
  const isSetted = useSelector<RootStateType, boolean>(isSettedSelector)

  const onChangeStepValueClickHandler = useCallback((option: 'inc'| 'dec') => {
    if (isSetted) {
      dispatch(toggleSetStatus(false))
    }
    switch (option) {
      case 'inc':
        setInputValue(inputValue + 1)
        break
      case 'dec':
      default:
        setInputValue(inputValue - 1)
        break
    }
  }, [isSetted, setInputValue, inputValue])

  const onChangeInputValueHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (isSetted) {
      dispatch(toggleSetStatus(false))
    }
    setInputValue(+event.currentTarget.value)
  }, [isSetted, setInputValue])


  return {
    onChangeStepValueClickHandler,
    onChangeInputValueHandler
  }
}