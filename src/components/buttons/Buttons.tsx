import React from 'react';
import style from './Buttons.module.css'
import {buttonType} from "../settingWindow/SettingsWindow";

type ButtonsPropsType = {
    buttons: buttonType[]
}

export const Buttons:React.FC<ButtonsPropsType> = ({
    buttons,
                                                   }) => {
    const buttonsMap = buttons.map((el, index)=>{
        return(
                <button disabled={el.block} className={el.block? `${style.button} ${style.mute}`: style.button} onClick={el.onClick} key={index}>{el.name}</button>
        )
    })

    return (
        <div className={style.buttons}>
            {buttonsMap}
        </div>
    );
};