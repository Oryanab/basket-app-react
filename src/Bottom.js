import { Component } from "react";
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer
        style={{
          padding: "20px",
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
        }}
      >
        Footer Basket
      </footer>
    );
  }
}
