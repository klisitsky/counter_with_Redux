import React from 'react';
import './Counter.css';
import {counterAC, CounterType} from "./redux/reducerCounter";
import {connect} from "react-redux";
import {Counter} from "./Counter";
import {RootStateType} from "./redux/redux-store";
import {Dispatch} from "redux";

export type CounterPropsType = CounterType & mapDispatchToPropsType

const mapStateToProps = (state:RootStateType):CounterType => ({
  minValue: state.counter.minValue,
  maxValue: state.counter.maxValue
})

export type mapDispatchToPropsType = {
  setValues: (minValue: number, maxValue: number) => void
}

const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => ({
  setValues(minValue: number, maxValue: number) {
    dispatch(counterAC(minValue, maxValue))
}
})

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default React.memo(CounterContainer);