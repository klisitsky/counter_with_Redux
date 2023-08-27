import React from "react";
import Menu from "./Menu/Menu";
import s from './Indicator.module.css'
import {useSelector} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import CurrentIndicatorValue from "./CurrentIndicatorValue/CurrentIndicatorValue";
import {currentValueSelector, settedMaxValueSelector} from "../../redux/selectors/selectors";

type IndicatorPropsType = {
  isCorrectRange: boolean
  inputMinValue: number
}

const Indicator: React.FC<IndicatorPropsType> = (props) => {

  const currentValue = useSelector<RootStateType, number>(currentValueSelector)
  const settedMaxValue = useSelector<RootStateType, number>(settedMaxValueSelector)

  const isEndOfCount = currentValue < settedMaxValue


  return (
    <div className={s.wrapper}>
      <CurrentIndicatorValue currentValue={currentValue}
                             isEndOfCount={isEndOfCount}
                             isCorrectRange={props.isCorrectRange}
      />
      <Menu isEndOfCount={isEndOfCount}
            inputMinValue={props.inputMinValue}
            currentValue={currentValue}
            settedMaxValue={settedMaxValue}
      />
    </div>
  )
}


export default React.memo(Indicator)