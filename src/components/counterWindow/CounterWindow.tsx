import React from 'react';
import {Counter} from "./Counter";
import {Buttons} from "../buttons/Buttons";
import styleAdd from "../../App.module.css";
import {buttonType} from "../settingWindow/SettingsWindow";

type CounterWindowPropsType = {
    buttons: buttonType[]
    value: number
    maxValue: number
    minValue:number
}

export const CounterWindow:React.FC<CounterWindowPropsType> = ({
    buttons,
    value,
    maxValue,
                                                               }) => {

    return (
        <div className={styleAdd.window}>
            <Counter value={value} maxValue={maxValue}/>
            <Buttons buttons={buttons} />
        </div>
    );
};

