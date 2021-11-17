import { Component } from "react";
export default class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <h1
        style={{
          padding: "50px",
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
        }}
      >
        Shopping Basket
      </h1>
    );
  }
}
