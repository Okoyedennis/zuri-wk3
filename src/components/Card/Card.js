import React from "react";
import "./Card.css";
import img2 from "../../asset/Frame59528.png";

const Card = ({ img, title, price, distance, space }) => {
  return (
    <div className="card">
      <img src={img} className="card__home" alt="home" />
      <div className="card__top-text">
        <p>{title}</p>
        <p>{price}</p>
      </div>
      <div className="card__bottom-text">
        <p>{distance}</p>
        <p>{space}</p>
      </div>
      <div className="img_last-wrapper">
        <img src={img2} alt="rating" />
        <div className="space" />
      </div>
    </div>
  );
};

export default Card;
