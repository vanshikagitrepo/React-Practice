import { RESTAURANT_IMAGE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { Restaurantdata } = props;
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    Restaurantdata?.info;

  return (
    <div className="restaurant-card w-[300] bg-amber-100 hover:bg-amber-200 hover:shadow-2xl rounded-xl m-4 p-4 ">
      <img
        className="restaurant-logo p-4 w-[300]"
        src={RESTAURANT_IMAGE_URL + cloudinaryImageId}
      ></img>
      <div className="text-center text-lg">
        <h3 className="font-bold text-xl p-2">{name}</h3>
        <p>{avgRating} stars</p>
        <p>{cuisines.join(", ")}</p>
        <p> {costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
