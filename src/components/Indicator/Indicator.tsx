import React from "react";
import {Menu} from "./Menu/Menu";
import {Number} from "./Number/Number";
import s from './Indicator.module.css'

type IndicatorPropsType = {
  number: number
  maxValueNum: number
  callbackAddValue:() => void
  callbackResetValue: () => void
  isEndOfCount: boolean
  newValuesForCounter: boolean
  isCorrectRange: boolean
}

export const Indicator: React.FC<IndicatorPropsType> = (props) => {

  return (
    <div className={s.wrapper}>
      <Number number={props.number}
              maxValueNum={props.maxValueNum}
              newValuesForCounter={props.newValuesForCounter}
              isEndOfCount={props.isEndOfCount}
              isCorrectRange={props.isCorrectRange}
      />
      <Menu number={props.number}
            callbackAddValue={props.callbackAddValue}
            callbackResetValue={props.callbackResetValue}
            isEndOfCount={props.isEndOfCount}
            newValuesForCounter={props.newValuesForCounter}
      />

    </div>
  )
}