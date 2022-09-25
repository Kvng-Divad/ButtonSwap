import { React, useContext } from "react";
import "./Sidebar.css";
import { FaRegClipboard, FaSignOutAlt } from "react-icons/fa";
import { AiOutlineHome, AiOutlineWallet } from "react-icons/ai";
//import {BiSupport}from 'react-icons/bi'
import { NavLink } from "react-router-dom";
import profile from "../../Assets/profile.svg";
import male from "../../Assets/male-avatar.png";
import { motion } from "framer-motion";
import { toggleContext } from "../../Context/Context";
import { useUserContext } from "../../App";

const SidebarData = [
  {
    heading: "Dashboard",
    link: "/dashboard",
    icon: AiOutlineHome,
  },
  {
    heading: "My Application",
    link: "/applications",
    icon: FaRegClipboard,
  },
  {
    heading: "Payment",
    link: "/payment",
    icon: AiOutlineWallet,
  },
  /*{
      heading:'Action Center',
      link:'/history',
      icon: FaHistory,
    },
    {
      heading:'Support',
      link:'/support',
      icon: BiSupport,
    },*/
];

const Sidebar = () => {
  const { expanded, setExpanded } = useContext(toggleContext);
  const { user } = useUserContext();
  const reSize = () => {
    if (expanded === true) {
      setExpanded(!expanded);
    } else {
      setExpanded(false);
    }
  };

  window.addEventListener("resize", reSize);

  const sidebarVariants = {
    true: {
      left: "0rem",
    },
    false: {
      left: "-14rem",
    },
  };

  return (
    <motion.div
      className="sidebar grid"
      variants={sidebarVariants}
      animate={window.innerWidth <= 998 ? `${expanded}` : ""}
      onClick={() => setExpanded(false)}
    >
      <div className="dash-menu grid">
        {SidebarData.map((item, index) => {
          return (
            <NavLink
              to={item.link}
              className="menu-link flex"
              activeClassName="active"
              key={index}
            >
              <item.icon className="menu-icon" />
              <span className="menu-title">{item.heading}</span>
            </NavLink>
          );
        })}
      </div>

      <div className="menuitem">
        <NavLink
          to="/profile"
          className="profile grid"
          activeClassName="active"
        >
          <div className="profile-image">
            <img src={user?.gender === "male" ? male : profile} alt="" />
          </div>

          <div className="profile-details grid">
            <div className="profile-id flex">
              <p>ID:</p>
              <p>{user?.id.substring(0, 9)}</p>
            </div>

            <div className="profile-name">
              <h3>{user?.full_name}</h3>
            </div>
          </div>
        </NavLink>

        <div className="signout flex">
          <FaSignOutAlt className="menu-icon2" />
          <p>Sign Out</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
