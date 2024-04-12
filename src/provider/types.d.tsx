import { FC, PropsWithChildren } from "react";
import { INTIAL_STATE } from "./constants";
import functions from "./functions";

// Provider TSX
export interface IReactHookProviderProps {
  initialState?:
    | {
        [k: string]: any;
      }
    | any;
}

export type IReactHookProvider = FC<PropsWithChildren<IReactHookProviderProps>>;

export type IState = {
  current: IReactHookProviderProps["initialState"] & typeof INTIAL_STATE;
};
// Provider Context
export type IProviderContext = {
  state: IState["current"];
  functions: ReturnType<typeof functions>;
};

// misc
export interface IDispatchAction {
  key: string;
  payload: {
    key: unknown;
    value?: unknown;
  };
}
