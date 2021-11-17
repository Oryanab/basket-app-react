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

  clickedTrush = () => {
    this.state.shopping.length = 0;
  };

  removeFromShoppingList = (e) => {
    let foodName = e.target.id;
    const foundItem = this.state.shopping.find(
      (element) => element.name === foodName
    );
    if (foundItem.count > 0) {
      this.state.shopping[this.state.shopping.indexOf(foundItem)] = {
        name: foodName,
        count: foundItem.count - 1,
      };
    } else {
      document.getElementById(foodName).parentElement.remove();
    }
  };

  addToShoppingList = (e) => {
    if (
      !this.state.shopping.find(
        (element) => element.name === e.target.id.split("-")[0]
      )
    ) {
      this.state.shopping.push({ name: e.target.id.split("-")[0], count: 1 });
    } else {
      let foodName = e.target.id.split("-")[0];
      const foundItem = this.state.shopping.find(
        (element) => element.name === foodName
      );
      this.state.shopping[this.state.shopping.indexOf(foundItem)] = {
        name: foodName,
        count: foundItem.count + 1,
      };
    }

    this.setState(() => {
      return {
        shopping: this.state.shopping,
      };
    });
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
            <button onClick={this.clickedTrush}>Trush</button>
          </header>
          <Basket
            removeFromShoppingList={this.removeFromShoppingList}
            basket={this.state.shopping}
          />
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
                id={product + "-product"}
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
              <button
                onClick={this.props.removeFromShoppingList}
                style={{ float: "left" }}
                id={product.name}
              >
                -
              </button>
              <span style={{ marginLeft: "100px" }}>{product.name}</span>
              <span style={{ marginLeft: "2px" }}>X</span>
              <span style={{ marginLeft: "2px" }}>{product.count}</span>
            </div>
          );
        })}
      </ul>
    );
  }
}
