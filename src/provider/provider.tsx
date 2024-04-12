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
export const ReactHookContext = createContext<IProviderContext>();

export const ReactHookProvider: IReactHookProvider = ({
  children,
  initialState,
}) => {
  const [state, dispatch] = useReducer<
    Reducer<IState, IDispatchAction>,
    IState
  >(
    (state, dispatch) => reducer(_.cloneDeep(state), dispatch),
    { current: {} },
    () => ({ current: Object.assign({}, INTIAL_STATE, initialState) })
  );

  const functions = useMemo(() => providerFunctions(state, dispatch), [state]);

  return (
    <ReactHookContext.Provider
      value={{
        state: state.current,
        functions,
      }}
    >
      {children}
    </ReactHookContext.Provider>
  );
};
