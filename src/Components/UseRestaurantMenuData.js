import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constants";

const useRestaurantMenuData = (resId) => {
  useEffect(() => {
    fetchMenu(resId);
  }, []);

  const [menuInfo, setmenuInfo] = useState(null);

  const fetchMenu = async (resId) => {
    const data = await fetch(MENU_API_URL + resId);

    const json = await data.json();

    setmenuInfo(json.data);
  };

  return menuInfo;
};

export default useRestaurantMenuData;
