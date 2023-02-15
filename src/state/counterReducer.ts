export type increaseMaxValueAT = {
    type: 'INCREASE_MAX_VALUE'
}
export type decreaseMaxValueAT = {
    type: 'DECREASE_MAX_VALUE'
}
export type increaseMinValueAT = {
    type: 'INCREASE_MIN_VALUE'
}
export type decreaseMinValueAT = {
    type: 'DECREASE_MIN_VALUE'
}
export type addValueCounterAT = {
    type: 'ADD_VALUE_COUNTER'
}
export type resetValueCounterAT = {
    type: 'RESET_VALUE_COUNTER'
}
export type setSettingsAT = {
    type: 'SET_SETTINGS'
}
export type toSetSettingsAT = {
    type: 'TO_SET_SETTINGS'
}


export type ActionType = increaseMaxValueAT |
    decreaseMaxValueAT |
    increaseMinValueAT |
    decreaseMinValueAT |
    addValueCounterAT |
    resetValueCounterAT |
    setSettingsAT |
    toSetSettingsAT

export type initialStateType = {
    maxValue: number,
    minValue: number,
    counterValue: number,
    error: string,
    isSetBlock: boolean
}
const initialState: initialStateType = {
    maxValue: 0,
    minValue: 0,
    counterValue: 0,
    error: '',
    isSetBlock: true,
}

export const counterReducer = (state: initialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'INCREASE_MAX_VALUE':
            return state.isSetBlock
                ? {...state, maxValue: state.maxValue + 1, isSetBlock: false}
                : {...state, maxValue: state.maxValue + 1}
        case "DECREASE_MAX_VALUE":
            return state.isSetBlock
                ? {...state, maxValue: state.maxValue - 1, isSetBlock: false}
                : {...state, maxValue: state.maxValue - 1}
        case "INCREASE_MIN_VALUE":
            return state.isSetBlock
                ? {...state, minValue: state.minValue + 1, isSetBlock: false}
                : {...state, minValue: state.minValue + 1}
        case "DECREASE_MIN_VALUE":
            return state.isSetBlock
                ? {...state, minValue: state.minValue - 1, isSetBlock: false}
                : {...state, minValue: state.minValue - 1}
        case "ADD_VALUE_COUNTER":
            return {...state, counterValue: state.counterValue + 1}
        case "RESET_VALUE_COUNTER":
            return {...state, counterValue: state.minValue}
        case "SET_SETTINGS":
            return {...state, counterValue: state.minValue, isSetBlock: true}
        case "TO_SET_SETTINGS":
            return {...state, counterValue: state.minValue, isSetBlock: false}
        default:
            return state
    }
}

export const increaseMaxValueAC = (): increaseMaxValueAT => {
    return {type: "INCREASE_MAX_VALUE"}
}
export const decreaseMaxValueAC = (): decreaseMaxValueAT => {
    return {type: "DECREASE_MAX_VALUE"}
}
export const increaseMinValueAC = (): increaseMinValueAT => {
    return {type: "INCREASE_MIN_VALUE"}
}
export const decreaseMinValueAC = (): decreaseMinValueAT => {
    return {type: "DECREASE_MIN_VALUE"}
}
export const addValueCounterAC = (): addValueCounterAT => {
    return {type: "ADD_VALUE_COUNTER"}
}
export const resetValueCounterAC = (): resetValueCounterAT => {
    return {type: "RESET_VALUE_COUNTER"}
}
export const setSettingsAC = (): setSettingsAT => {
    return {type: "SET_SETTINGS"}
}
export const toSetSettingsAC = (): toSetSettingsAT => {
    return {type: "TO_SET_SETTINGS"}
}

