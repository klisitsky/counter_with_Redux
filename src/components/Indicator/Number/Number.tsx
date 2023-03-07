import React from 'react';
import s from './Number.module.css';

type NumberPropsType = {
  number: number
  maxValueNum: number
  newValuesForCounter: boolean
  isEndOfCount: boolean
  isCorrectRange: boolean
}

export const Number: React.FC<NumberPropsType> = (props) => {

  const warningMessage = 'Press Set';
  const errorMessage = 'Incorrect value'
  const finalValue = !props.isCorrectRange
                        ? errorMessage
                        : props.newValuesForCounter
                          ? warningMessage
                          : props.number

// красная ошибка и красное финальное число

  const finalClassnameForSpan = !props.isEndOfCount
                                    ? s.maxValue
                                    : finalValue === errorMessage
                                      ? s.maxValue
                                      : ''
  return (<div>
    <span className={finalClassnameForSpan}>{finalValue}</span>
    </div>);
};

