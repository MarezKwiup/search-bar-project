// SettingsModal.tsx
import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { type ItemType, type SearchQuery,type SearchItem,type FilterType } from "../types";
import search from "../search";

type SettingsModalProps = {
  anchorRef: React.RefObject<HTMLDivElement | null>; // reference to the button
  settingsModal: boolean;
  setSettingsModal: React.Dispatch<React.SetStateAction<boolean>>;
  query: SearchQuery;
  setQuery: React.Dispatch<React.SetStateAction<SearchQuery>>;
  setResults: React.Dispatch<React.SetStateAction<SearchItem[]>>;
  filterSelected: FilterType;
};

import { IoPersonOutline } from "react-icons/io5";
import { FaPaperclip } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { text } from "framer-motion/client";

const SettingsModal = ({
  anchorRef,
  settingsModal,
  setSettingsModal,
  query,
  setQuery,
  filterSelected,
  setResults
}: SettingsModalProps) => {
  const [filters, setFilters] = useState({
    file: query.type.has("file"),
    person: query.type.has("person"),
    folder: query.type.has("folder"),
    video: query.type.has("video"),
    image: query.type.has("image"),
  });

  const toggleFilter = (key: keyof typeof filters) => {
    setFilters((prev) => {
      const updated = { ...prev, [key]: !prev[key] };

      const newSet: Set<ItemType> = new Set(
        Object.entries(updated)
          .filter(([_, isActive]) => isActive)
          .map(([filterName]) => filterName as ItemType)
      );

      setQuery((prev) => {
        return {
          ...prev,
          type: newSet,
        };
      });

      setResults(search({
        text:query.text,
        type:newSet,
        filter:filterSelected
      }))
      console.log("New active filters set:", newSet);

      return updated;
    });
  };

  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    if (settingsModal && anchorRef.current) {
      const rect = anchorRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX,
      });
    }
  }, [settingsModal, anchorRef]);

  if (!settingsModal) return null;

  return ReactDOM.createPortal(
    <div
      className="absolute bg-white p-4 rounded-lg shadow-lg gap-4 flex flex-col"
      style={{
        top: position.top,
        right: position.left,
        minWidth: "200px",
        zIndex: 9999,
      }}
    >
      {Object.entries(filters).map(([key]) => (
        <div key={key} className="flex gap-2 items-center justify-start">
          {key === "file" && (
            <>
              <FaPaperclip color="#cacaca" />
              <p>{key}</p>

              <button
                onClick={() => toggleFilter("file")}
                className={`w-10 h-6 flex items-center rounded-full p-1 transition ml-auto ${
                  filters.file ? "bg-black" : "bg-gray-300"
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                    filters.file ? "translate-x-4" : ""
                  }`}
                />
              </button>
            </>
          )}
          {key === "person" && (
            <>
              <IoPersonOutline color="#cacaca" />
              <p>{key}</p>
              <button
                onClick={() => toggleFilter("person")}
                className={`w-10 h-6 flex items-center rounded-full p-1 transition ml-auto ${
                  filters.person ? "bg-black" : "bg-gray-300"
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                    filters.person ? "translate-x-4" : ""
                  }`}
                />
              </button>
            </>
          )}
          {key === "folder" && (
            <>
              <FaFolder color="#cacaca" />
              <p>{key}</p>
              <button
                onClick={() => toggleFilter("folder")}
                className={`w-10 h-6 flex items-center rounded-full p-1 transition ml-auto ${
                  filters.folder ? "bg-black" : "bg-gray-300"
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                    filters.folder ? "translate-x-4" : ""
                  }`}
                />
              </button>
            </>
          )}
          {key === "video" && (
            <>
              <FaPlay color="#cacaca" />
              <p>{key}</p>
              <button
                onClick={() => toggleFilter("video")}
                className={`w-10 h-6 flex items-center rounded-full p-1 transition ml-auto ${
                  filters.video ? "bg-black" : "bg-gray-300"
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                    filters.video ? "translate-x-4" : ""
                  }`}
                />
              </button>
            </>
          )}
          {key === "image" && (
            <>
              <FaImage color="#cacaca" />
              <p>{key}</p>
              <button
                onClick={() => toggleFilter("image")}
                className={`w-10 h-6 flex items-center rounded-full p-1 transition ml-auto ${
                  filters.image ? "bg-black" : "bg-gray-300"
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                    filters.image ? "translate-x-4" : ""
                  }`}
                />
              </button>
            </>
          )}
        </div>
      ))}
    </div>,
    document.body
  );
};

export default SettingsModal;
