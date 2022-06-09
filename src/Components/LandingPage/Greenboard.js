import "./Landing.css";
// import green from "./Image/shopingcart.png";
import Want from "./Image/wanttotry.png";

export default function Greenboard() {
    return (
        <div>
            <div className="greenBoard">
                <img src={Want} className="inimg" />
                <span className="shareus">Share us your requirements, likes and interests! We will curate a customized unboxing experience for you!</span>
                <div>
                    <button className="sharebtn" style={{ color: "white" }}> Send a sample</button>
                    <button className="enquirebtn" style={{ color: "#225779" }}>Enquire now</button>
                </div>
            </div>
        </div>
    )
}