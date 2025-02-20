"use client";

import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mb-6 flex justify-end">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2CD6C9]"
      />
    </div>
  );
};

export default SearchBar;
