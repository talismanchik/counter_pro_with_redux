import React from 'react';
import {SettingsWindow} from "../settingWindow/SettingsWindow";
import {CounterWindow} from "../counterWindow/CounterWindow";
import style from './TwoFrame.module.css'
import {initialStateType} from "../../state/counterReducer";


type TwoFramePropsType = {
    counterState: initialStateType
    increaseMaxValue: () => void
    decreaseMaxValue: () => void
    increaseMinValue: () => void
    decreaseMinValue: () => void
    addValue: () => void
    resetValue: () => void
    setSettings: () => void
}

export const TwoFrame: React.FC<TwoFramePropsType> = ({
                                                          counterState,
                                                          increaseMaxValue,
                                                          increaseMinValue,
                                                          decreaseMaxValue,
                                                          decreaseMinValue,
                                                          addValue,
                                                          resetValue,
                                                          setSettings,
                                                      }) => {


    const buttonsForSettings = [
        {
            name: 'SET',
            onClick: setSettings,
            block: counterState.isSetBlock
        }
    ]
    const buttonsForCounter = [
        {
            name: 'INC',
            onClick: addValue,
            block: !counterState.isSetBlock || counterState.counterValue === counterState.maxValue
        },
        {
            name: 'RESET',
            onClick: resetValue,
            block: !counterState.isSetBlock || counterState.counterValue === counterState.minValue
        }
    ]

    return (
        <div className={style.twoFrame}>
            <SettingsWindow counterState={counterState}
                            increaseMaxValue={increaseMaxValue}
                            decreaseMaxValue={decreaseMaxValue}
                            increaseMinValue={increaseMinValue}
                            decreaseMinValue={decreaseMinValue}
                            buttons={buttonsForSettings}/>
            <CounterWindow buttons={buttonsForCounter} maxValue={counterState.maxValue} minValue={counterState.minValue} value={counterState.counterValue}/>
        </div>
    );
};

