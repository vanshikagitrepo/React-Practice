import React from "react";
import UserClass from "./UserClass";

class AboutClass extends React.Component {
  render() {
    return (
      <div>
        <h1>This is about Food delivery APP !!</h1>
        <UserClass name={"Vanshika Goel"} location={"India , Kolkata"} />
      </div>
    );
  }
}

export default AboutClass;
