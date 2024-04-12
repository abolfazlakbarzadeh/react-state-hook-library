import { FC } from "react";
import { IReactHookProviderProps, ReactHookProvider } from "../../";

export const withReactHook = (
  Component: FC,
  providerProps?: IReactHookProviderProps
): FC => {
  return (props) => {
    return (
      <ReactHookProvider {...providerProps}>
        <Component {...props} />
      </ReactHookProvider>
    );
  };
};
