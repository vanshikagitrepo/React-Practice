import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/restaurantList";
import { useState } from "react";

const Body = () => {
  const [reslist, setreslist] = useState(restaurantList);
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

      <div className="top-rated">
        <button
          onClick={() => {
            const FilteredRestaurant = reslist.filter((restaurant) => {
              return restaurant?.card?.card?.info?.avgRating >= 4.4;
            });
            setreslist(FilteredRestaurant);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="restaurant-container">
        {reslist.map((restaurant, index) => (
          <RestaurantCard
            key={restaurant?.card?.card?.info?.id}
            Restaurantdata={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
