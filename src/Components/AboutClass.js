import React from "react";
import UserClass from "./UserClass";

class AboutClass extends React.Component {
  render() {
    return (
      <div className="Aboutus bg-amber-100 h-130 p-2 text-2xl">
        <h1 className="font-bold">This is about Food delivery APP !!</h1>
        <UserClass name={"Vanshika Goel"} location={"India , Kolkata"} />
      </div>
    );
  }
}

export default AboutClass;
