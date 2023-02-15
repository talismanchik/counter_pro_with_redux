import React from 'react';
import {Settings} from "./Settings";
import {Buttons} from "../buttons/Buttons";
import styleAdd from '../../App.module.css'
import {initialStateType} from "../../state/counterReducer";

export type buttonType = {
    name: string,
    onClick: () => void
    block?: boolean
}
type SettingsWindowPropsType = {
    buttons: buttonType[]
    counterState: initialStateType
    increaseMaxValue: () => void
    decreaseMaxValue: () => void
    increaseMinValue: () => void
    decreaseMinValue: () => void
}

export const SettingsWindow: React.FC<SettingsWindowPropsType> = ({
                                                                      buttons,
                                                                      increaseMinValue,
                                                                      decreaseMaxValue,
                                                                      increaseMaxValue,
                                                                      decreaseMinValue,
                                                                      counterState
                                                                  }) => {
    return (
        <div className={styleAdd.window}>
            <Settings increaseMaxValue={increaseMaxValue}
                      decreaseMaxValue={decreaseMaxValue}
                      increaseMinValue={increaseMinValue}
                      decreaseMinValue={decreaseMinValue}
                      counterState={counterState}
            />
            <Buttons buttons={buttons}/>
        </div>
    );
};