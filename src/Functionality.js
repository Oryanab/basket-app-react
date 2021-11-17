import { Component } from "react";
import reactDom from "react-dom";
import React from "react";
export default class Functionality extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopping: [],
    };
  }
  addToShoppingList = (e) => {
    //let basket = this.state.shopping;
    this.state.shopping.push(e.target.id);
    this.setState(() => {
      return {
        basket: this.state.shopping,
      };
    });
    console.log(this.state.shopping);
  };
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
          <Groceries addToShopping={this.addToShoppingList} />
        </div>
        <div
          style={{ textAlign: "center", width: "50%", backgroundColor: "pink" }}
        >
          <header>
            <h3>Basket</h3>
          </header>
          <Basket basket={this.state.shopping} />
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
  render() {
    return (
      <ul>
        {this.state.groceries.map((product) => {
          return (
            <div style={{ display: "flex" }}>
              <button
                onClick={this.props.addToShopping}
                style={{ float: "left" }}
                id={product}
              >
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

class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopping: props.basket,
    };
  }
  render() {
    return (
      <ul>
        {this.state.shopping.map((product) => {
          console.log(product);
          return (
            <div style={{ display: "flex" }}>
              <button style={{ float: "left" }} id={product}>
                -
              </button>
              <span style={{ marginLeft: "100px" }}>{product}</span>
            </div>
          );
        })}
      </ul>
    );
  }
}
