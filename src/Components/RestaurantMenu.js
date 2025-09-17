import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenuData from "../utils/useRestaurantMenuData";
import RestaurantInnerlist from "./RestaurantInnerList";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menuInfo = useRestaurantMenuData(resId);

  if (menuInfo === null) return <Shimmer />;

  const { name, areaName, cuisines, avgRating, costForTwoMessage } =
    menuInfo?.cards[2]?.card?.card?.info;

  const categories =
    menuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <>
      <div className="Restaurant details text-center text-xl font-bold">
        <h1 className=" text-3xl py-4 ">{name} </h1>
        <h2>{areaName}</h2>
        <h3>{cuisines.join(" , ")}</h3>
        <h3>
          {avgRating} stars - {costForTwoMessage}
        </h3>
      </div>

      <div>
        {categories.map((c) => (
          <RestaurantInnerlist
            key={c.card?.card?.categoryId}
            data={c.card?.card}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
