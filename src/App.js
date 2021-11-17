import React from "react";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{ textAlign: "center", width: "50%", backgroundColor: "yellow" }}
      >
        <header>
          <h3>Groceries</h3>
        </header>
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

export default App;
