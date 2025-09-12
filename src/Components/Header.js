import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [loginValue, setloginValue] = useState("Logout");

  return (
    <div className="header">
      <div className="nav-logo">
        <img className="logo" alttxt="nav-logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/" className="Link-decoration">
            {" "}
            <li>Home</li>
          </Link>
          <Link to="/about" className="Link-decoration">
            {" "}
            <li>About Us</li>
          </Link>
          <Link to="/contactus" className="Link-decoration">
            <li>Contact Us</li>
          </Link>
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
