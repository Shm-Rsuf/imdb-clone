"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBox = () => {
  const [inputText, setInputText] = useState("");
  const router = useRouter();

  /* handleInputSubmit */
  const handleInputSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${inputText}`);
    console.log("clicked");
  };

  return (
    <section className="">
      <form
        onSubmit={handleInputSubmit}
        className="wrapper flex justify-between items-center py-4"
      >
        <input
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
          required
          type="text"
          placeholder="Search keywords..."
          className="w-[90%] px-2 h-12 rounded-full bg-transparent outline-none placeholder:gray-500 border rounded-r-none dark:border-gray-600"
        />
        <button
          disabled={!inputText}
          type="submit"
          className="text-amber-500 disabled:text-amber-400 p-2 w-[15%] sm:w-[10%] h-12 border border-l-0 dark:border-gray-600 rounded-full rounded-l-none flex justify-center items-center"
        >
          <FiSearch className="text-2xl md:text-3xl cursor-pointer" />
        </button>
      </form>
    </section>
  );
};

export default SearchBox;
