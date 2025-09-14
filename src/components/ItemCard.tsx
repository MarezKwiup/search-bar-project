import { type SearchItem } from "../types";
import { FaImage } from "react-icons/fa6";
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
  const renderDetails=()=>{
    switch(item.type){

        case 'person': return(
            <p className="text-[#AFAFAF] text-[13px]">{item.lastActive}</p>
        )
        default: return (
            <p className="text-[#AFAFAF] text-[13px]">Item details</p>
        )
    }
  }
//<p className="text-[#AFAFAF] text-[13px]">Last active?</p>
  return (
    <div className="flex items-center p-2 gap-3">
      {itemIcon()}
      <div className="flex flex-col items-start">
        <p className="font-semibold text-[15px]">{item.name}</p>
        {renderDetails()}
      </div>
    </div>
  );
};
export default ItemCard;
