import React from 'react';
import {ButtonMenu} from '../../Controls/Btns/ButtonMenu'
import s from './Menu.module.css'

type MenuPropsType = {
  number: number
  callbackAddValue: () => void
  callbackResetValue: () => void
  isEndOfCount: boolean
  newValuesForCounter: boolean
}

export const Menu: React.FC<MenuPropsType> = (props) => {

  const isDisabledInc = !props.isEndOfCount || props.newValuesForCounter
  const isDisabledRes = props.isEndOfCount || props.newValuesForCounter

  return (<div className={s.menu}>
    <ButtonMenu name={"Inc"}
                callbackOnclick={props.callbackAddValue}
                isDisabled={isDisabledInc}
                />
    <ButtonMenu name={"Res"}
                callbackOnclick={props.callbackResetValue}
                isDisabled={isDisabledRes}
               />
    </div>);
};
