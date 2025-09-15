import { type SearchItem } from "../types";
import { FaPlay } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { FaFile } from "react-icons/fa";

interface ItemCardProps {
  item: SearchItem;
}
const ItemCard = ({ item }: ItemCardProps) => {
  console.log("Item is : ", item);

  const itemIcon = () => {
    switch (item.type) {
      case "person":
        return (
          <div className="relative h-10 w-10">
            <img
              src={item.photoUrl}
              className="h-full w-full rounded-xl object-cover"
            />
            {item.status === "active" && (
              <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-white bg-green-500"></span>
            )}
            {item.status === "inactive" && (
              <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-white bg-yellow-500"></span>
            )}
            {item.status === "unactivated" && (
              <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-white bg-red-500"></span>
            )}
          </div>
        );

      case "folder":
        return (
          <div className="h-10 w-10 bg-[#F2F2F2] flex items-center justify-center rounded-lg">
            <FaFolder size={14} />
          </div>
        );
      case "video":
        return (
          <div className="h-10 w-10 bg-[#F2F2F2] flex items-center justify-center rounded-lg">
            <FaPlay size={14} />
          </div>
        );

      case "image":
        return (
          <div className="relative h-10 w-10">
            <img
              src={item.imageUrl}
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        );

      case "file":
        return (
          <div className="h-10 w-10 bg-[#F2F2F2] flex items-center justify-center rounded-lg">
            <FaFile size={14} />
          </div>
        );

      default:
        return <p>Returned something</p>;
    }
  };
  const renderDetails = () => {
    switch (item.type) {
      case "person":
        return <p className="text-[#AFAFAF] text-[13px]">{item.lastActive}</p>;
      case "folder":
        return (
          <p className="text-[#AFAFAF] text-[13px] flex items-center gap-1.5">
            in {item.path}
            <span className="inline-block h-1 w-1 rounded-full bg-[#AFAFAF]"></span>
            {item.edited}
          </p>
        );
      case "video":
        return (
          <p className="text-[#AFAFAF] text-[13px] flex items-center gap-1.5">
            in {item.path}
            <span className="inline-block h-1 w-1 rounded-full bg-[#AFAFAF]"></span>
            {item.added}
          </p>
        );
      case "image":
        return (
          <p className="text-[#AFAFAF] text-[13px] flex items-center gap-1.5">
            in {item.path}
            <span className="inline-block h-1 w-1 rounded-full bg-[#AFAFAF]"></span>
            {item.edited}
          </p>
        );
      case "file":
        return (
          <p className="text-[#AFAFAF] text-[13px] flex items-center gap-1.5">
            in {item.path}
            <span className="inline-block h-1 w-1 rounded-full bg-[#AFAFAF]"></span>
            {item.edited}
          </p>
        );

      default:
        return <p className="text-[#AFAFAF] text-[13px]">Item details</p>;
    }
  };
  const renderHightlight = () => {
    if (!item.highlight) return item.name;

    const regex = new RegExp(`(${item.highlight})`, "gi");
    const parts = item.name.split(regex);

    return parts.map((part, idx) =>
      regex.test(part) ? (
        <span key={idx} className="bg-[#fde3c7]">
          {part}
        </span>
      ) : (
        <span key={idx}>{part}</span>
      )
    );
  };
  return (
    <div className="flex items-start p-2 gap-3">
      {itemIcon()}

      <div className="flex flex-col items-start">
        <p className="font-semibold text-[15px]">{renderHightlight()}</p>
        {renderDetails()}
      </div>

      {item.type === "folder" && (
        <div className="h-5 w-15 bg-[#f2f2f2] border-none rounded-lg self-start flex items-center justify-center">
          <span className="text-[#737373] text-sm">{item.fileCount} Files</span>
        </div>
      )}
    </div>
  );
};
export default ItemCard;
