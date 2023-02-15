import React from 'react';
import style from './CounterWindow.module.css'

type CounterPropsType = {
    value: number
    maxValue: number
}

export const Counter = (props: CounterPropsType) => {
    return (
        <div className={style.counter}>
<span className={props.value === props.maxValue? style.maxValue :style.valueSpan}>{props.value}</span>
        </div>
    );
};