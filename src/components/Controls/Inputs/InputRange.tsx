import React, {ChangeEvent} from "react";
import s from "./InputRange.module.css";

type InputRangePropsType = {
  labelName: string
  labelId: string
  valueNum: number
  setValueNum: (value: number) => void
  isCorrectRange: boolean
}


export const InputRange: React.FC<InputRangePropsType> = (props) => {

  const onClickSubValueHandler = () => {
    props.setValueNum(props.valueNum - 1)
  }

  const onClickAddValueHandler = () => {
    props.setValueNum(props.valueNum + 1)
  }

  const onChangeValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    props.setValueNum(+event.currentTarget.value)
  }

  return (
    <div className={s.values}>
      <label className={s.desc} htmlFor={props.labelId}>{props.labelName}</label>
      <div className={s.setter}>
        <button className={`${s.btnChangeValue} ${s.btnSub}`}
                onClick={onClickSubValueHandler}
        >-</button>
        <input className={`${s.inputValue} ${!props.isCorrectRange ? s.red : ''}`}
               id={props.labelId}
               type="number"
               value={props.valueNum}
               onChange={onChangeValueHandler}
        />
        <button className={`${s.btnChangeValue} ${s.btnAdd}`}
                onClick={onClickAddValueHandler}
        >+</button>
      </div>
    </div>
  )
}