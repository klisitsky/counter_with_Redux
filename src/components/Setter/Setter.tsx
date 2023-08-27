import React, {useCallback} from 'react';
import s from './Setter.module.css'
import ButtonMenu from "../Controls/Btns/ButtonMenu";
import InputRange from "../Controls/Inputs/InputRange/InputRange";
import {useDispatch} from "react-redux";
import {setNewCurrentValue, setNewRangeValues, toggleSetStatus} from "../../redux/actions/counterActions";


type SetterPropsType = {
  inputMinValue: number
  setInputMinValue: (value: number) => void
  inputMaxValue: number
  setInputMaxValue: (value: number) => void
  isCorrectRange: boolean
}


const Setter: React.FC<SetterPropsType> = ({
                                             inputMinValue,
                                             setInputMinValue,
                                             inputMaxValue,
                                             setInputMaxValue,
                                             isCorrectRange
                                           }) => {

  const dispatch = useDispatch()

  const setNewValues = useCallback(() => {
    dispatch(setNewRangeValues(inputMinValue, inputMaxValue))
    dispatch(setNewCurrentValue(inputMinValue))
    dispatch(toggleSetStatus(true))
  }, [inputMinValue, inputMaxValue, inputMinValue])


  return (<div className={s.wrapper}>
    <InputRange labelName='Min Value'
                labelId='min'
                inputValue={inputMinValue}
                setInputValue={setInputMinValue}
                isCorrectRange={isCorrectRange}
    />
    <InputRange labelName='Max Value'
                labelId='max'
                inputValue={inputMaxValue}
                setInputValue={setInputMaxValue}
                isCorrectRange={isCorrectRange}
    />
    <ButtonMenu name={'Set'}
                callbackOnclick={setNewValues}
                isDisabled={!isCorrectRange}

    />
  </div>);
};


export default React.memo(Setter)

