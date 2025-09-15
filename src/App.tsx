import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  type SearchItem,
  type ItemType,
  type SearchQuery,
  type FilterType,
} from "./types";
import search from "./search";
import { CiSearch } from "react-icons/ci";
import "./App.css";
import ItemCard from "./components/ItemCard";
import FilterBar from "./components/FilterBar";

function App() {
  const [query, setQuery] = useState<SearchQuery>({
    text: "",
    type: new Set<ItemType>(["person", "file"]),
  });
  const [results, setResults] = useState<SearchItem[]>([]);
  const [filterSelected, setFilterSelected] = useState<FilterType>("all");
  const [isLoading, setIsLoading] = useState(false); // Add this line

  const performSearch = (searchText: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setResults(
        search({
          text: searchText,
          type: query.type,
          filter: filterSelected,
        })
      );
      setIsLoading(false);
    }, 2000);
  };
  return (
    <>
      <div className="w-full max-w-[712px] mx-auto mt-10">
        <motion.div
          layout
          initial={{ borderRadius: 16 }}
          className="bg-white border-none rounded-xl shadow-lg overflow-hidden"
        >
          <div className="flex justify-center items-center w-full px-4 py-2 border-none outline-none">
            {isLoading ? (
              <div className="w-[25px] h-[25px] border-2 border-[#f3f3f3] border-t-[#9e9e9e] rounded-full animate-spin"></div>
            ) : (
              <CiSearch size={25} color="#9e9e9e" />
            )}
            <input
              type="text"
              placeholder="Searching is easier"
              value={query.text}
              className="w-full px-4 py-2 border-none outline-none"
              onChange={(e) => {
                setQuery((prev) => {
                  return {
                    ...prev,
                    text: e.target.value,
                  };
                });
                performSearch(e.target.value);
              }}
            />
            <button
              className={`text-sm underline ${
                query.text === "" ? "hidden" : ""
              } `}
              onClick={(e) => {
                setQuery((prev) => {
                  return {
                    ...prev,
                    text: "",
                  };
                });
                performSearch("");
              }}
            >
              clear
            </button>
          </div>

          <AnimatePresence>
            {results.length > 0 && (
              <motion.div
                key={`dropdown-${results.length}-${filterSelected}`} // Dynamic key
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <FilterBar
                  query={query}
                  setQuery={setQuery}
                  results={results}
                  setResults={setResults}
                  filterSelected={filterSelected}
                  setFilterSelected={setFilterSelected}
                  setIsLoading={setIsLoading}
                />
                <ul>
                  {results
                    .filter((item) => item.displayed)
                    .map((item, idx) => (
                      <motion.div
                        key={`${item.id}-${filterSelected}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ delay: idx * 0.05 }}
                        className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                      >
                        <li key={item.id}>
                          <ItemCard item={item} />
                        </li>
                      </motion.div>
                    ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}

export default App;
