import React from 'react';
import style from './SettingsWindow.module.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {initialStateType} from "../../state/counterReducer";

type SettingsPropsType = {
    counterState: initialStateType,
    increaseMaxValue: ()=>void,
    decreaseMaxValue: ()=>void,
    increaseMinValue: ()=>void,
    decreaseMinValue: ()=>void,
}

export const Settings = (props: SettingsPropsType) => {
    return (
        <div className={style.settings}>
            <div className={style.valueFlex}>
                <span>Max value: </span>
                <KeyboardArrowLeftIcon onClick={props.decreaseMaxValue}/>
                <span>{props.counterState.maxValue}</span>
                <KeyboardArrowRightIcon onClick={props.increaseMaxValue}/>

            </div>
            <div className={style.valueFlex}>
                <span>Min value: </span>
                <KeyboardArrowLeftIcon onClick={props.decreaseMinValue}/>
                <span>{props.counterState.minValue}</span>
                <KeyboardArrowRightIcon  onClick={props.increaseMinValue}/>
            </div>
        </div>
    );
};