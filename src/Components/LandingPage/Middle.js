import React from "react";
import Experience from "./Image/Gifting Exp.png";
import videoframe from "./Image/video frame.png";
import Choose from "./Image/ChooseUnbox2.png";
import fast from "./Image/fast-delivery.png";
import support from "./Image/support.png";
import verified from "./Image/verified.png";
import India from "./Image/india.png";
import playbutton from "./Image/playicon.png"

export default function Middleware() {
  return (
    <div>
      <div>
        <img src={Experience} alt="Experience" className="Exp" />
        <img src={videoframe} alt="videoframe" className="videoframe" />
        <img src={playbutton} alt="playicon" className="playicon"></img>
      </div>
      <div className="rowsE">
        <div>
          <img src={Choose} alt="Choose" className="choose" />
        </div>
        <div className="rowsE1">
          <div className="row" style={{ paddingTop: "30px" }}>
            <div className="col-2">
              <div className="fastd">
                <div className="row">
                  <img src={fast} alt="fast" className="mt-5 " />
                  <div style={{ position: "absolute", marginTop: "60px" }}>
                    <h6 className="col-2">Fast delivery</h6>
                    <div className="communderline"></div>
                    <p style={{ marginLeft: "80px" }} className="mt-2 Pfamily">
                      Lorem ipsum dolor sit amet consectetur?
                    </p>
                  </div>
                </div>
                <div className="row">
                  <img src={verified} alt="support" className="mt-5 back" />
                  <div style={{ position: "absolute", marginTop: "60px" }}>
                    <h6 className="col-2">Verified brands</h6>
                    <div className="communderline "></div>
                    <p className="mt-2 Pfamily" style={{ marginLeft: "80px" }}>
                      Lorem ipsum dolor sit amet consectetur?
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
                  <p style={{ marginLeft: "80px" }} className="mt-2 Pfamily">
                    Lorem ipsum dolor sit amet consectetur?
                  </p>
                </div>
              </div>
              <div className="row">
                <img className="mt-5" src={support} alt="support" />
                <div style={{ position: "absolute", marginTop: "47px" }}>
                  <h6 style={{ display: "inline" }} className="col-2">
                    24*7 services
                  </h6>
                  <div className="communderline"></div>
                  <p style={{ marginLeft: "80px" }} className="mt-2 Pfamily">
                    Lorem ipsum dolor sit amet consectetur?
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
