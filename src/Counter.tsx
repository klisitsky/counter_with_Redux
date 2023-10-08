import React, {useState} from 'react';
import './Counter.css';
import Indicator from "./components/Indicator/Indicator";
import Setter from './components/Setter/Setter';
import {useSelector} from "react-redux";
import {RootStateType} from "./redux/redux-store";


const Counter = () => {

  const settedMinValue = useSelector<RootStateType, number>(state => state.counter.minValue)
  const settedMaxValue = useSelector<RootStateType, number>(state => state.counter.maxValue)

  const [inputMinValue, setInputMinValue] = useState<number>(settedMinValue)
  const [inputMaxValue, setInputMaxValue] = useState<number>(settedMaxValue)

  const isCorrectRange = inputMinValue < inputMaxValue
    && inputMinValue >= 0
    && inputMaxValue > 0

  return (
    <div className="Indicator">
      <Setter inputMinValue={inputMinValue}
              setInputMinValue={setInputMinValue}
              inputMaxValue={inputMaxValue}
              setInputMaxValue={setInputMaxValue}
              isCorrectRange={isCorrectRange}
      />
      <Indicator isCorrectRange={isCorrectRange}
                 inputMinValue={inputMinValue}
      />
    </div>
  );
};

export default React.memo(Counter)

