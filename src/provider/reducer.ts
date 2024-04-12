import { Reducer } from "react";
import { IDispatchAction, IProviderContext } from "./types";


const updater = (state: IProviderContext["state"], key: any, value: unknown) => {
    if (!state) {
        console.error("Current state is undefined!")
        return state
    }
    if (typeof key === "string" && value) {
        state[key] = value
    } else if (typeof key === "object") {
        state = key
    }
    return state
}


const reducer: Reducer<IProviderContext["state"], IDispatchAction>
= (state, action) => {

    const { key, value } = action.payload
    switch (action.key) {
        default: {
            return updater(state, key, value)
        }
    }

}

export default reducer