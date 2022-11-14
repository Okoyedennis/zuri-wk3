import React from "react";
import "./Home.css";
import img1 from "../../asset/Group4028.png";
import img2 from "../../asset/Group59537.svg";
import img3 from "../../asset/Group4040.svg";
import img4 from "../../asset/Frame4041.svg";
import img5 from "../../asset/Frame151.png";
import img6 from "../../asset/Frame151(1).png";
import img7 from "../../asset/Frame151(2).png";
import img8 from "../../asset/Frame151(3).png";
import img9 from "../../asset/Frame151(7).png";
import img10 from "../../asset/Frame151(6).png";
import img11 from "../../asset/Frame151(5).png";
import img12 from "../../asset/Frame151(4).png";
import img13 from "../../asset/Frame59546.png";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";

const Home = () => {
  const data = [
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
  ];
  return (
    <div className="home">
      <div className="home__wrapper contain">
        <div className="home__left">
          <h5>
            Rent a <span>Place</span> away from <span>Home</span> in the
            <span> Metaverse</span>
          </h5>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="input__wrapper">
            <input placeholder="Search for location" type="text" />
            <button>Search</button>
          </div>
        </div>
        <div className="home__right">
          <img src={img1} alt="" />
        </div>
      </div>
      <section className="section__two">
        <div className="section__two__wrapper contain">
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
      </section>
      <section className="section__three">
        <div className="section__three__wrapper contain">
          <h5>Inspiration for your next adventure</h5>
          <div className="section__three-card__wrapper">
            {data.map(({ img, title, price, distance, space }) => (
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
      </section>
      <section className="section__four">
        <div className="section__four__wrapper contain">
          <div className="section__four__left">
            <h5>Metabnb NFTs</h5>
            <p>
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>
            <button>Learn more</button>
          </div>
          <div className="section__four__right">
            <img src={img13} alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
