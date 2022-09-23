import React, { useEffect, useRef, useState } from "react";
import "./Verification.css";
import Buttonalt from "../Buttonalt/Buttonalt";
import { Center, HStack, Icon, IconButton, Input } from "@chakra-ui/react";
import Breadcrumbs from "../Breadcrumb/Breadcrumb";
import icon from "../../Assets/Icon5.png";
import CameraPhoto, { FACING_MODES } from "jslib-html5-camera-photo";
import { FaCamera, FaCameraRetro, FaCheck } from "react-icons/fa";
import axios from "axios";
import { applicationState } from "../../data/state";
import { useRecoilState } from "recoil";
import { API_URI } from "../../constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Verify = () => {
  const videoRef = useRef();
  const [application, setApplication] = useRecoilState(applicationState);
  const suppliedRef = useRef();
  const [supplied, setSupplied] = useState();
  const [cameraPhoto, setCameraPhoto] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  function startCameraMaxResolution(idealFacingMode) {
    if (cameraPhoto) {
      cameraPhoto.startCameraMaxResolution(idealFacingMode).then(() => {
        setIsOpen(true);
      });
    }
  }

  function takePhoto() {
    if (cameraPhoto) {
      const config = {
        sizeFactor: 1,
      };
      const dataUri = cameraPhoto.getDataUri(config);
      setSupplied(dataUri);
    }
  }

  function stopCamera() {
    if (cameraPhoto) {
      cameraPhoto.stopCamera().then(() => {
        setIsOpen(false);
      });
    }
  }

  const checkBvn = () => {
    stopCamera();
    const form = new FormData();
    form.append("idNumber", application.user.bvn);
    form.append("photoBase64", supplied);
    axios
      .post(`${API_URI}/auth/face-match`, form)
      .then(res => {
        if (res.data.ok) {
          const { supplied, stored } = res.data.payload;
          setApplication({
            ...application,
            identity: {
              stored,
              supplied,
            },
          });
        }
      })
      .catch(error => {
        const message = error?.response
          ? error?.response?.data?.message
          : error?.message;
        toast(message, {
          type: "error",
        });
      });
    setIsDisabled(false);
    axios.defaults.withCredentials = true;
  };

  useEffect(() => {
    setCameraPhoto(new CameraPhoto(videoRef.current));
  }, []);

  return (
    <div>
      <div className="grid">
        <div className="head">
          <Breadcrumbs current={4} />
        </div>
      </div>

      <div className="Container grid" style={{ position: "relative" }}>
        <div className="section-title">
          <h3>Identity Verification</h3>
          <p>Kindly provide your information in the required fields</p>
        </div>

        {/* Style this properly David */}
        <Center>
          <div
            className="verify-input grid"
            onClick={() => {
              const facingMode = FACING_MODES.USER;
              startCameraMaxResolution(facingMode);
            }}
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
        </Center>

        {isOpen && (
          <HStack
            className="camera-container"
            w={{ base: "50%", md: "20%" }}
            justifyContent="space-between"
          >
            <IconButton
              variant={"solid"}
              colorScheme="teal"
              aria-label="start camera"
              fontSize="20px"
              icon={<FaCamera />}
              onClick={takePhoto}
              className="camera"
            />

            {supplied && (
              <IconButton
                variant={"solid"}
                colorScheme="whatsapp"
                aria-label="start camera"
                fontSize="20px"
                icon={<FaCheck />}
                onClick={checkBvn}
                className="camera"
              />
            )}

            <IconButton
              variant={"solid"}
              colorScheme="messenger"
              aria-label="start camera"
              fontSize="20px"
              icon={<FaCameraRetro />}
              onClick={stopCamera}
              className="camera"
            />
          </HStack>
        )}

        <video
          ref={videoRef}
          style={{ display: !supplied && isOpen ? "block" : "none" }}
          className="video-element"
          autoPlay
        />
        <img
          alt="imgCamera"
          className="video-element"
          src={supplied}
          style={{ display: supplied && isOpen ? "block" : "none" }}
        />

        <div className="Button grid">
          <Buttonalt disabled={isDisabled} text="Next" link="/authentication" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Verify;
