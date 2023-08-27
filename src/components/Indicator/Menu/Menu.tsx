import React from 'react';
import ButtonMenu from '../../Controls/Btns/ButtonMenu'
import s from './Menu.module.css'
import {useMenu} from "./hooks/useMenu";


type MenuPropsType = {
  isEndOfCount: boolean
  inputMinValue: number
  currentValue: number
  settedMaxValue: number
}

const Menu: React.FC<MenuPropsType> = (props) => {

  const {
    resetValue,
    incrementCurrentValue
  } = useMenu(props.isEndOfCount, props.inputMinValue, props.currentValue, props.settedMaxValue)

  return (<div className={s.menu}>
    <ButtonMenu name={"Inc"}
                callbackOnclick={incrementCurrentValue}
                isDisabled={!props.isEndOfCount}
    />
    <ButtonMenu name={"Res"}
                callbackOnclick={resetValue}
    />
  </div>);
};


export default React.memo(Menu)