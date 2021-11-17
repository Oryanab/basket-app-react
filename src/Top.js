import { Component } from "react";
export default class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.color || "red",
      manycolor: ["red", "blue", "yellow"],
      num: Math.floor(Math.random() * 3),
    };
  }
  render() {
    return (
      <h1 style={{ color: this.state.manycolor[this.state.num] }}>
        My Favorite Color is {this.state.color}
      </h1>
    );
  }
}
