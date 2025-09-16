import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenuData from "../utils/useRestaurantMenuData";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menuInfo = useRestaurantMenuData(resId);

  if (menuInfo === null) return <Shimmer />;

  const { name, areaName, cuisines, avgRating, costForTwoMessage } =
    menuInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    menuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
      ?.card;

  return (
    <div className="menu  bg-amber-100 h-200 text-lg p-4">
      <h1 className="font-bold text-xl pb-5">{name} :</h1>
      <h2>{areaName}</h2>
      <h3>{cuisines.join(" , ")}</h3>
      <h3>
        {avgRating} stars - {costForTwoMessage}
      </h3>

      <h2 className="font-bold p-4">Menu :</h2>
      <ul>
        {itemCards.map((item) => (
          <li className="pl-8  w-200 p-1" key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs {item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
