import { useEffect, useState } from "react";

import WordHeader from "./WordHeader";
import WordNoun from "./WordNoun";
import WordVerb from "./WordVerb";

import emoji from "../assets/emoji.svg";

const Details = ({ value }) => {
  const [fetchedData, setFetchedData] = useState({});

  const { isDark, searchValue, font } = value;

  useEffect(() => {
    const fetchWord = async () => {
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`
        );

        if (!response.ok) {
          throw new Error("This word does not exist.");
        }

        const data = await response.json();

        if (data && data.length > 0) {
          setFetchedData(data[0]);
        }
      } catch (error) {
        setFetchedData({});
      }
    };

    if (searchValue) {
      fetchWord();
    }
  }, [searchValue]);

  const playAudio = () => {
    const audioUrl = fetchedData?.phonetics?.[0]?.audio;
    const audioUrlTwo = fetchedData?.phonetics?.[1]?.audio;
    const audioUrlThree = fetchedData?.phonetics?.[2]?.audio;

    if (audioUrl || audioUrlTwo || audioUrlThree) {
      const audio = new Audio(audioUrl || audioUrlTwo || audioUrlThree);
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  };

  const renderDetails = () => {
    if (searchValue && Object.keys(fetchedData).length > 0) {
      return (
        <>
          <WordHeader value={{ fetchedData, playAudio }} />
          <WordNoun value={{ fetchedData, searchValue }} />
          <WordVerb value={{ fetchedData }} />
          <div className="w-full h-[1px] bg-[#3A3A3A] mt-10"></div>
          <div className="flex gap-x-7 mt-6">
            <p className="text-sm text-[#757575]">Source</p>
            <a
              href={fetchedData.sourceUrls}
              className="hover:text-[#A445ED] transition-all duration-300"
            >
              {fetchedData.sourceUrls}
            </a>
          </div>
        </>
      );
    } else {
      return (
        <div className="flex flex-col items-center">
          <img src={emoji} alt="sad emoji" className="w-[64px] h-[64px]" />
          <h1 className="text-xl mt-11">No Definitions Found</h1>
          <p className="text-lg text-[#757575] text-center mt-6">
            Sorry pal, we couldn't find definitions for the word you were
            looking for. You can try the search again at later time or head to
            the web instead.
          </p>
        </div>
      );
    }
  };

  const detailsContent = renderDetails();

  return (
    <div
      className={`flex flex-col mt-11 px-3 lg:px-0 ${
        isDark ? "text-white" : "text-black"
      } font-['${font}']`}
    >
      {detailsContent}
    </div>
  );
};

export default Details;
