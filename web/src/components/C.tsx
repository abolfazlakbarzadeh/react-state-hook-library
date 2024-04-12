import { useCallback } from "react";
import { useSharedSimpleHook } from "../../../";
import { Shared } from "./shared_jsx";

const C = () => {
  const [state, setState] = useSharedSimpleHook();

  const handleUpdate = useCallback(() => {
    setState("items", [...state.items, "new from C"]);
  }, [setState, state]);

  return (
    <Shared
      title="State in Component C"
      state={state}
      onDispatch={handleUpdate}
    />
  );
};

export default C;
