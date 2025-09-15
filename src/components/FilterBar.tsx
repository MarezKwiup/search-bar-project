import {
  type SearchQuery,
  type FilterType,
  type ItemType,
  type SearchItem,
} from "../types";
import { IoPersonOutline } from "react-icons/io5";
import { FaPaperclip } from "react-icons/fa6";
import search from "../search";
import { IoSettingsOutline } from "react-icons/io5";
import { useRef, useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import SettingsModal from "./SettingsModal";

interface FilterBarProps {
  query: SearchQuery;
  setQuery: React.Dispatch<React.SetStateAction<SearchQuery>>;
  results: SearchItem[];
  setResults: React.Dispatch<React.SetStateAction<SearchItem[]>>;
  filterSelected: FilterType;
  setFilterSelected: React.Dispatch<React.SetStateAction<FilterType>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterBar = (props: FilterBarProps) => {
  const {
    results,
    filterSelected,
    setFilterSelected,
    setQuery,
    query,
    setResults,
    setIsLoading,
  } = props;
  const settingsRef = useRef<HTMLDivElement>(null);
  const [settingsModal, setSettingsModal] = useState(false);

  const handleFilterSelect = (filterType: FilterType) => {
    setFilterSelected(filterType);
    setResults(
      search({ text: query.text, type: query.type, filter: filterType })
    );
  };
  return (
    <div
      className="relative flex w-full gap-5 border border-b-[#f3f3f3] border-b-1 border-t-white border-x-white justify-start"
      ref={settingsRef}
    >
      <button
        className={`flex ml-7 gap-1.5 h-full pb-3 ${
          filterSelected === "all" ? "border-b-3 border-b-black" : ""
        }`}
        onClick={() => handleFilterSelect("all")}
      >
        <span
          className={filterSelected === "all" ? "text-black" : "text-[#7a7a7a]"}
        >
          All
        </span>
        <div className="bg-[#f2f2f2] w-6 border-none rounded-lg">
          <span className="text-[#7a7a7a]">{results.length}</span>
        </div>
      </button>

      <button
        className={
          query.type.has("file")
            ? `flex justify-center items-center gap-1.5 pb-3 ${
                filterSelected === "file" ? "border-b-3 border-b-black" : ""
              }`
            : "hidden"
        }
        onClick={() => handleFilterSelect("file")}
      >
        <FaPaperclip
          color={filterSelected === "file" ? "#000000" : "#7a7a7a"}
        />
        <span
          className={
            filterSelected === "file" ? "text-black" : "text-[#7a7a7a]"
          }
        >
          Files
        </span>
        <div className="bg-[#f2f2f2] w-6 border-none rounded-lg">
          <span className="text-[#7a7a7a]">
            {" "}
            {results.filter((res) => res.type === "file").length}{" "}
          </span>
        </div>
      </button>

      <button
        className={
          query.type.has("person")
            ? `flex justify-center items-center gap-1 pb-3 ${
                filterSelected === "person" ? "border-b-3 border-b-black" : ""
              }`
            : "hidden"
        }
        onClick={() => handleFilterSelect("person")}
      >
        <IoPersonOutline
          color={filterSelected === "person" ? "#000000" : "#7a7a7a"}
        />
        <span
          className={
            filterSelected === "person" ? "text-black" : "text-[#7a7a7a]"
          }
        >
          People
        </span>
        <div className="bg-[#f2f2f2] w-6 border-none rounded-lg">
          <span className="text-[#7a7a7a]">
            {" "}
            {results.filter((res) => res.type === "person").length}{" "}
          </span>
        </div>
      </button>

      <button
        className={
          query.type.has("folder")
            ? `flex justify-center items-center gap-1 pb-3 ${
                filterSelected === "folder" ? "border-b-3 border-b-black" : ""
              }`
            : "hidden"
        }
        onClick={() => handleFilterSelect("folder")}
      >
        <FaFolder color={filterSelected === "folder" ? "#000000" : "#7a7a7a"} />
        <span
          className={
            filterSelected === "folder" ? "text-black" : "text-[#7a7a7a]"
          }
        >
          Folders
        </span>
        <div className="bg-[#f2f2f2] w-6 border-none rounded-lg">
          <span className="text-[#7a7a7a]">
            {" "}
            {results.filter((res) => res.type === "folder").length}{" "}
          </span>
        </div>
      </button>

      <button
        className={
          query.type.has("image")
            ? `flex justify-center items-center gap-1 pb-3 ${
                filterSelected === "image" ? "border-b-3 border-b-black" : ""
              }`
            : "hidden"
        }
        onClick={() => handleFilterSelect("image")}
      >
        <FaImage color={filterSelected === "image" ? "#000000" : "#7a7a7a"} />
        <span
          className={
            filterSelected === "image" ? "text-black" : "text-[#7a7a7a]"
          }
        >
          Images
        </span>
        <div className="bg-[#f2f2f2] w-6 border-none rounded-lg">
          <span className="text-[#7a7a7a]">
            {" "}
            {results.filter((res) => res.type === "image").length}{" "}
          </span>
        </div>
      </button>

      <button
        className={
          query.type.has("video")
            ? `flex justify-center items-center gap-1 pb-3 ${
                filterSelected === "video" ? "border-b-3 border-b-black" : ""
              }`
            : "hidden"
        }
        onClick={() => handleFilterSelect("video")}
      >
        <FaPlay color={filterSelected === "video" ? "#000000" : "#7a7a7a"} />
        <span
          className={
            filterSelected === "video" ? "text-black" : "text-[#7a7a7a]"
          }
        >
          Video
        </span>
        <div className="bg-[#f2f2f2] w-6 border-none rounded-lg">
          <span className="text-[#7a7a7a]">
            {" "}
            {results.filter((res) => res.type === "video").length}{" "}
          </span>
        </div>
      </button>

      <button
        className="relative flex flex-reverse gap-1.5 h-full items-center ml-auto mr-6 mt-1"
        onClick={() => setSettingsModal((prev) => !prev)}
      >
        <IoSettingsOutline
          size={20}
          className={`text-[#a1a1a1] hover:text-[#5a5a5a] transition-transform duration-300 ${
            settingsModal ? "rotate-90" : "rotate-0"
          }`}
        />
      </button>
      {settingsModal && (
        <SettingsModal
          anchorRef={settingsRef}
          settingsModal={settingsModal}
          setSettingsModal={setSettingsModal}
          query={query}
          setQuery={setQuery}
          setResults={setResults}
          filterSelected={filterSelected}
          setIsLoading={setIsLoading}
        />
      )}
    </div>
  );
};

export default FilterBar;
