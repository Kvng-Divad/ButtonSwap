import "./Verification.css";
import React, { useEffect, useRef, useState } from "react";
import Buttonalt from "../Buttonalt/Buttonalt";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Center,
  CloseButton,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import Breadcrumbs from "../Breadcrumb/Breadcrumb";
import icon from "../../Assets/Icon5.png";
import CameraPhoto, { FACING_MODES } from "jslib-html5-camera-photo";
import { FaCamera, FaCameraRetro, FaCheck } from "react-icons/fa";
import axios from "axios";
import { applicationState } from "../../data/state";
import { useRecoilState } from "recoil";
import { API_URI } from "../../constants";
import { toast } from "react-toastify";

const defaultInfo = { message: "", status: "" };

const Verify = () => {
  const videoRef = useRef();
  const [application, setApplication] = useRecoilState(applicationState);
  const [supplied, setSupplied] = useState();
  const [cameraPhoto, setCameraPhoto] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [info, setInfo] = React.useState(defaultInfo);
  const isMobile = window.innerWidth <= 768;

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

  function urltoFile(url, filename, mimeType) {
    return fetch(url)
      .then(function (res) {
        return res.arrayBuffer();
      })
      .then(function (buf) {
        return new File([buf], filename, { type: mimeType });
      });
  }

  const checkBvn = () => {
    stopCamera();
    urltoFile(supplied, "photoBase64", "img/png").then(file => {
      const form = new FormData();
      form.append("idNumber", application.user.bvn);
      form.append("photoBase64", file);
      axios
        .post(`${API_URI}/auth/face-match`, form)
        .then(res => {
          if (res.data.ok) {
            const { supplied, stored, face_verification } = res.data.payload;
            setApplication({
              ...application,
              identity: {
                stored: stored || face_verification?.photo || "",
                supplied,
              },
              face_verification,
            });
            toast("We've successfully received your Selfie!", { type: "info" });
            setIsDisabled(false);
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
      axios.defaults.withCredentials = true;
    });
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
      {info?.message && (
        <Center>
          <Alert
            display={"flex"}
            justifyContent="space-between"
            alignSelf={"center"}
            w={{ base: "90%", md: "50%" }}
            status={info.status}
          >
            <AlertIcon />
            <AlertTitle>{info?.message}</AlertTitle>
            <CloseButton onClick={() => setInfo(defaultInfo)} />
          </Alert>
        </Center>
      )}
      <div className="Container grid" style={{ position: "relative" }}>
        <div className="section-title">
          <h3>Identity Verification</h3>
          <p>Kindly provide your information in the required fields</p>
        </div>

        {/* Style this properly David */}
        <Center>
          <div
            className="verify-input grid"
            style={{ cursor: "pointer" }}
            onClick={() => {
              const facingMode = isMobile
                ? FACING_MODES.USER
                : FACING_MODES.ENVIRONMENT;
              startCameraMaxResolution(facingMode);
            }}
          >
            <h3>Take / Upload a photo of your face</h3>
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
    </div>
  );
};

export default Verify;
