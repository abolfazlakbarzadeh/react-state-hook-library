import { Dispatch, FC, PropsWithChildren } from "react";
declare const INTIAL_STATE: {};
declare const _default: (state: IProviderContext["state"], dispatch: Dispatch<IDispatchAction>) => {
    update: (key: unknown, value?: unknown) => void;
};
interface IReactHookProviderProps {
    initialState?: {
        [k: string]: any;
    } | any;
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
export const ReactStateHookProvider: IReactHookProvider;
type IUseSharedStateHook = <T = IState["current"]>(state?: T) => [
    T,
    (...props: Parameters<ReturnType<typeof functions>["update"]>) => void,
    ReturnType<typeof functions>
];
export const useSharedSimpleHook: IUseSharedStateHook;

//# sourceMappingURL=types.d.ts.map
