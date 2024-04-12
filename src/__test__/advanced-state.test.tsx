import "@testing-library/jest-dom";
import React, { FC } from "react";
import { ReactStateHookProvider } from "../provider";
import { useSharedSimpleHook } from "../react-hook";
import { useCallback } from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Shared, testIDs } from "./simple-state.test";

const ComponentC = () => {
  const [state, setState] = useSharedSimpleHook();

  const handleUpdate = useCallback(() => {
    setState("items", [...state.items, "new from C"]);
  }, [setState, state]);

  return (
    <Shared
      testSuffix="c"
      title="State in Component C"
      state={state}
      onDispatch={handleUpdate}
    />
  );
};
const ComponentD = () => {
  const [state, setState] = useSharedSimpleHook();

  const handleUpdate = useCallback(() => {
    setState("items", [...state.items, "new from D"]);
  }, [setState, state]);

  return (
    <Shared
      testSuffix="d"
      title="State in Component D"
      state={state}
      onDispatch={handleUpdate}
    />
  );
};

test("manage more advanced state", async () => {
  render(
    <ReactStateHookProvider
      initialState={{ items: [], stateKey: "State Value" }}
    >
      <ComponentC />
      <ComponentD />
    </ReactStateHookProvider>
  );

  const stateStringCElement = await screen.findByTestId(
    `${testIDs.stateString}-c`
  );
  const updateStateCElement = await screen.findByTestId(
    `${testIDs.updateButton}-c`
  );
  const stateStringDElement = await screen.findByTestId(
    `${testIDs.stateString}-d`
  );
  const updateStateDElement = await screen.findByTestId(
    `${testIDs.updateButton}-d`
  );

  // first we expect the stringified stated has decleration value
  expect(stateStringCElement).toHaveTextContent(
    `{ "items": [], "stateKey": "State Value" }`
  );

  await act(async () => {
    // then we click on update button to update state from component A
    await updateStateCElement.click();
  });
  // now we expect that both component A and B have the same state
  expect(stateStringCElement).toHaveTextContent(
    `{ "items": [ "new from C" ], "stateKey": "State Value" }`
  );
  expect(stateStringDElement).toHaveTextContent(
    `{ "items": [ "new from C" ], "stateKey": "State Value" }`
  );

  await act(async () => {
    // now we click on update button in component B
    await updateStateDElement.click();
  });
  // now we expect that both component A and B have the same state that shows state has updated from component B
  expect(stateStringCElement).toHaveTextContent(
    `{ "items": [ "new from C", "new from D" ], "stateKey": "State Value" }`
  );
  expect(stateStringDElement).toHaveTextContent(
    `{ "items": [ "new from C", "new from D" ], "stateKey": "State Value" }`
  );
});
