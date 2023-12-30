import { useState } from "react";
import search from "../assets/Shape.svg";

const SearchBox = ({ value }) => {
  const [inputValue, setInputValue] = useState("Search for any word…");
  const [inputError, setInputError] = useState(false);

  const { isDark, font, setSearchValue } = value;

  const searchChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    setSearchValue(inputValue);
    if (inputValue === "" || inputValue === "Search for any word…") {
      setInputError(true);
    } else {
      setInputError(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const clearInput = () => {
    setInputValue("");
  };

  const blurInput = () => {
    if (inputValue === "") {
      setInputValue("Search for any word…");
    }
  };

  let darkModeStyles;
  if (isDark) {
    darkModeStyles = "bg-[#1F1F1F] text-white";
  } else {
    darkModeStyles = "bg-[#F4F4F4] text-black";
  }

  let errorStyles;
  if (inputError) {
    errorStyles = "border-[#FF5252]";
  } else {
    if (isDark) {
      errorStyles = "border-[#1F1F1F]";
    } else {
      errorStyles = "border-[#F4F4F4]";
    }
  }
  const combinedStyles = `${darkModeStyles} border-2 hover:border-[#A445ED] transition-all duration-300 py-5 mx-3 lg:mx-0 px-6 mt-14 ${errorStyles}`;

  return (
    <>
      <div
        className={`flex justify-between lg:w-full font-['${font}'] rounded-2xl text-xl ${combinedStyles}`}
      >
        <input
          type="text"
          value={inputValue}
          onClick={clearInput}
          onBlur={blurInput}
          onChange={searchChangeHandler}
          onKeyPress={handleKeyPress}
          className={`bg-transparent focus:outline-none w-[90%] ${
            inputValue === "Search for any word…" ? "opacity-25" : "opacity-100"
          }`}
        />
        <button onClick={handleSearch}>
          <img src={search} alt="search" />
        </button>
      </div>
      {inputError && (
        <p className="text-[#FF5252] text-xl">Whoops, can’t be empty…</p>
      )}
    </>
  );
};

export default SearchBox;
