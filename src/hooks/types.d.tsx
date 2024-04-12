import functions from "../provider/functions";
import { IState } from "../provider/types.d";
export type IUseSharedStateHook = <T = IState["current"]>(
  state?: T
) => [
  T,
  (...props: Parameters<ReturnType<typeof functions>["update"]>) => void,

  ReturnType<typeof functions>
];
