import React from "react";
import "./App.css";

function Reviews() {
  // data JSON
  const users = [
    {
      id: 1,
      image: "user1.png",
      name: "Anna Cabella",
      review: "Harga murah tapi kualitas bagus",
    },
    {
      id: 2,
      image: "user1.png",
      name: "Angle Cabella",
      review: "Terimakasih, barangnya sudah sampai",
    },
  ];

  const listReview = users.map((itemReview) => (
    <div className="Item">
      <img src={itemReview.image} />
      <div className="User">
        <h3>{itemReview.name}</h3>
        <p>{itemReview.review}</p>
      </div>
    </div>
  ));

  return (
    <div className="Review">
      <h2>Reviews</h2>
      {listReview}
    </div>
  );
}

export default Reviews;
