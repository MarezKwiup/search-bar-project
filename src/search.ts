import { type FilterType, type SearchItem, type ItemType } from "./types";
import { data } from "./data";

interface SearchProps{
  text: string;
  type: Set<ItemType>;
  filter:FilterType
}

const search = ({text,type,filter}:SearchProps): SearchItem[] => {
  console.log("Searching for the result!!");
  const result: SearchItem[] =text
    ? data
        .filter((item) =>
          item.name.toLowerCase().includes(text.toLowerCase())
          &&
          type.has(item.type)
        )
        .map((item) => ({
          ...item,
          highlight:text,
          displayed:filter==='all'||filter===item.type
        }))
    : [];
  return result;
};

export default search;
