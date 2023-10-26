import React from "react";
import Companies from "../components/Companies/Companies";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import GetStarted from "../components/GetStarted/GetStarted";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";

const Website = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Hero />
      </div> 
      <div style={{maxWidth:"1240px", margin:"0px auto"}}>
        <Companies />
        <Residencies />
        <Value />
        <Contact />
        <GetStarted />
      </div>
    </div>
  );
};

export default Website;
