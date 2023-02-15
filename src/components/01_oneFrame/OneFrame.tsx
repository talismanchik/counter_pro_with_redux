import React, {useState} from 'react';
import {SettingsWindow} from "../settingWindow/SettingsWindow";
import {CounterWindow} from "../counterWindow/CounterWindow";
import {initialStateType} from "../../state/counterReducer";

type OneFramePropsType = {
    counterState: initialStateType
    increaseMaxValue: () => void
    decreaseMaxValue: () => void
    increaseMinValue: () => void
    decreaseMinValue: () => void
    addValue: () => void
    resetValue: () => void
    setSettings: () => void
    toSetSettings: () => void
}

export const OneFrame: React.FC<OneFramePropsType> = ({
                                                          counterState,
                                                          increaseMaxValue,
                                                          increaseMinValue,
                                                          decreaseMaxValue,
                                                          decreaseMinValue,
                                                          addValue,
                                                          resetValue,
                                                          setSettings,
                                                          toSetSettings,
                                                      }) => {
    const [isSetting, setIsSetting] = useState(true)
const toSetButton = ()=>{
    setIsSetting(true)
    toSetSettings()
}
    const setButton = ()=>{
        setIsSetting(false)
        setSettings()
    }

    const buttonsForSettings = [
        {
            name: 'SET',
            onClick: setButton,
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
        },
        {
            name: 'To SET',
            onClick: toSetButton,
        }
    ]

    return (
        <div>
            {
                isSetting
                    ? <SettingsWindow buttons={buttonsForSettings}
                                      counterState={counterState}
                                      increaseMaxValue={increaseMaxValue}
                                      decreaseMaxValue={decreaseMaxValue}
                                      increaseMinValue={increaseMinValue}
                                      decreaseMinValue={decreaseMinValue}/>
                    : <CounterWindow buttons={buttonsForCounter}  maxValue={counterState.maxValue} minValue={counterState.minValue} value={counterState.counterValue}/>
            }
        </div>
    );
};

