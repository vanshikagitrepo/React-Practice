import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, location } = this.props;
    return (
      <div className="UserClass m-4 p-2 border-1">
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h3>Reach out to me @ Vanshikakol</h3>
      </div>
    );
  }
}

export default UserClass;
