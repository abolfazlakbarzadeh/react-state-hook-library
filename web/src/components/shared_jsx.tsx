import React, { FC } from "react";

type IShared = FC<{
  title: string;
  state: any;
  onDispatch: () => void;
}>;

export const Shared: IShared = ({ title, state, onDispatch }) => {
  return (
    <div className="bg-white p-6 flex flex-col gap-4 border rounded-3xl">
      <div className="text-4 text-center">{title}</div>
      <pre className="border p-4">
        {typeof state === "object" ? JSON.stringify(state, null, 4) : state}
      </pre>
      <div
        className="bg-blue-600 text-white px-4 py-2 rounded-2xl text-center cursor-pointer"
        onClick={onDispatch}
      >
        Update
      </div>
    </div>
  );
};
