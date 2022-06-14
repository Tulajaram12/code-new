import React from "react";
import "./Landing.css";
import contentLogo from "./Image/contentLogo.png";
import Rectangle from "./Image/Rectangle.png";
import Rectangle2 from "./Image/Rectangle2.png";
import Enquire from "../LoginPage/Enquire";

export default function content() {
  return (
    <div className="Middware">
      <div className="contentLogo">
        <img src={contentLogo} alt="contentLogo" height={152} width={498} />
      </div>

      <div className="box">
        <h6>
          It is always a right reason to gift someone!We help you
          <br /> Create a truly memorable gifting experience!What are you
          <br />
          Waiting for?
        </h6>
      </div>
      <div className="content d-flex">
        <button className="explorebtn">
          Explore
          <span className="explorebtn1 bi bi-arrow-right-short"></span>
        </button>
        <div className="customizebtn">
          <Enquire />
        </div>
      </div>
      <div className="Rectangle">
        <img src={Rectangle} alt="Rectangle" />
      </div>
      <div className="Designed">
        <img src={Rectangle2} alt="Rectangle" />
      </div>
    </div>
  );
}
