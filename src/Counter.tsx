import React, {useState} from 'react';
import './Counter.css';
import {Indicator} from "./components/Indicator/Indicator";
import {Setter} from './components/Setter/Setter';

export const Counter = () => {

  const [inputMin, setInputMin] = useState<number>(0)
  const [inputMax, setInputMax] = useState<number>(5)

  const [minValueNum, setMinValueNum] = useState<number>(inputMin);
  const [maxValueNum, setMaxValueNum] = useState<number>(inputMax);

  const [number, setNumber] = useState<number>(minValueNum)

  const isCorrectRange = inputMin >= inputMax
    ? false
    : !(inputMin < 0 || inputMax < 0)

  const setNewInputValues = () => {
    setMinValueNum(inputMin)
    setMaxValueNum(inputMax)
    setNumber(inputMin)
  }

  const addValue = () => {
    if (number < maxValueNum)
      setNumber((current) => current + 1)
  }
  const resetValue = () => {setNumber(minValueNum)}

  const isEndOfCount = number < maxValueNum

  const newValuesForCounter = inputMin !== minValueNum || inputMax !== maxValueNum

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
                 maxValueNum={maxValueNum}
                 callbackAddValue={addValue}
                 callbackResetValue={resetValue}
                 isEndOfCount={isEndOfCount}
                 newValuesForCounter={newValuesForCounter}
                 isCorrectRange={isCorrectRange}/>
    </div>
  );
};

