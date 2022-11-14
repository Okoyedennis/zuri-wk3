import React, { useImperativeHandle, useState } from "react";
import { forwardRef } from "react";
import "./ConnectWallet.css";
import { Modal } from "react-bootstrap";
import img1 from "../../asset/metamask.png";
import img2 from "../../asset/wallet.png";
import {IoIosArrowForward} from "react-icons/io"

const ConnectWallet = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);

  useImperativeHandle(ref, () => ({
    showWalletModal() {
      setTimeout(() => {
        setShow(true);
      }, 0);
    },
  }));
  return (
    <Modal show={show} centered>
      <div className="modal-header">
        <h5 className="modal-title">Connect Wallet</h5>
        <button
          type="button"
          className="btn-close"
          onClick={() => setShow(false)}
        />
      </div>
      <div className="modal-body">
        <p>Choose your preferred wallet:</p>
        <div className="button-camo first-child">
          <div className="button-camo-left ">
            <img src={img1} alt="" />
            <p>Metamask</p>
          </div>

          <IoIosArrowForward />
        </div>
        <div className="button-camo">
          <div className="button-camo-left">
            <img src={img2} alt="" />
            <p>Metamask</p>
          </div>
          <IoIosArrowForward />
        </div>
      </div>
    </Modal>
  );
});

export default ConnectWallet;
