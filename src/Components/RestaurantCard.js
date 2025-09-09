import { RESTAURANT_IMAGE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { Restaurantdata } = props;
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId } =
    Restaurantdata?.card?.card?.info;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        src={RESTAURANT_IMAGE_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <p>{avgRating} stars</p>
      <p>{cuisines.join(", ")}</p>
      <p> {costForTwo}</p>
    </div>
  );
};

export default RestaurantCard;
