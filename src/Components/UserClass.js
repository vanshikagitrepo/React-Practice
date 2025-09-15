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
        <h2> Name :{name} </h2>
        <h3> Location : {location}</h3>
        <h3> Reach me at : Vanshikagoelkol@gmail.com</h3>
        <h1>count : {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment counter
        </button>
      </div>
    );
  }
}

export default UserClass;
