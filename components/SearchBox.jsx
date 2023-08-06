"use client";

import { useState } from "react";

const SearchBox = () => {
  const [input, setInput] = useState("");

  /* handleInputSubmit */
  const handleInputSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="">
      <form
        onSubmit={handleInputSubmit}
        className="wrapper flex justify-between items-center py-4 gap-2"
      >
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          required
          type="text"
          placeholder="Search keywords.."
          className="w-full px-2 h-14 rounded-md bg-transparent outline-none placeholder:gray-500 flex-1 border dark:border-gray-600"
        />
        <button
          type="submit"
          className="text-amber-500 disabled:text-amber-400"
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchBox;
