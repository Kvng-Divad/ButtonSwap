import React from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumbs = ({ current = 1 }) => {
  return (
    <div className="Breadcrumb-container grid">
      <div className="hero-Section grid">
        <div
          className="Hero-icon flex"
          onClick={() => {
            window.history.back();
          }}
        >
          <ChevronLeftIcon className="heroicon" />
        </div>
        <h3 className="hero-title">APPLICATION</h3>
      </div>

      <div className="Breadcrumb flex">
        <div
          className={`breadcrumbItem flex${
            current >= 1 ? " isCurrentPage" : ""
          }`}
        >
          <Link to="/details" className="breadcrumbLink ">
            1
          </Link>
        </div>
        <div
          className={`seperator${current >= 1 ? " isCurrentPage" : ""}`}
        ></div>
        <div
          className={`breadcrumbItem flex${
            current >= 2 ? " isCurrentPage" : ""
          }`}
        >
          <Link to="/application" className="breadcrumbLink">
            2
          </Link>
        </div>
        <div
          className={`seperator${current >= 2 ? " isCurrentPage" : ""}`}
        ></div>
        <div
          isCurrentPage
          className={`breadcrumbItem flex${
            current >= 3 ? " isCurrentPage" : ""
          }`}
        >
          <Link to="/income" className="breadcrumbLink">
            3
          </Link>
        </div>
        <div
          className={`seperator${current >= 3 ? " isCurrentPage" : ""}`}
        ></div>
        <div
          className={`breadcrumbItem flex${
            current >= 4 ? " isCurrentPage" : ""
          }`}
        >
          <Link to="/verification" className="breadcrumbLink">
            4
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
