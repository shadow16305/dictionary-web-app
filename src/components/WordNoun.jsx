import { Fragment } from "react";

const WordNoun = ({ value }) => {
  const { fetchedData } = value;

  const nounMeanings = fetchedData.meanings.filter(
    (meaning) => meaning.partOfSpeech === "noun"
  );

  const nounSynonyms = fetchedData.meanings
    .find((meaning) => meaning.partOfSpeech === "noun")
    .synonyms.join(", ");

  return (
    <div className="flex flex-col mt-10">
      <div className="flex items-center gap-6">
        <h2 className="text-2xl leading-normal">noun</h2>
        <div className="w-[656px] h-[1px] bg-[#3A3A3A] mt-2"></div>
      </div>
      <h3 className="text-xl text-[#757575] mt-10">Meaning</h3>
      <ul className="list-disc flex flex-col gap-3 mt-6">
        {nounMeanings.map((nounMeaning, index) => (
          <Fragment key={index}>
            <ul className="list-disc flex flex-col gap-4 ml-6 custom-list-purple">
              {nounMeaning.definitions.map((definition, subIndex) => (
                <li className="text-lg leading-[24px]" key={subIndex}>
                  {definition.definition}
                </li>
              ))}
            </ul>
          </Fragment>
        ))}
      </ul>
      <div className="flex gap-x-6 mt-10">
        <p className="text-xl text-[#757575]">Synonyms</p>
        <p className="text-xl text-[#A445ED] text-start font-bold">
          {nounSynonyms}
        </p>
      </div>
    </div>
  );
};

export default WordNoun;
