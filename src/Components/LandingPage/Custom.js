import "./Landing.css";
import lowmoq from "./Image/lowmoq (1).png";
import shirt from "./Image/shirt.png";
import hamper from "./Image/hamper.png";
export default function Custom() {
    return (
        <div className="Downware1">
            <div className="circle1"><img className="imgcir1" src={lowmoq}></img></div>
            <a href="" style={{ marginTop: "15px", marginLeft: "269PX" }}> Low MOQ ?</a>
            {/* <div className="crcl1text">Not to worry, we will work it out
             <div>Customizing products just for your brand</div>
             </div>  */}
            <div className="circle2"><img className="imgcir2" src={shirt}></img>  </div>
            <a href="" style={{ marginTop: "10px", marginLeft: "639PX" }}> Brand Customization ?</a>

            <div className="circle3"> <img className="imgcir3" src={hamper}></img></div>
            <a href="" style={{ marginTop: "10px", marginLeft: "1074PX" }}> Need hampers ?</a>

        </div>
    )
}