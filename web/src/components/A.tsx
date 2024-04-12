import { useCallback } from "react";
import { useSharedSimpleHook } from "../../../";
import { Shared } from "./shared_jsx";

const A = () => {
  const [state, setState] = useSharedSimpleHook(
    "value declared from component A"
  );

  const handleUpdate = useCallback(() => {
    setState("new value (from Component A)");
  }, [setState]);

  return (
    <Shared
      title="State in Component A"
      state={state}
      onDispatch={handleUpdate}
    />
  );
};

export default A;
