import { useState } from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import Details from "./components/Details";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [font, setFont] = useState("Sans Serif");
  const [searchValue, setSearchValue] = useState("");

  if (isDark) {
    document.body.classList.remove("bg-white");
    document.body.classList.add("bg-[#050505]", "text-white");
  } else {
    document.body.classList.remove("bg-[#050505]");
    document.body.classList.add("bg-white", "text-black");
  }

  return (
    <div className="max-w-[737px] mx-auto pb-10">
      <Header value={{ isDark, setIsDark, font, setFont }} />
      <SearchBox value={{ isDark, font, setSearchValue }} />
      <Details value={{ isDark, searchValue, font }} />
    </div>
  );
}

export default App;
