import { RESTAURANT_IMAGE_URL } from "../utils/constants";

const RestaurantInnerlistItem = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id} className="border-b-1 border-gray-300 ">
          <div className="m-2 p-2 flex  justify-between">
            <div className="w-9/12">
              <span className="text-lg">{item?.card?.info?.name}</span>
              <span className="ml-4 text-m">
                - ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>
              <p className="text-xs my-2">{item?.card?.info?.description}</p>
            </div>

            <div className="w-3/12 ">
              <div>
                <button className="bg-white p-2 shadow-xl absolute my-40 mx-20 font-bold">
                  {" "}
                  ADD +
                </button>
              </div>
              <img src={RESTAURANT_IMAGE_URL + item?.card?.info?.imageId}></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantInnerlistItem;
