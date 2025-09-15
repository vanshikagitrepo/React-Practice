import react from "react";
import UserClass from "./UserClass";

class AboutClass extends react.Component {
  render() {
    return (
      <div>
        <h1>This is a FOOD Delivery App class based component!!</h1>
        <UserClass
          name={"Vanshika Goel (class)"}
          location={"India , Kolkata"}
        />
      </div>
    );
  }
}

export default AboutClass;
