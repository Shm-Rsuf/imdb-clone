"use client";

import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-20 text-2xl">
      <h2 className="text-rose-500">Something went wrong</h2>
      <button
        onClick={() => reset()}
        className="hover:text-amber-500 duration-300 cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
