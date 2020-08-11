import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PhotoProduct />
      <ProductInfo category="LEBARAN" name="Pinky Swagg" />
    </div>
  );
}

function PhotoProduct() {
  return (
    <div className="Photo">
      <img src="sneaker.jpg" />
    </div>
  );
}

function ProductInfo(props) {
  const { category, name } = props;
  const price = 768000;

  return (
    <div className="Description">
      <p className="Cate">{category}</p>
      <h1 className="Title">{name}</h1>
      <p className="Price">IDR {price}</p>
      <p className="Info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, nihil
        laborum blanditiis veritatis, qui nostrum dolorem rerum exercitationem
        tenetur dolore consectetur suscipit vel ratione, eligendi magnam ad ab
        enim eos.
      </p>
      <a onClick={(product) => TambahCart(name, product)} href="#">
        Add to Cart
      </a>
    </div>
  );
}

function TambahCart(product) {
  console.log("Add to Cart " + product);
}

export default App;
