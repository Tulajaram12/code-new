import image from "./image/unbox.png";
//import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/LandingPage/Navbar";
import Content from "./Components/LandingPage/Content";
import Center from "./Components/LandingPage/Center.js";
import Middleware from "./Components/LandingPage/Middle";
import Downware from "./Components/LandingPage/Downware";
import Footer from "./Components/LandingPage/Footer";
import Custom from "./Components/LandingPage/Custom";
import Greenboard from "./Components/LandingPage/Greenboard";
import Login from "./Components/LoginPage/Login";
import { useState } from "react";

function App() {

  const [isLogin, setIsLogin] = useState(false);

  const setHandleClick = () => {
    setIsLogin((isLogin) => !isLogin)
  }

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
