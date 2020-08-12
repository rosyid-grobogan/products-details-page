import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PhotoProduct />
      <ProductInfo category="LEBARAN" name="Pinky Swagg" isDiscount="coming" />
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
  const { category, name, isDiscount } = props;
  const price = 768000;

  return (
    <div className="Description">
      <p className="Cate">{category}</p>
      <h1 className="Title">{name}</h1>
      <p className="Price">IDR {price}</p>
      <CheckDiscount isDiscount={isDiscount} />
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

function CheckDiscount(props) {
  const { isDiscount } = props;
  if (isDiscount == "yes") {
    return <p>Diskon 50% Off</p>;
  } else if (isDiscount == "coming") {
    return <p>Akan ada diskon ..</p>;
  } else {
    return <p>Belum ada diskon</p>;
  }
}

export default App;
