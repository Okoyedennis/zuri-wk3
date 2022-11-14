import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../asset/Group.png";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import ConnectWallet from "../Modal/ConnectWallet";

const Navbar = () => {
  const [click, setClick] = useState(false);
    const walletComponent = useRef();
    
  const handleClick = () => {
    setClick(!click);
  };

  const data = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Place to stay",
      path: "/placeToStay",
    },
    {
      title: "NFTs",
      path: "/",
    },
    {
      title: "Community",
      path: "/",
    },
  ];
    
    const connectWalletRequest = () => {
        walletComponent.current?.showWalletModal();
      };
    
  return (
    <div className="navbars">
      <div className="navbar__wrapper contain">
        <div className="logo__wrapper">
          <img src={logo} alt="logo" />
        </div>
        <ul className={click ? "ul active" : "ul"}>
          {data.map(({ title, path }) => (
            <Link to={path}>
              <li>{title}</li>
            </Link>
          ))}
          <div className="navbar__button_first">
            <button onClick={() => connectWalletRequest()}>
              Connect wallet
            </button>
          </div>
        </ul>
        <div className="navbar__button_second">
          <button onClick={() => connectWalletRequest()}>Connect wallet</button>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes className="icons" /> : <FaBars className="icons" />}
        </div>
      </div>
      <ConnectWallet ref={walletComponent} />
    </div>
  );
};

export default Navbar;
