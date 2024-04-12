import React from "react";
import A from "../components/A";
import B from "../components/B";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h2 className="font-bold">Home Page</h2>
        <div className="flex gap-4">
          <A />
          <B />
        </div>
        <Link to={"/second"} className="text-4 cursor-pointer px-4 py-2 border">
          Go to second page
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
