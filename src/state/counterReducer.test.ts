import {
    addValueCounterAC,
    counterReducer,
    decreaseMaxValueAC, decreaseMinValueAC,
    increaseMaxValueAC,
    increaseMinValueAC,
    initialStateType, resetValueCounterAC
} from "./counterReducer";

test('max value should be increase', ()=>{
const startState: initialStateType = {
    maxValue:10,
    minValue: 1,
    counterValue:3,
    error: '',
    isSetBlock: true,
}
const endState = counterReducer(startState, increaseMaxValueAC())
    expect(endState.maxValue).toBe(11)
})

test ('max value should be decrease', ()=>{
    const startState: initialStateType = {
        maxValue:10,
        minValue: 1,
        counterValue:3,
        error: '',
        isSetBlock: true,
    }
    const endState = counterReducer(startState, decreaseMaxValueAC())
    expect(endState.maxValue).toBe(9)
})

test('min value should be increase', ()=>{
    const startState: initialStateType = {
        maxValue:10,
        minValue: 1,
        counterValue:3,
        error: '',
        isSetBlock: true,
    }
    const endState = counterReducer(startState, increaseMinValueAC())
    expect(endState.minValue).toBe(2)
})

test ('min value should be decrease', ()=>{
    const startState: initialStateType = {
        maxValue:10,
        minValue: 1,
        counterValue:3,
        error: '',
        isSetBlock: true,
    }
    const endState = counterReducer(startState, decreaseMinValueAC())
    expect(endState.minValue).toBe(0)
})

test ('counter value should be increase', ()=>{
    const startState: initialStateType = {
        maxValue:10,
        minValue: 1,
        counterValue:3,
        error: '',
        isSetBlock: true,
    }
    const endState = counterReducer(startState, addValueCounterAC())
    expect(endState.counterValue).toBe(4)
})

test ('counter value should be reset', ()=>{
    const startState: initialStateType = {
        maxValue:10,
        minValue: 1,
        counterValue:3,
        error: '',
        isSetBlock: true,
    }
    const endState = counterReducer(startState, resetValueCounterAC())
    expect(endState.counterValue).toBe(1)
})