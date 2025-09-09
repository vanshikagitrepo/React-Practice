import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/restaurantList";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input
          type="Text"
          placeholder="Search here ..."
          className="input-box"
        />
        <button>Search</button>
      </div>
      <div className="restaurant-container">
        {restaurantList.map((restaurant, index) => (
          <RestaurantCard key={index} Restaurantdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
