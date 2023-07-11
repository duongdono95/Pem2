"use client";

import React, { useState } from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  const [searchContent, setSearchContent] = useState();
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search Communities ..." />
    </div>
  );
};

export default SearchBar;
