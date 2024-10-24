// // import { useState } from "react";

// // const SearchBar = ({onSearch}) => {
// //      //onSearch was passed as a prop
// //   // State to store the input value
// //   const [searchQuery, setSearchQuery] = useState("");

// //   // Update state when user types
// //   const handleInputChange = (e) => {
// //     setSearchQuery(e.target.value);
// //   };

// //   // Handle search button click
// //   const handleSearchClick = () => {
// //     // Call the onSearch function with the single input search query
// //     onSearch({ query: searchQuery });
// //   };

// //   return (
// //     <div className="flex mx-auto">
// //       <input
// //         id="emailInput"
// //         type="email"
// //         className="h-[3rem] w-[500px] rounded-l-[40px] px-[25px] bg-[#FFFFFF] border-[2px]"
// //         placeholder="Search by category, ads or keywords"
// //         value={searchQuery}
// //           onChange={handleInputChange}

// //       />
// //       <button
// //         type="submit"
// //         className=" h-[3rem] bg-[#e41e1b] px-[25px] rounded-r-[40px] text-white"
// //         onClick={handleSearchClick}
// //       >
// //         Search
// //       </button>
// //     </div>
// //   );
// // }

// // export default SearchBar;

// import { useState } from "react";
// import PropTypes from "prop-types"; // Import PropTypes

// const SearchBar = ({ onSearch }) => {
//   // State to store the input value
//   const [searchQuery, setSearchQuery] = useState("");

//   // Update state when user types
//   const handleInputChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   // Handle search button click
//   const handleSearchClick = () => {
//     // Call the onSearch function with the single input search query
//     onSearch({ query: searchQuery });
//   };

//   return (
//     <div className="flex mx-auto">
//       <input
//         id="emailInput"
//         type="email"
//         className="h-[3rem] w-[500px] rounded-l-[40px] px-[25px] bg-[#FFFFFF] border-[2px]"
//         placeholder="Search by category, ads or keywords"
//         value={searchQuery}
//         onChange={handleInputChange}
//       />
//       <button
//         type="submit"
//         className=" h-[3rem] bg-[#e41e1b] px-[25px] rounded-r-[40px] text-white"
//         onClick={handleSearchClick}
//       >
//         Search
//       </button>
//     </div>
//   );
// };

// // Add PropTypes validation
// SearchBar.propTypes = {
//   onSearch: PropTypes.func.isRequired, // onSearch must be a function and is required
// };

// export default SearchBar;

import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const SearchBar = ({onSearch}) => {
  // State to store the input value
  const [searchQuery, setSearchQuery] = useState("");

  // Update state when user types
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search button click
  const handleSearchClick = async () => {
    // Call the onSearch function with the single input search query
    onSearch(searchQuery);
   
  };

  return (
    <div className="flex mx-auto">
      <input
        id="emailInput"
        type="email"
        className="h-[3rem] w-[500px] rounded-l-[40px] px-[25px] bg-[#FFFFFF] border-[2px]"
        placeholder="Search by category, ads or keywords"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className=" h-[3rem] bg-[#e41e1b] px-[25px] rounded-r-[40px] text-white"
        onClick={handleSearchClick}
      >
        Search
      </button>
    </div>
  );
};

// Add PropTypes validation
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired, // onSearch must be a function and is required
};

export default SearchBar;
