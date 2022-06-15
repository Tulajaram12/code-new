import React from "react";
import Experience from "./Image/Gifting Exp.png";
import videoframe from "./Image/video frame.png";
import Choose from "./Image/ChooseUnbox2.png";
import fast from "./Image/fast-delivery.png";
import support from "./Image/support.png";
import verified from "./Image/verified.png";
import India from "./Image/india.png";
import Baloon from "./Image/Baloon.png";
import Gifts from "./Image/Gifts.png";
import Box from "./Image/Box.png";
import playbutton from "./Image/playicon.png";
import Rect from "./Image/Rect.png";
import Heart from "./Image/Heart.png";


export default function Middleware() {
  return (
    <div>
      <div>
        <img src={Experience} alt="Experience" className="Exp" />
        <img src={videoframe} alt="videoframe" className="videoframe" />
        <img src={playbutton} alt="playicon" className="playicon"></img>
      </div>
      <div className="presentation">
        <img src={Rect} alt="Rect" />
      </div>
      <div className="Heart">
        <img src={Heart} alt="Heart" />
      </div>
      <div className="rowsE">
        <div>
          <img src={Choose} alt="Choose" className="choose" />
        </div>
        <div className="rowsE1">
          <div>
            <div style={{ position: "relative", display: "flex" }}>
              <div className="baloon" style={{ position: "relative" }}>
                <img src={Baloon} alt="Baloon" className="image1" />
              </div>
              <div className="baloon" style={{ position: "relative" }}>
                <img src={Box} alt="Box" className="image2" />
              </div>
              <div className="baloon" style={{ position: "relative" }}>
                <img src={Gifts} alt="Gifts" className="image3" />
              </div>
            </div>
          </div>
          <div className="row" style={{ paddingTop: "30px" }}>
            <div className="col-2">
              <div className="fastd">
                <div className="row">
                  <img src={fast} alt="fast" className="mt-5 " />
                  <div style={{ position: "absolute", marginTop: "60px" }}>
                    <h6 className="col-2">Fast delivery</h6>
                    <div className="communderline"></div>
                    <p
                      style={{ marginLeft: "80px", fontWeight: "500" }}
                      className="mt-2 Pfamily"
                    >
                      Sending in some real quick appreciation <br /> shouldn't
                      be a problem with UnBox
                    </p>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "90px" }}>
                  <img src={verified} alt="support" className="mt-5 back" />
                  <div style={{ position: "absolute", marginTop: "60px" }}>
                    <h6 className="col-2">Verified brands</h6>
                    <div className="communderline "></div>
                    <p
                      className="mt-2 Pfamily"
                      style={{ marginLeft: "80px", fontWeight: "500" }}
                    >
                      Brands that are totally gift worthy <br /> with your
                      branding
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 supprt">
              <div className="row">
                <img src={India} alt="India" className="mt-5" />
                <div style={{ position: "absolute", marginTop: "47px" }}>
                  <h6 style={{ display: "inline" }} className="col-2">
                    Pan India fullfillment
                  </h6>
                  <div className="communderline"></div>
                  <p
                    style={{ marginLeft: "80px", fontWeight: "500" }}
                    className="mt-2 Pfamily"
                  >
                    No matter where your employees <br /> are, near or far,
                    we've got it covered
                  </p>
                </div>
              </div>
              <div className="row" style={{ marginTop: "90px" }}>
                <img className="mt-5" src={support} alt="support" />
                <div style={{ position: "absolute", marginTop: "47px" }}>
                  <h6 style={{ display: "inline" }} className="col-2">
                    24*7 services
                  </h6>
                  <div className="communderline"></div>
                  <p
                    style={{ marginLeft: "80px", fontWeight: "500" }}
                    className="mt-2 Pfamily"
                  >
                    Dreaming of gifts at midnight? We <br />
                    hear you, loud & clear 24*7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
