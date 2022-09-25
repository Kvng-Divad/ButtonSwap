import { React, useState, useRef } from "react";
import "./Header.css";
import Logo from "../../Assets/Logo.png";
import Logo2 from "../../Assets/Logo2.svg";
import profile from "../../Assets/profile.png";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <div className="navbar_flex">
      <Link to="/" className="logo">
        <img className="logo-img" src={Logo} alt="logo" />
      </Link>
      <div className="nav_Profile">
        <div className="profile2 flex">
          <div className="nav_app">
            <span>My Application</span>
            <img className="profile1" src={profile} alt="logo" />
          </div>
        </div>

        <div className="logo">
          <img className="logo-img2" src={Logo2} alt="logo" />

          <div className="toggler" onClick={handleClick}>
            {click ? (
              <FaTimes
                size={16}
                style={{ color: "#000" }}
                ref={btnRef}
                onClick={onClose}
              />
            ) : (
              <FaBars
                size={16}
                style={{ color: "#000" }}
                ref={btnRef}
                onClick={onOpen}
              />
            )}
          </div>
        </div>
      </div>

      <>
        <Drawer
          isOpen={isOpen}
          placement="top"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerContent className="drop-menu grid">
            <DrawerBody>
              <ul className="drop-menu-list grid">
                <li>
                  <NavLink to="/" className="navlink">
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/#howitworks" className="navlink">
                    HOW IT WORKS
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/#calculator" className="navlink">
                    CALCULATOR
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/#faqs" className="navlink">
                    FAQS
                  </NavLink>
                </li>
              </ul>

              <Link
                to="/products"
                onClick={onClose}
                className="btn-container grid"
              >
                <button className="btn-alt2">Apply Now</button>
              </Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    </div>
  );
};

export default Header;
