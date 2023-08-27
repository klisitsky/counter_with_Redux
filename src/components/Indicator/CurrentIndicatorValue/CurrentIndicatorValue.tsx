import React from 'react';
import {useCurrentIndicatorValue} from "./hooks/useCurrentIndicatorValue";

type NumberPropsType = {
  currentValue: number
  isEndOfCount: boolean
  isCorrectRange: boolean
}

const CurrentIndicatorValue: React.FC<NumberPropsType> = (props) => {

  const {
    finalValue,
    finalClassnameForSpan
  } = useCurrentIndicatorValue(props.currentValue, props.isEndOfCount, props.isCorrectRange)


  return (<div>
    <span className={finalClassnameForSpan}>{finalValue}</span>
  </div>);
};


export default React.memo(CurrentIndicatorValue)