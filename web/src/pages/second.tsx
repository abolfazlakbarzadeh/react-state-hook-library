import React from "react";
import C from "../components/C";
import D from "../components/D";
import { Link } from "react-router-dom";

const SecondPage = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h2 className="font-bold">Second Page</h2>
        <div className="flex gap-4">
          <C />
          <D />
        </div>
        <Link to={"/"} className="text-4 cursor-pointer px-4 py-2 border">
          Go to home page
        </Link>
      </div>
    </div>
  );
};

export default SecondPage;
