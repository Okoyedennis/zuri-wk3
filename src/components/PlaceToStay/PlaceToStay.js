import React from "react";
import "./PlaceToStay.css";
import { VscSettings } from "react-icons/vsc";
import img5 from "../../asset/Frame151.png";
import img6 from "../../asset/Frame151(1).png";
import img7 from "../../asset/Frame151(2).png";
import img8 from "../../asset/Frame151(3).png";
import img9 from "../../asset/Frame151(7).png";
import img10 from "../../asset/Frame151(6).png";
import img11 from "../../asset/Frame151(5).png";
import img12 from "../../asset/Frame151(4).png";
import img14 from "../../asset/Frame151(8).png";
import img15 from "../../asset/Frame151(9).png";
import img16 from "../../asset/Frame151(10).png";
import img17 from "../../asset/Frame151(11).png";
import img18 from "../../asset/Frame151(12).png";
import img19 from "../../asset/Frame151(13).png";
import img20 from "../../asset/Frame151(14).png";
import img21 from "../../asset/Frame151(15).png";
import Card from "../Card/Card";

const PlaceToStay = () => {
  const data = [
    {
      title: "Resturant",
    },
    {
      title: "Cottage",
    },
    {
      title: "Castle",
    },
    {
      title: "fantast",
    },
    {
      title: "beach",
    },
    {
      title: "Carbins",
    },
    {
      title: "Off-grid",
    },
    {
      title: "Farm",
    },
  ];

  const cardData = [
    {
      img: img5,
      title: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      space: "available for 2weeks stay",
    },
    {
      img: img6,
      title: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      space: "available for 2weeks stay",
    },
    {
      img: img7,
      title: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      space: "available for 2weeks stay",
    },
    {
      img: img8,
      title: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      space: "available for 2weeks stay",
    },
    {
      img: img9,
      title: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      space: "available for 2weeks stay",
    },
    {
      img: img10,
      title: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      space: "available for 2weeks stay",
    },
    {
      img: img11,
      title: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      space: "available for 2weeks stay",
    },
    {
      img: img12,
      title: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      space: "available for 2weeks stay",
    },
    {
      img: img14,
      title: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      space: "available for 2weeks stay",
    },
    {
      img: img15,
      title: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      space: "available for 2weeks stay",
    },
    {
      img: img16,
      title: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      space: "available for 2weeks stay",
    },
    {
      img: img17,
      title: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      space: "available for 2weeks stay",
    },
    {
      img: img18,
      title: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      space: "available for 2weeks stay",
    },
    {
      img: img19,
      title: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      space: "available for 2weeks stay",
    },
    {
      img: img20,
      title: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      space: "available for 2weeks stay",
    },
    {
      img: img21,
      title: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      space: "available for 2weeks stay",
    },
  ];
  return (
    <div className="placeToStay">
      <div className="placeToStay__wrapper contain">
        <div className="placeToStay__head-wrapper">
          {data.map(({ title }) => (
            <p>{title}</p>
          ))}
          <div className="location">
            <p>Location</p>
            <VscSettings />
          </div>
        </div>

        <div className="section__three-card__wrapper">
          {cardData.map(({ img, title, price, distance, space }) => (
            <>
              <Card
                img={img}
                title={title}
                price={price}
                distance={distance}
                space={space}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaceToStay;
