import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type SearchItem } from "./types";
import search from "./search";
import { CiSearch } from "react-icons/ci";
import "./App.css";
import ItemCard from "./components/ItemCard";
function App() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchItem[]>([]);
  return (
    <>
      <div className="w-full max-w-lg mx-auto mt-10">
        <motion.div
          layout
          initial={{ borderRadius: 16 }}
          className="bg-white border-none rounded-xl shadow-lg overflow-hidden"
        >
          <div className="flex justify-center items-center w-full px-4 py-2 border-none outline-none">
            <CiSearch size={25} color="#9e9e9e" />
            <input
              type="text"
              placeholder="Searching is easier"
              value={query}
              className="w-full px-4 py-2 border-none outline-none"
              onChange={(e) => {
                setQuery(e.target.value);
                setResults(search(e.target.value));
              }}
            />
            <button
              className={`text-sm underline ${query === "" ? "hidden" : ""} `}
              onClick={(e) => {
                setQuery("");
                setResults(search(""));
              }}
            >
              clear
            </button>
          </div>

          <AnimatePresence>
            {results.length > 0 && (
              <motion.div
                key="dropdown"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <ul>
                  {results.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ delay: idx * 0.05 }}
                      className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                    >
                      <li key={item.id}>
                        <ItemCard item={item}/>
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
