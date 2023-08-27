import {useSelector} from "react-redux";
import {RootStateType} from "../../../../redux/redux-store";
import s from "../CurrentIndicatorValue.module.css";

export const useCurrentIndicatorValue = (currentValue: number,
                                         isEndOfCount: boolean,
                                         isCorrectRange: boolean
) => {
  const isSetted = useSelector<RootStateType, boolean>(state => state.counter.isSetted)
  const errorMessage = 'Incorrect value'

  const finalValue = !isCorrectRange
    ? errorMessage
    : !isSetted
      ? 'Press Set'
      : currentValue

  const finalClassnameForSpan = !isEndOfCount
    ? s.warning
    : finalValue === errorMessage
      ? s.warning
      : ''


  return {
    finalValue,
    finalClassnameForSpan
  }
}