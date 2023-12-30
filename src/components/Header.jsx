import { useState } from "react";

import iconoir from "../assets/iconoir_book.svg";
import arrow from "../assets/Path 3.svg";
import moon from "../assets/moon.svg";

const Header = ({ value }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { isDark, setIsDark, font, setFont } = value;

  const themeToggleHandler = () => {
    setIsDark(!isDark);
  };

  const dropdownHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center mt-6 px-4 lg;px-0 lg:mt-14 relative">
      <img src={iconoir} alt="logo" />
      <div className="flex items-center gap-7">
        <button
          onClick={dropdownHandler}
          className={`flex items-center gap-2 font-['${font}'] font-bold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {font} <img src={arrow} alt="arrow" />
        </button>
        <div className="w-[1px] h-[32px] bg-[#E9E9E9]"></div>
        <button onClick={themeToggleHandler} className="flex gap-5">
          <div
            className={` w-10 h-6 rounded-full flex items-center ${
              isDark ? "bg-[#A445ED]" : "bg-[#757575]"
            }`}
          >
            <div
              className={`rounded-full w-[16px] h-[16px] transition-all duration-300 bg-white ${
                isDark ? "ml-5" : "ml-1"
              }`}
            ></div>
          </div>
          <img src={moon} alt="moon icon" />
        </button>
      </div>
      <div
        className={`p-6 flex flex-col items-start absolute right-32 top-10 shadow-md rounded-2xl transition-all duration-300 font-bold
        ${isOpen ? "opacity-100" : "opacity-0"}
        ${
          isDark
            ? "bg-[#1F1F1F] text-white shadow-[#A445ED]"
            : "bg-white text-black"
        }`}
      >
        <button
          className="font-['Sans Serif']"
          onClick={() => setFont("Sans Serif") || setIsOpen(!isOpen)}
        >
          Sans Serif
        </button>
        <button
          className="font-['Serif']"
          onClick={() => setFont("Serif") || setIsOpen(!isOpen)}
        >
          Serif
        </button>
        <button
          className="font-['Inconsolata']"
          onClick={() => setFont("Inconsolata") || setIsOpen(!isOpen)}
        >
          Mono
        </button>
      </div>
    </div>
  );
};

export default Header;
