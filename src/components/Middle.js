import React from "react";
import Experience from './Image/Gifting Exp.png'
import videoframe from './Image/video frame.png'
import Choose from "./Image/ChooseUnbox.png";
import fast from "./Image/fast-delivery.png";
import support from "./Image/support.png";
import verified from "./Image/verified.png"
import Box from "./Image/box (4).png";

export default function Middleware(){
    return(
        <div>
            <div>
                <img src={Experience} alt="Experience" className="Exp" />
                <img src={videoframe} alt="videoframe" className="videoframe" />
            </div>
            <div className="row rowsE">
                <div className="col-6">
                    <img src={Choose} alt="Choose" className="choose" />
                    <p>Tell us your requirement, sit back, we will get your <br /> gifting experience right!</p>
                    <div className="book">
                        Book Now<span className="bi bi-arrow-right-short"></span>
                    </div>
                </div>
                <div className="col-3">
                    <div className="fastd">
                        <span>
                            <img src={fast} alt="fast" />
                            <h6>Fast delivery</h6>
                            <div className="communderline"></div>
                        </span>
                        <span>
                            <img src={verified} alt="support" className="mt-5" />
                            <h6>Verified brands</h6>
                            <div className="communderline"></div>
                        </span>
                    </div>
                </div>
                <div className="col-3 supprt">
                <span>
                    <img src={support} alt="support" />
                    <h6>24*7 services</h6>
                    <div className="communderline">
                    </div>   
                </span>   
                <span>
                    <img src={Box} alt="Box" className="mt-5"/>
                    <h6>Careful Packaging</h6>
                    <div className="communderline">
                    </div>   
                </span>     
                </div>
            </div>
        </div>
    )
}