import React from "react";
import "./Landing.css";
import Logo from "./Image/Logo.png";
import Dropdown from "./Dropdown.js";
import { Link } from "react-router-dom";
import Signin from "../LoginPage/Signin";

export default function Navbar() {

  return (
    <>
      <div className="commn">
        <div className="header">
          <div className="logo arrange-left width-25">
            <div>
              <img
                src={Logo}
                height="77"
                alt="Logo"
                width="179"
                margin-top="10"
              />
            </div>
          </div>
          <div className="navbar arrange-left navbar-50">
            <ul className="effects">
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <li className="HomeAbout">Home</li>
              </Link>
              <li>
                <Dropdown />
              </li>

              <li className="HomeAbout">About</li>
            </ul>
          </div>
          <div className="status arrange-left width-26">
            <span className="bi bi-search"></span>
            <Signin />
          </div>
        </div>
      </div>
    </>
  );
}
