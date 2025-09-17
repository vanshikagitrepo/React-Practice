import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [loginValue, setloginValue] = useState("Logout");

  return (
    <div className="flex justify-between  bg-[#f5cb5c]">
      <div className="nav-logo p-2">
        <img className="w-56" alttxt="nav-logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items ">
        <ul className="p-4 m-4 flex ">
          <Link to="/" className="p-4  text-2xl text-black">
            {" "}
            <li>Home</li>
          </Link>
          <Link to="/about" className="p-4 text-2xl text-black">
            {" "}
            <li>About Us</li>
          </Link>
          <Link to="/contactus" className="p-4 text-2xl text-black">
            <li>Contact Us</li>
          </Link>
          <li className="p-4 text-2xl text-black">Cart</li>
          <button
            className="p-4 text-2xl text-black  border-1 rounded-2xl bg-[#e8eddf] cursor-pointer"
            onClick={() => {
              loginValue === "Logout"
                ? setloginValue("Login")
                : setloginValue("Logout");
            }}
          >
            {loginValue}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
