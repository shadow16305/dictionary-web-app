import play_icon from "../assets/play_btn.svg";

const WordHeader = ({ value }) => {
  const { fetchedData, playAudio } = value;

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col">
        <h1 className="text-[32px] lg:text-[64px] font-bold">
          {fetchedData.word}
        </h1>
        <p className="text-[#A445ED] text-2xl">{fetchedData.phonetic}</p>
      </div>
      <button
        onClick={playAudio}
        className="rounded-full focus:outline-none w-[75px] h-[75px] bg-[#A445ED] bg-opacity-25 hover:bg-opacity-100 transition duration-300 [&>*:nth-child(1)]:hover:saturate-0 [&>*:nth-child(1)]:hover:brightness-200"
      >
        <img src={play_icon} className="mx-auto" alt="play button" />
      </button>
    </div>
  );
};

export default WordHeader;
