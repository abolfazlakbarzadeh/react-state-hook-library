import functions from "../provider/functions";
import { IState } from "../provider/types.d";
export type IUseSharedStateHook = (
  state?: any
) => [IState["current"], ReturnType<typeof functions>["update"]];
