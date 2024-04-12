import { FC, PropsWithChildren } from "react"
import { INTIAL_STATE } from "./constants"
import functions from "./functions"

// Provider TSX
declare interface IReactHookProviderProps {
    initialState?: {
        [k:string]: any
    }
}

declare type IReactHookProvider = FC<PropsWithChildren<IReactHookProviderProps>>

// Provider Context
declare type IProviderContext = {
    state: IReactHookProviderProps['initialState'] & typeof INTIAL_STATE,
    functions: ReturnType<typeof functions>
}

// misc
declare interface IDispatchAction {
    key: string,
    payload: {
        key: unknown,
        value?: unknown
    }
}