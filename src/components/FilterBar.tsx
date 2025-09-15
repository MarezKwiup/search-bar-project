import { type SearchQuery,type FilterType, type ItemType,type SearchItem } from "../types"
import { IoPersonOutline } from "react-icons/io5";
import { FaPaperclip } from "react-icons/fa6";

interface FilterBarProps{
  query:SearchQuery;
  setQuery:React.Dispatch<React.SetStateAction<SearchQuery>>;
  results:SearchItem[];
  setResults:React.Dispatch<React.SetStateAction<SearchItem[]>>;
  filterSelected:FilterType;
  setFilterSelected:React.Dispatch<React.SetStateAction<FilterType>>;
}

const FilterBar=(props:FilterBarProps)=>{
  const {results, filterSelected, setFilterSelected} = props

  return (
    <div className="flex w-full gap-5 border border-b-[#f3f3f3] border-b-1 border-t-white border-x-white ">
      <button 
        className={`flex ml-7 gap-1.5 h-full pb-3 ${
          filterSelected === "all" 
            ? "border-b-3 border-b-black" 
            : ""
        }`}
        onClick={() => setFilterSelected("all")}
      >
        <span className={filterSelected === "all" ? "text-black" : "text-[#7a7a7a]"}>
          All
        </span>
        <div className="bg-[#f2f2f2] w-6 border-none rounded-lg">
          <span className={filterSelected === "all" ? "text-black" : "text-[#7a7a7a]"}> 
            {results.length} 
          </span>
        </div>
      </button>

      <button 
        className={`flex justify-center items-center gap-1.5 pb-3 ${
          filterSelected === "file" 
            ? "border-b-3 border-b-black" 
            : ""
        }`}
        onClick={() => setFilterSelected("file")}
      >
        <FaPaperclip color={filterSelected === "file" ? "#000000" : "#7a7a7a"} />
        <span className={filterSelected === "file" ? "text-black" : "text-[#7a7a7a]"}>
          Files
        </span>
        <div className="bg-[#f2f2f2] w-6 border-none rounded-lg">
          <span className={filterSelected === "file" ? "text-black" : "text-[#7a7a7a]"}>
            {" "}
            {results.filter((res) => res.type === "file").length}{" "}
          </span>
        </div>
      </button>

      <button 
        className={`flex justify-center items-center gap-1 pb-3 ${
          filterSelected === "person" 
            ? "border-b-3 border-b-black" 
            : ""
        }`}
        onClick={() => setFilterSelected("person")}
      >
        <IoPersonOutline color={filterSelected === "person" ? "#000000" : "#7a7a7a"} />
        <span className={filterSelected === "person" ? "text-black" : "text-[#7a7a7a]"}>
          People
        </span>
        <div className="bg-[#f2f2f2] w-6 border-none rounded-lg">
          <span className="text-[#7a7a7a]">
            {" "}
            {results.filter((res) => res.type === "person").length}{" "}
          </span>
        </div>
      </button>
    </div>
  )
}

export default FilterBar;