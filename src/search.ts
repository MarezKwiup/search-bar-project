import { type SearchItem } from "./types";
import { data } from "./data";
const search = (query: string): SearchItem[] => {
  console.log("Searching for the result!!");
  const result: SearchItem[] = query
    ? data
        .filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
        .map((item) => ({
          ...item,
          highlight: query,
        }))
    : [];
  return result;
};

export default search;
