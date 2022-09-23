import React, { useRef } from "react";
import "./Verification.css";
import Buttonalt from "../Buttonalt/Buttonalt";
import { Input } from "@chakra-ui/react";
import Breadcrumbs from "../Breadcrumb/Breadcrumb";
import icon from "../../Assets/Icon5.png";

const Verify = () => {
  const storedRef = useRef();
  const suppliedRef = useRef();
  return (
    <div>
      <div className="grid">
        <div className="head">
          <Breadcrumbs current={4} />
        </div>
      </div>

      <div className="Container grid">
        <div className="section-title">
          <h3>Identity Verification</h3>
          <p>Kindly provide your information in the required fields</p>
        </div>

        {/* Style this properly David */}
        <div
          className="verification-container grid"
          onClick={() => storedRef.current?.click()}
        >
          <div className="verify-input grid">
            <h3>Take picture / Upload ID for verification</h3>
            <img src={icon} alt="upload icon" />
            <Input
              ref={storedRef}
              hidden
              placeholder=""
              size="md"
              type="file"
              className="img-input"
              capture="camera"
            />
            <p>
              National ID/ International <br /> passport/ NIN slip
            </p>
          </div>

          <div
            className="verify-input grid"
            onClick={() => suppliedRef.current?.click()}
          >
            <h3>Take / Upload a photo of your face</h3>
            <Input
              ref={suppliedRef}
              hidden
              placeholder=""
              size="md"
              type="file"
              className="img-input"
            />
            <img src={icon} alt="upload icon" />
            <p>
              Use your selfie camera to
              <br /> take a picture
            </p>
          </div>
        </div>

        <div className="Button grid">
          <Buttonalt text="Next" link="/authentication" />
        </div>
      </div>
    </div>
  );
};

export default Verify;
