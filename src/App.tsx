import React, {useState} from 'react';

import style from './App.module.css';
import {OneFrame} from "./components/01_oneFrame/OneFrame";
import {TwoFrame} from "./components/02_twoFrame/TwoFrame";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {
    addValueCounterAC, decreaseMaxValueAC,
    decreaseMinValueAC, increaseMaxValueAC,
    increaseMinValueAC, initialStateType,
    resetValueCounterAC, setSettingsAC, toSetSettingsAC
} from "./state/counterReducer";
import SyncAltIcon from '@mui/icons-material/SyncAlt';

function App() {
    const [twoFrame, setTwoFrame] = useState(true)

    const dispatch = useDispatch()
    const counterState = useSelector<AppRootStateType, initialStateType>(state => state.counterState)

    const addValue = () => {
        dispatch(addValueCounterAC())
    }
    const resetValue = () => {
        dispatch(resetValueCounterAC())
    }
    const setSettings = ()=> {
        dispatch(setSettingsAC())
    }
    const toSetSettings = ()=>{
        dispatch(toSetSettingsAC())
    }
    const increaseMaxValue = () => {
        dispatch(increaseMaxValueAC())
    }
    const decreaseMaxValue = () => {
        dispatch(decreaseMaxValueAC())
    }
    const increaseMinValue = () => {
        dispatch(increaseMinValueAC())
    }
    const decreaseMinValue = () => {
        dispatch(decreaseMinValueAC())
    }

    return (
        <div className={style.App}>
            {twoFrame
                ? <TwoFrame counterState={counterState}
                            increaseMaxValue={increaseMaxValue}
                            decreaseMaxValue={decreaseMaxValue}
                            increaseMinValue={increaseMinValue}
                            decreaseMinValue={decreaseMinValue}
                            addValue={addValue}
                            resetValue={resetValue}
                            setSettings={setSettings}
                />
                : <OneFrame
                    counterState={counterState}
                    increaseMaxValue={increaseMaxValue}
                    decreaseMaxValue={decreaseMaxValue}
                    increaseMinValue={increaseMinValue}
                    decreaseMinValue={decreaseMinValue}
                    addValue={addValue}
                    resetValue={resetValue}
                    toSetSettings={toSetSettings}
                    setSettings={setSettings}
                />
            }
            <SyncAltIcon className={style.altIcon} sx={{ fontSize: 50 }} onClick={() => setTwoFrame(!twoFrame)}/>
        </div>
    );
}

export default App;
