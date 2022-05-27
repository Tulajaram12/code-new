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