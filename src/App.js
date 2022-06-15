import image from "./image/unbox.png";
//import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/LandingPage/Navbar";
import Content from "./Components/LandingPage/Content";
import Center from "./Components/LandingPage/Center.js";
import Middleware from "./Components/LandingPage/Middle";
import Downware from "./Components/LandingPage/Downware";
import Footer from "./Components/LandingPage/Footer";
import Custom from "./Components/LandingPage/Custom";
import Greenboard from "./Components/LandingPage/Greenboard";
// import { useState } from "react";

function App() {

  return (
    <div style={{ backgroundImage: `url(${image})` }} className="App">
      <div className="container-fluid">
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
        <Content />
        <Middleware />
        <Center />
        <Downware />
        <Custom />
        <Greenboard />
        <Footer />
      </div>
    </div >
  );
}

export default App;
