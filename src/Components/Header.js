import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [loginValue, setloginValue] = useState("Logout");

  return (
    <div className="header">
      <div className="nav-logo">
        <img className="logo" alttxt="nav-logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
          <button
            className="login-logout-btn"
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
