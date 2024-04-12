import { useCallback } from "react";
import { useSharedSimpleHook } from "../../../";
import { Shared } from "./shared_jsx";

const B = () => {
  const [state, setState] = useSharedSimpleHook();

  const handleUpdate = useCallback(() => {
    setState("new value (from Component B)");
  }, [setState]);

  return (
    <Shared
      title="State in Component B"
      state={state}
      onDispatch={handleUpdate}
    />
  );
};

export default B;
