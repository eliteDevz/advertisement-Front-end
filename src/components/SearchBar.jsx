const SearchBar = () => {
  return (
    <div className="flex mx-auto">
      <input
        id="emailInput"
        type="email"
        className="h-[3rem] w-[500px] rounded-l-[40px] px-[25px] bg-[#FFFFFF] border-[2px]"
        placeholder="Search by category, ads or keywords"
      />
      <button
        type="submit"
        className=" h-[3rem] bg-[#e41e1b] px-[25px] rounded-r-[40px] text-white"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;