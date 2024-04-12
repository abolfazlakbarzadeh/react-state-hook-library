import React, { Reducer, createContext, useMemo, useReducer } from "react";
import {
  IDispatchAction,
  IProviderContext,
  IReactHookProvider,
  IState,
} from "./types.d";
import reducer from "./reducer";
import providerFunctions from "./functions";
import { INTIAL_STATE } from "./constants";
import _ from "lodash";

// @ts-ignore
export const ReactStateHookContext = createContext<IProviderContext>();

export const ReactStateHookProvider: IReactHookProvider = ({
  children,
  initialState,
}) => {
  const [state, dispatch] = useReducer<
    Reducer<IState, IDispatchAction>,
    IState
  >(
    (state, dispatch) => reducer(_.cloneDeep(state), dispatch),
    { current: {} },
    () => ({
      // Check if there is an initial state of the provider
      current:
        Object.keys(INTIAL_STATE).length || initialState
          ? Object.assign({}, INTIAL_STATE, initialState)
          : undefined,
    })
  );

  const functions = useMemo(() => providerFunctions(state, dispatch), [state]);

  return (
    <ReactStateHookContext.Provider
      value={{
        state: state.current,
        functions,
      }}
    >
      {children}
    </ReactStateHookContext.Provider>
  );
};
