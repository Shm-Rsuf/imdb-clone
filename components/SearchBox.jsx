"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

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
        className="wrapper flex justify-between items-center py-4 gap-2"
      >
        <input
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
          required
          type="text"
          placeholder="Search keywords.."
          className="w-full px-2 h-14 rounded-md bg-transparent outline-none placeholder:gray-500 flex-1 border dark:border-gray-600"
        />
        <button
          disabled={!inputText}
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
