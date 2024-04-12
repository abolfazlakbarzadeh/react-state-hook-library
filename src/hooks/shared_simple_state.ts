import { useContext, useEffect } from "react";
import { ReactStateHookContext } from "../provider/provider";
import { IUseSharedStateHook } from "./types.d";

export const useSharedSimpleHook: IUseSharedStateHook = (value) => {
  const context = useContext(ReactStateHookContext);

  if (!context) {
    throw Error(
      "Please make sure you wrap your component that uses the shared mode hook with the shared mode hook provider."
    );
  }
  useEffect(() => {
    if (typeof value != "undefined") context.functions.update(value);
  }, []);

  return [context.state as any, context.functions.update, context.functions];
};
