import { Dispatch } from "react";
import { IDispatchAction, IProviderContext } from "./types.d";
import { ACTION_KEYS } from "./constants";

export default (state: IProviderContext['state'], dispatch: Dispatch<IDispatchAction>) => {


    return {
        update: (key: unknown, value?: unknown) => {
            dispatch({
                key: ACTION_KEYS.update,
                payload: {
                    key,
                    value
                }
            })
        },
    }

}