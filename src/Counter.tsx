import React, {useState} from 'react';
import './Counter.css';
import Indicator from "./components/Indicator/Indicator";
import Setter from './components/Setter/Setter';


const Counter = () => {

  const [inputMinValue, setInputMinValue] = useState<number>(0)
  const [inputMaxValue, setInputMaxValue] = useState<number>(5)

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

