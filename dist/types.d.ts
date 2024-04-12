import { Dispatch, FC, PropsWithChildren } from "react";
declare const INTIAL_STATE: {};
declare const _default: (state: IProviderContext['state'], dispatch: Dispatch<IDispatchAction>) => {
    update: (key: unknown, value?: unknown) => void;
};
interface IReactHookProviderProps {
    initialState?: {
        [k: string]: any;
    };
}
type IReactHookProvider = FC<PropsWithChildren<IReactHookProviderProps>>;
type IState = {
    current: IReactHookProviderProps["initialState"] & typeof INTIAL_STATE;
};
type IProviderContext = {
    state: IState["current"];
    functions: ReturnType<typeof functions>;
};
interface IDispatchAction {
    key: string;
    payload: {
        key: unknown;
        value?: unknown;
    };
}
export const ReactHookProvider: IReactHookProvider;
type IUseSharedStateHook = (state?: any) => [IState["current"], ReturnType<typeof functions>["update"]];
export const useSharedSimpleHook: IUseSharedStateHook;

//# sourceMappingURL=types.d.ts.map
