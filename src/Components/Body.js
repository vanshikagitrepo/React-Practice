import RestaurantCard from "./RestaurantCard";
// import restaurantList from "../utils/restaurantList";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API_URL } from "../utils/constants";

const Body = () => {
  const [reslist, setreslist] = useState([]);
  const [filteredrestaurant, setfilteredrestaurant] = useState();
  const [searchTxt, setsearchTxt] = useState();

  useEffect(() => {
    restaurantData();
  }, []);

  const restaurantData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();

    setreslist(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredrestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return reslist.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <div className="search">
          <input
            type="Text"
            placeholder="Search here ..."
            className="input-box"
            onChange={(e) => {
              setsearchTxt(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const FilteredRestaurant = reslist.filter((restaurant) => {
                return restaurant.info.name
                  .toLowerCase()
                  .includes(searchTxt.toLowerCase());
              });
              setfilteredrestaurant(FilteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="top-rated">
          <button
            onClick={() => {
              const TopRatedRestaurant = reslist.filter((restaurant) => {
                return restaurant?.info?.avgRating >= 4.4;
              });
              setfilteredrestaurant(TopRatedRestaurant);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="restaurant-container">
        {filteredrestaurant.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.info?.id}
            Restaurantdata={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
