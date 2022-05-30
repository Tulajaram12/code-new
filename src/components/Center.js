import React from "react";
import plenty from "./Image/plenty options.png";
import shoe from "./Image/Shoe.png";
import dress from "./Image/dress.png";
import cake from "./Image/cake.png";
import cloth from "./Image/men clothes.png";
import teddy from "./Image/teddy.png";
import flower from "./Image/flowers.png";
import watch from "./Image/watch.png";
import batman from "./Image/lego Batman.png"

export default function Center(){
    return(
        <div>
           <div className="plenty">
               <img src={plenty} alt="plenty" />
           </div>
           <div className="btn-toolbar arrangebtn">
            <button className="btn">New joinee-kits</button>
            <button className="btn">Anniversary</button>
            <button className="btn">Occasion-based</button>
            <button className="btn">Festive</button>
            <button className="btn">General</button>
            <button className="btn">Eco-friendly</button>
           </div>
           <div className="para">
               <p>Umpteen options to choose from in all price range!</p>
           </div>
           <div className="cards" style={{display:'flex'}}>
            <div className="cardd">
             <img className="card-image-top" src={shoe} alt="shoe"/>
             <div className="card-body d-grid">
                 <button className="btn">Shop now</button>
             </div>
            </div>
            <div className="carddshirt">
             <img className="card-image-top" src={dress} alt="dress"/>
            </div>
            <div className="carddcake">
             <img className="card-image-top" src={cake} alt="cake"/>
            </div>
            <div className="cardcloth">
             <img className="card-image-top" src={cloth} alt="cloth"/>
            </div>
           </div>

           
           <span>
           <div className="cards" style={{display:'flex'}}>
            <div className="cardteddy">
             <img className="card-image-top" src={teddy} alt="teddy" />
            </div>
            <div className="cardflower">
             <img className="card-image-top" src={flower} alt="flower"/>
            </div>
            <div className="cardwatch">
             <img className="card-image-top" src={watch} alt="watch"/>
            </div>
            <div className="cardbatman">
             <img className="card-image-top" src={batman} alt="batman"/>
            </div>
           </div>
           </span>
           <div className="explo">
               <button className="btn-link explo">Explore more <span className="bi bi-arrow-right-short"></span></button>
           </div>
        </div>
    )
}