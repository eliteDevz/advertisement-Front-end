import React, { useState } from "react";

const SearchAdverts = ({ onSearch }) => {
  //onSearch was passed as a prop
  // State to store the input value
  const [searchQuery, setSearchQuery] = useState("");

  // Update state when user types
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search button click
  const handleSearchClick = () => {
    // Call the onSearch function with the single input search query
    onSearch({ query: searchQuery });
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      {/* Single Input Field */}
      <div className="flex items-center space-x-2">
        <label htmlFor="search" className="text-gray-700">
          Search:
        </label>
        <input
          type="text"
          name="search"
          id="search"
          value={searchQuery}
          onChange={handleInputChange}
          className="border rounded p-2"
          placeholder="Search by title or category"
        />
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearchClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchAdverts;
