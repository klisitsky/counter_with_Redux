import React from "react";
import s from "./InputRange.module.css";

import {useInputRangeHook} from "./hooks/InputRangeHook";

type InputRangePropsType = {
  labelName: string
  labelId: string
  inputValue: number
  setInputValue: (value: number) => void
  isCorrectRange: boolean
}


const InputRange: React.FC<InputRangePropsType> = (props) => {

  const {
    onChangeStepValueClickHandler,
    onChangeInputValueHandler
  } = useInputRangeHook(props.inputValue, props.setInputValue)

  return (
    <div className={s.values}>
      <label className={s.desc} htmlFor={props.labelId}>{props.labelName}</label>
      <div className={s.setter}>
        <button className={`${s.btnChangeValue} ${s.btnSub}`}
                onClick={() => onChangeStepValueClickHandler('dec')}
        >-
        </button>
        <input className={`${s.inputValue} ${!props.isCorrectRange ? s.red : ''}`}
               id={props.labelId}
               type="number"
               value={props.inputValue}
               onChange={onChangeInputValueHandler}
        />
        <button className={`${s.btnChangeValue} ${s.btnAdd}`}
                onClick={() => onChangeStepValueClickHandler('inc')}
        >+
        </button>
      </div>
    </div>
  )
}


export default React.memo(InputRange)