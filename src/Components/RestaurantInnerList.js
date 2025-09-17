import { useState } from "react";
import RestaurantInnerlistItem from "./RestaurantInnerlistItem";

const RestaurantInnerlist = ({ data }) => {
  const { title, itemCards } = data;
  const [showItems, setshowItems] = useState(false);

  const handleClick = () => {
    setshowItems(!showItems);
  };
  return (
    <div className="w-7/12 bg-gray-100 p-3 my-3 mx-auto rounded-2xl shadow-xl">
      <div className="flex justify-between" onClick={handleClick}>
        <h2 className="text-lg font-bold">
          {title} ({itemCards.length})
        </h2>
        <h2>⬇</h2>
      </div>
      {showItems && <RestaurantInnerlistItem items={itemCards} />}
    </div>
  );
};

export default RestaurantInnerlist;
