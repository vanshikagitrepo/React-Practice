import RestaurantCard from "./RestaurantCard";
// import restaurantList from "../utils/restaurantList";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API_URL } from "../utils/constants";
import { Link } from "react-router";

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
      <div className="search-container flex p-4">
        <div className="search">
          <input
            type="Text"
            placeholder="Search here ..."
            className="input-box px-4 py-2 rounded-2xl text-xl  bg-[#cfdbd5] text-black"
            onChange={(e) => {
              setsearchTxt(e.target.value);
            }}
          />
          <button
            className="  bg-[#e8eddf] m-4 px-4 py-2 rounded-2xl text-xl cursor-pointer"
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

        <div className="top-rated  bg-[#e8eddf]  m-4 px-4 py-2 rounded-2xl text-xl cursor-pointer">
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

      <div className="restaurant-container flex flex-wrap justify-evenly">
        {filteredrestaurant.map((restaurant) => (
          <Link
            className="Link-decoration"
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestaurantCard Restaurantdata={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
