import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, location } = this.props;
    return (
      <div className="UserClass">
        <h1>Count :{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment Counter
        </button>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h3>Reach out to me @ Vanshikakol</h3>
      </div>
    );
  }
}

export default UserClass;
