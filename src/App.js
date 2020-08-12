import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import ReviewItems from "./Reviews";

function App() {
  return (
    <div className="App">
      <PhotoProduct />
      <ProductInfo category="LEBARAN" name="Pinky Swagg" isDiscount="coming" />
      <ReviewItems />
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
  const benefits = [
    "Tidak kusut terkena air",
    "Bahan lebih halus",
    "Tidak gerah",
  ];
  const listBenefits = benefits.map((itemBenefit) => <li>{itemBenefit}</li>);

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
      <ul>{listBenefits}</ul>
      <a onClick={(product) => TambahCart(name, product)} href="#">
        Add to Cart
      </a>
    </div>
  );
}

// Event
function TambahCart(product) {
  console.log("Add to Cart " + product);
}

// Conditional
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
