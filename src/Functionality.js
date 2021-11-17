import { Component } from "react";
export default class Functionality extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div
          style={{
            textAlign: "center",
            width: "50%",
            backgroundColor: "yellow",
          }}
        >
          <header>
            <h3>Groceries</h3>
          </header>
          <Groceries />
        </div>
        <div
          style={{ textAlign: "center", width: "50%", backgroundColor: "pink" }}
        >
          <header>
            <h3>Basket</h3>
          </header>
        </div>
      </div>
    );
  }
}

class Groceries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [
        "Strawberry",
        "Blueberry",
        "Orange",
        "Banana",
        "Apple",
        "Carrot",
        "Celery",
        "Mushroom",
        "Green",
        "Pepper",
        "Eggs",
        "Cheese",
        "Butter",
        "Chicken",
        "Beef",
        "Pork",
        "Fish",
        "Rice",
        "Pasta",
        "Bread",
      ],
    };
  }
  changeColor = () => {
    this.setState({ favoritecolor: "blue" });
  };

  render() {
    return (
      <ul>
        {this.state.groceries.map((product) => {
          return (
            <div style={{ display: "flex" }}>
              <button style={{ float: "left" }} id={product}>
                +
              </button>
              <span style={{ marginLeft: "100px" }}>{product}</span>
            </div>
          );
        })}
      </ul>
    );
  }
}
