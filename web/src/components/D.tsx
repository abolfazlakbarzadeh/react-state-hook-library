import { useCallback } from "react";
import { useSharedSimpleHook } from "../../../";
import { Shared } from "./shared_jsx";

const D = () => {
  const [state, setState] = useSharedSimpleHook();

  const handleUpdate = useCallback(() => {
    setState("items", [...state.items, "new from D"]);
  }, [setState, state]);

  return (
    <Shared
      title="State in Component D"
      state={state}
      onDispatch={handleUpdate}
    />
  );
};

export default D;
