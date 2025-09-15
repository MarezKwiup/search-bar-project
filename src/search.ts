import { type SearchItem, type SearchQuery } from "./types";
import { data } from "./data";
const search = (query: SearchQuery): SearchItem[] => {
  console.log("Searching for the result!!");
  const result: SearchItem[] = query.text
    ? data
        .filter((item) =>
          item.name.toLowerCase().includes(query.text.toLowerCase())
          &&
          query.type.has(item.type)
        )
        .map((item) => ({
          ...item,
          highlight: query.text,
        }))
    : [];
  return result;
};

export default search;
