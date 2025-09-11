import RestaurantCard from "./RestaurantCard";
// import restaurantList from "../utils/restaurantList";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [reslist, setreslist] = useState([]);
  const [filteredrestaurant, setfilteredrestaurant] = useState();
  const [searchTxt, setsearchTxt] = useState();

  useEffect(() => {
    restaurantData();
  }, []);

  const restaurantData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.614133&lng=88.373442&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
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
