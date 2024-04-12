import "@testing-library/jest-dom";
import React, { FC } from "react";
import { ReactStateHookProvider } from "../provider";
import { useSharedSimpleHook } from "../react-hook";
import { useCallback } from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

export const testIDs = {
  stateString: "state-stringify",
  updateButton: "update",
};
type IShared = FC<{
  title: string;
  state: any;
  onDispatch: () => void;
  testSuffix: string;
}>;
export const Shared: IShared = ({ title, state, onDispatch, testSuffix }) => {
  return (
    <div className="bg-white p-6 flex flex-col gap-4 border rounded-3xl">
      <div className="text-4 text-center">{title}</div>
      <pre
        data-testid={`${testIDs.stateString}-${testSuffix}`}
        className="border p-4"
      >
        {typeof state === "object" ? JSON.stringify(state, null, 4) : state}
      </pre>
      <div
        data-testid={`${testIDs.updateButton}-${testSuffix}`}
        className="bg-blue-600 text-white px-4 py-2 rounded-2xl text-center cursor-pointer"
        onClick={onDispatch}
      >
        Update
      </div>
    </div>
  );
};
const ComponentA = () => {
  const [state, setState] = useSharedSimpleHook(
    "value declared from component A"
  );

  const handleUpdate = useCallback(() => {
    setState("new value (from Component A)");
  }, [setState]);

  return (
    <Shared
      testSuffix="a"
      title="State in Component A"
      state={state}
      onDispatch={handleUpdate}
    />
  );
};
const ComponentB = () => {
  const [state, setState] = useSharedSimpleHook();

  const handleUpdate = useCallback(() => {
    setState("new value (from Component B)");
  }, [setState]);

  return (
    <Shared
      testSuffix="b"
      title="State in Component B"
      state={state}
      onDispatch={handleUpdate}
    />
  );
};

test("manage simple state", async () => {
  render(
    <ReactStateHookProvider>
      <ComponentA />
      <ComponentB />
    </ReactStateHookProvider>
  );

  const stateStringAElement = await screen.findByTestId(
    `${testIDs.stateString}-a`
  );
  const updateStateAElement = await screen.findByTestId(
    `${testIDs.updateButton}-a`
  );
  const stateStringBElement = await screen.findByTestId(
    `${testIDs.stateString}-b`
  );
  const updateStateBElement = await screen.findByTestId(
    `${testIDs.updateButton}-b`
  );

  // first we expect the stringified stated has decleration value
  expect(stateStringAElement).toHaveTextContent(
    "value declared from component A"
  );

  await act(async () => {
    // then we click on update button to update state from component A
    await updateStateAElement.click();
  });
  // now we expect that both component A and B have the same state
  expect(stateStringAElement).toHaveTextContent("new value (from Component A)");
  expect(stateStringBElement).toHaveTextContent("new value (from Component A)");

  await act(async () => {
    // now we click on update button in component B
    await updateStateBElement.click();
  });
  // now we expect that both component A and B have the same state that shows state has updated from component B
  expect(stateStringAElement).toHaveTextContent("new value (from Component B)");
  expect(stateStringBElement).toHaveTextContent("new value (from Component B)");
});
