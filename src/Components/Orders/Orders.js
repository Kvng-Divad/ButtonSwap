import "./Orders.css";
import React from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Buttonalt from "../Buttonalt/Buttonalt";
import Battery from "../../Assets/Battery.svg";
import Camera from "../../Assets/Camera.svg";
import Faceid from "../../Assets/Faceid.svg";
import Fingerprint from "../../Assets/Fingerprint.svg";
import Network from "../../Assets/Network.svg";
import Phone from "../../Assets/phone.svg";
import { useRecoilState } from "recoil";
import { singleProductState } from "../../data/state";

const Orders = () => {
  const [product] = useRecoilState(singleProductState);
  // eslint-disable-next-line
  const logo = product?.brand?.image;
  // eslint-disable-next-line
  const image = product?.meta?.images?.find(
    image => image?.image?.length > 1
  )?.image;
  const name = product?.name;
  // eslint-disable-next-line
  const price = product?.meta?.price?.min;
  const camera = product?.components?.camera?.join(" ");
  const display = product?.components?.display;
  const battery = `${product?.components?.battery?.name}${
    product?.components?.battery?.isRemovable ? "" : ", non-removable"
  }`;
  const chip = product?.components?.chip;

  return (
    <div className="Container2 grid">
      <div
        className="hero-icon flex"
        onClick={() => {
          window.history.back();
        }}
      >
        <ChevronLeftIcon className="heroicon" />
      </div>

      <div className="section-title">
        <h3>Choose a Phone Plan</h3>
      </div>

      <div className="order-container grid">
        <div className="order-left">
          <div className="order-logo"></div>
          <div className="order-images"></div>

          <div className="order-details grid">
            <h3>TOP DEVICE FEATURES</h3>

            <div className="phone-details grid">
              <div className="infos grid">
                <img src={Phone} alt="" />
                <span className="name">{display}</span>
              </div>

              <div className="infos grid">
                <img src={Camera} alt="" />
                <span className="name">{camera}</span>
              </div>

              <div className="infos grid">
                <img src={Battery} alt="" />
                <span className="name">{battery}</span>
              </div>

              <div className="infos grid">
                <img src={Fingerprint} alt="" />
                <span className="name">{chip}</span>
              </div>

              <div className="infos grid">
                <img src={Faceid} alt="" />
                <span className="name">Face ID</span>
              </div>

              <div className="infos grid">
                <img src={Network} alt="" />
                <span className="name">Superfast 5G Cellular</span>
              </div>
            </div>
          </div>
        </div>

        <div className="order-right">
          <div className="order-summary grid">
            <div className="order-details grid">
              <h4>MODEL</h4>
              <p>{name}</p>
            </div>

            <div className="order-details">
              <h4>CAPACITY</h4>
              <p>{}</p>
            </div>

            <div className="order-details">
              <h4>COLOR</h4>
              <p>{}</p>
            </div>

            <div className="order-details">
              <h4>PAYMENT PLAN</h4>
              <p>{}</p>
              <p>{}</p>
            </div>

            <div className="order-details">
              <h4>PAYMENT TERMS</h4>
            </div>
          </div>

          <div className="payment"></div>

          <div className="Button grid">
            <Buttonalt text="Apply" link="/summary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
