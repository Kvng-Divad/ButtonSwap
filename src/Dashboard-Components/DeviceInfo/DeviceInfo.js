import React from "react";
import "./DeviceInfo.css";
import Battery from "../../Assets/Battery.svg";
import Camera from "../../Assets/Camera.svg";
import Fingerprint from "../../Assets/Fingerprint.svg";
import Phone from "../../Assets/phone.svg";

const DeviceInfo = ({ title }) => {
  return (
    <div className="application-details">
      <div className="dash-header flex">
        <p className="dash-title">{title}</p>
      </div>

      <div className="device-info-container grid">
        <div className="device-images grid">
          <div className="device-img">
            <img src={""} alt="img" />
          </div>
        </div>

        <div className="device-detail grid">
          <p>TOP DEVICE FEATURES</p>

          <div className="device-details grid">
            <div className="spec grid">
              <img src={Phone} alt="" />
              <span className="name">{""}</span>
            </div>

            <div className="spec grid">
              <img src={Camera} alt="" />
              <span className="name">{""}</span>
            </div>

            <div className="spec grid">
              <img src={Battery} alt="" />
              <span className="name">{""}</span>
            </div>

            <div className="spec grid">
              <img src={Fingerprint} alt="" />
              <span className="name">{""}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceInfo;
