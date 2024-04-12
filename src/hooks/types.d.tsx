import functions from "../provider/functions";
import { IState } from "../provider/types.d";
export type IUseSharedStateHook = <T = IState["current"]>(
  state?: T
) => [
  T,
  (
    | ((state: ((state: T) => T) | T) => void)
    | ReturnType<typeof functions>["update"]
  ),
  ReturnType<typeof functions>
];
