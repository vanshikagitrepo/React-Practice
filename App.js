import React from "react";
import { createRoot } from "react-dom/client";

const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <img
          className="nav-logo"
          alttxt="nav-logo"
          src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/news8756.jpg"
        ></img>
      </div>
      <div className="search">
        <input placeholder="Search here..." type="Text" />
        <button>search</button>
      </div>
      <div className="usericon">
        <i className="fa-solid fa-user"></i>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<Header />);
