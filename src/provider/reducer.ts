import { Reducer } from "react";
import { IDispatchAction, IProviderContext, IState } from "./types.d";

const updater = (state: IState, key: any, value: any) => {
  // check if content type of key is string or object
  if (typeof key !== "object") {
    // if passed payload is a state updater function, then invoke it and update state
    if (typeof key === "function") {
      const newState = key(state.current);
      state.current = newState;
      return state;
    }
    // if there is no specific value as value payload, then set key's value as new state
    if (!value) {
      // @ts-ignore
      state.current = key;
      return state;
    }
    // if type of the state is string then we just update the value
    if (typeof state.current !== "object") state = value;
    // but if the type of state is object we will update it according to the key
    else state.current[key] = value;
  } else if (typeof key === "object") {
    state.current = key;
  }
  return state;
};

const reducer: Reducer<IState, IDispatchAction> = (state, action) => {
  const { key, value } = action.payload;

  // this switch case can be developed and has nested state updater
  switch (action.key) {
    default: {
      return updater(state, key, value);
    }
  }
};

export default reducer;
