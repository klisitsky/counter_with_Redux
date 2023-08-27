import React from 'react';
import s from './ButtonMenu.module.css'

type IncPropsType = {
  name: string
  callbackOnclick: () => void
  isDisabled?: boolean
}

const ButtonMenu: React.FC<IncPropsType> = (props) => {
  return (
    <button onClick={props.callbackOnclick}
            className={`${s.btnStyle} ${!!props.isDisabled ? s.disabled : ''}`}
            disabled={!!props.isDisabled}>{props.name}
    </button>
  )
};


export default React.memo(ButtonMenu)