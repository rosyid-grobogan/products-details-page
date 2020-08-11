import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const category = "SNEAKER";
  const price = 768000;

  return (
    <div class="App">
      <div class="Photo">
        <img src="sneaker.jpg" />
      </div>
      <div class="Description">
        <p class="Cate">{category}</p>
        <h1 class="Title">Pinky Swagg</h1>
        <p class="Price">IDR {price}</p>
        <p class="Info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          nihil laborum blanditiis veritatis, qui nostrum dolorem rerum
          exercitationem tenetur dolore consectetur suscipit vel ratione,
          eligendi magnam ad ab enim eos.
        </p>
      </div>
    </div>
  );
}

export default App;
