import React from 'react';
import "../App.css";
import contentLogo from './Image/contentLogo.png';

export default function content() {
  return (
      <div className="Middware">
     <div className="contentLogo">
       <img src={contentLogo} height={152} width={498}/>
     </div>
     <div className="box"  >
      <h6>It is always a right reason to gift someone!We help you<br/> Create a truly memorable gifting experience!What are you<br/>Waiting for?</h6>
     </div>
     <div className='content' >
        <button className="explorebtn">
           Explore
           <span className="explorebtn1 bi bi-arrow-right-short"></span>
        </button>
        <button className="customizebtn" >
            Customize
        </button>
     </div>
     </div>
  )
}



// import React from "react";
// import happiness from './Image/unbox happiness.png'

// export default function Content(){
//     return(
//         <div className="container">
//          <div>
//              <img src={happiness} alt="happiness" className="affect" />
//          </div>
//          <div className="text">
//           <p>It is always a right reason to gift someone! We help you <br /> create a truly memorable gifting experience! What are <br /> you waiting for?</p>
//          </div>
//          <div className="buttonS">
//              <button>Explore <span className="bi bi-arrow-right-short"></span></button>
//              <button className="second2">Customize</button>
//          </div>
//         </div>
//     )
// }