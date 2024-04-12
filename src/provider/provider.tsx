import React, { Reducer, createContext, useMemo, useReducer } from "react";
import { IDispatchAction, IProviderContext, IReactHookProvider } from "./types";
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
    Reducer<IProviderContext["state"], IDispatchAction>,
    IProviderContext["state"]
  >(
    (state, dispatch) => reducer(_.cloneDeep(state), dispatch),
    {},
    () => Object.assign({}, INTIAL_STATE, initialState)
  );

  const functions = useMemo(() => providerFunctions(state, dispatch), [state]);

  return (
    <ReactHookContext.Provider
      value={{
        state,
        functions,
      }}
    >
      {children}
    </ReactHookContext.Provider>
  );
};
