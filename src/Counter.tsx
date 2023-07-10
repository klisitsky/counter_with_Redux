import React, {useState} from 'react';
import './Counter.css';
import {Indicator} from "./components/Indicator/Indicator";
import {Setter} from './components/Setter/Setter';
import {CounterPropsType} from "./CounterContainer";


export const Counter: React.FC<CounterPropsType> = ({ minValue, maxValue, setValues}) => {

  const [inputMin, setInputMin] = useState<number>(0)
  const [inputMax, setInputMax] = useState<number>(5)


  const [number, setNumber] = useState<number>()

  const isCorrectRange = inputMin >= inputMax
    ? false
    : !(inputMin < 0 || inputMax < 0)

  const setNewInputValues = () => {
    setValues(inputMin, inputMax)
    setNumber(inputMin)
  }

  const addValue = () => {
    if (number < maxValue)
      setNumber((current) => current + 1)
  }
  const resetValue = () => {setNumber(minValue)}

  const isEndOfCount = number < maxValue

  const newValuesForCounter = inputMin !== minValue || inputMax !== maxValue

  return (
    <div className="Indicator">
      <Setter inputMin={inputMin}
              setInputMin={setInputMin}
              inputMax={inputMax}
              setInputMax={setInputMax}
              isCorrectRange={isCorrectRange}
              setNewInputValues={setNewInputValues}
      />
      <Indicator number={number}
                 maxValueNum={maxValue}
                 callbackAddValue={addValue}
                 callbackResetValue={resetValue}
                 isEndOfCount={isEndOfCount}
                 newValuesForCounter={newValuesForCounter}
                 isCorrectRange={isCorrectRange}/>
    </div>
  );
};

