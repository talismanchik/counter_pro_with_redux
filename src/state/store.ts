import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counterReducer";

const rootReducer = combineReducers({
    counterState: counterReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = legacy_createStore(rootReducer)