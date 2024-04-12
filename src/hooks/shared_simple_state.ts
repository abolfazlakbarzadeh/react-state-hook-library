import { useContext, useEffect } from "react";
import { ReactHookContext } from "../provider/provider";
import { IUseSharedStateHook } from "./types.d";

export const useSharedSimpleHook: IUseSharedStateHook = (value) => {
  const context = useContext(ReactHookContext);

  if (!context) {
    throw Error(
      "Please make sure you wrap your component that uses the shared mode hook with the shared mode hook provider."
    );
  }
  useEffect(() => {
    if (value) context.functions.update(value);
  }, []);

  return [context.state, context.functions.update];
};
